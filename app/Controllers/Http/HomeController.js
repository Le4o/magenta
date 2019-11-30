'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client')
const Inventory = use('App/Models/Inventory')
const Sale = use('App/Models/Sale')

const axios = use('axios')
const { subject, observer } = use('App/Helpers')
const Env = use('Env')
const url = Env.get('API_URL')

class HomeController {

    //Listener vai ser o observer
    //Notification vai ser o subject

    async home({ view }) {
        const aprioriData = await this.loadApriori()
        const chartValues = await this.loadCharts()

        console.log(chartValues)

        const _subject = new subject()
        const _observer = new observer(0.046875)

        return view.render('home', { chartValues: chartValues })
    }

    //Calls Apriori Api made in Python flask
    async loadApriori() {
        return axios.get(url)
            .then(response => {
                return response.data.data
            })
            .catch(err => {
                return 'Api closed'
            })
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
