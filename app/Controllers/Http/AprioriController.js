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

        const data = await aprioriListener.loadApi()
        aprioriListener.searchForBest()

        const notificationL = await notification.formatNotification()

        const asyncForEach = async(array, callback) => {
            for (let index = 0; index < array.length; index++) {
              await callback(array[index], index, array);
            }
        }

        await asyncForEach(data, async(el, index) => {
            const array = el[1]
            if (array.length > 1) {
                el[1] = await InventoryService.getDescriptionById(el[1])   
            }
        })
        
        return view.render('apriori', {data: data, notificationL: notificationL})
    }
}

module.exports = AprioriController
