'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AprioriListener = use('App/Models/AprioriListener')
const Notification = use('App/Models/Notification')
const InventoryService = use('App/Services/InventoryService')

class AprioriController {

    /**
     * Show a list of all apriori results.
     * GET inventories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ view }) {

        const notification = new Notification('off')
        const aprioriListener = new AprioriListener()

        aprioriListener.subscribe(notification)

        const data = await aprioriListener.loadApriori()
        aprioriListener.searchForBest()

        const notificationL = await notification.formatNotification()

        let dataf = []
        data.map((el, index) => {
            const array = el[1]
            if (array.length > 1) {
                InventoryService.getDescriptionById(array)
                    .then(res => {
                        //console.log(res)
                        return res
                    })
            }
        })
        

        console.log(dataf)
        return view.render('apriori', {data: data, notificationL: notificationL})
    }
}

module.exports = AprioriController
