'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const APIListener = use('App/Models/APIListener')

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
        return view.render('apriori', {})
    }
}

module.exports = AprioriController
