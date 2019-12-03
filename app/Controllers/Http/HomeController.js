'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client')
const Inventory = use('App/Models/Inventory')
const Sale = use('App/Models/Sale')

const AprioriListener = use('App/Models/AprioriListener')
const ABCCurveListener = use('App/Models/ABCCurveListener')
const Notification = use('App/Models/Notification')

class HomeController {

    //Listener vai ser o subject
    //Notification vai ser o observer

    async home({ view }) {

        const notification = new Notification('off')
        const aprioriListener = new AprioriListener()
        
        aprioriListener.subscribe(notification)
        
        await aprioriListener.loadApi()
        aprioriListener.searchForBest()

        const notificationL = await notification.formatNotification()
 
        const chartValues = await this.loadCharts()

        const clientProduct = this.loadChartClientProduct()
        const clientTotal = this.loadChartClientTotal()
        const abcCurve = this.loadChartABC()

        return view.render('home', {  chartValues: chartValues, 
                                      notificationL: notificationL,
                                      clientProduct: clientProduct,
                                      clientTotal: clientTotal,
                                      abcCurve: abcCurve})
    }

    //Load chart values for Dashboard
    async loadCharts() {
        const numberClients = await Client.query().count('id AS nCl')
        const itemsStock = await Inventory.query().sum('amount AS iSc')
        const itemsSold = await Sale.query().sum('sold_amount AS iSo')
        const totalEarn = await Sale.query().sum('total AS tEa')

        return { numberClients, 
                 itemsStock,
                 itemsSold, 
                 totalEarn } 
    }

    async loadChartClientProduct() {
        const data = await Sale.query()
                            .join('clients', 'sales.id_buy' , '=', 'clients.id_buy')
                            .sum('sales.sold_amount AS total')
                            .select('clients.name')
                            .groupBy('clients.name')
                            .orderBy('total', 'desc')

        return data
    }

    async loadChartClientTotal() {
        const data = await Sale.query()
                            .join('clients', 'sales.id_buy' , '=', 'clients.id_buy')
                            .sum('sales.total AS total')
                            .select('clients.name')
                            .groupBy('clients.name')
                            .orderBy('total', 'desc')
        return data
    }

    async loadChartABC() {
        const abcListener = new ABCCurveListener()
        const data = await abcListener.loadApi()
        return data
    }
}

module.exports = HomeController
