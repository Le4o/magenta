'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client')
const Inventory = use('App/Models/Inventory')
const Sale = use('App/Models/Sale')

const axios = use('axios')
const { subject, observer } = use('App/Helpers')
const APIListener = use('App/Models/APIListener')
const Notification = use('App/Models/Notification')

class HomeController {

    //Listener vai ser o subject
    //Notification vai ser o observer

    async home({ view }) {

        const notification = new Notification('off')
        const apiListener = new APIListener()
        
        apiListener.subscribe(notification)
        
        //Call function by first time
        await apiListener.loadApriori()

        apiListener.searchForBest()
        const notificationL = await notification.formatNotification()
 
        const chartValues = await this.loadCharts()

        return view.render('home', { chartValues: chartValues, notificationL: notificationL })
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
}

module.exports = HomeController
