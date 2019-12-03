'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Inventory = use('App/Models/Inventory')
const Notification = use('App/Models/Notification')
const AprioriListener = use('App/Models/AprioriListener')

/**
 * Resourceful controller for interacting with inventories
 */
class InventoryController {
  /**
   * Show a list of all inventories.
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
      
      await aprioriListener.loadApi()
      aprioriListener.searchForBest()

      const notificationL = await notification.formatNotification()

    const products = await Inventory.all()
    return view.render('inventory', { products: products.toJSON(), notificationL: notificationL })
  }

  /**
   * Filter the array of prdocuts
   * POST filter
   * 
   * @param {object} ctx
   * @param {Request} ctx.request 
   * @param {View} ctx.view
   */
    async filter ({ request, view }) {
      const { search } = request.only(['search'])
      const products = await Inventory
        .query()
        .whereRaw(`(description LIKE '${search}%')`)
        .fetch()

      return view.render('inventory', { products: products.toJSON(), searchWord: search })
    }

  /**
   * Render a form to be used for creating a new inventory.
   * GET inventories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new inventory.
   * POST inventories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single inventory.
   * GET inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing inventory.
   * GET inventories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update inventory details.
   * PUT or PATCH inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a inventory with id.
   * DELETE inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = InventoryController
