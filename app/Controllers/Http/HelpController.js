'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AprioriListener = use('App/Models/AprioriListener')
const Notification = use('App/Models/Notification')

class HelpController {

    async index({ view }) {
        const notification = new Notification('off')
        const aprioriListener = new AprioriListener()
        
        aprioriListener.subscribe(notification)
        
        await aprioriListener.loadApriori()
        aprioriListener.searchForBest()

        const notificationL = await notification.formatNotification()

        return view.render('help', { notificationL: notificationL })
    }

}

module.exports = HelpController
