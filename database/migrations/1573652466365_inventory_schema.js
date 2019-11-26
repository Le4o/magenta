'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventorySchema extends Schema {
  up () {
    this.create('inventories', (table) => {
      table.increments()
      table.string('description', 400)
      table.string('unity', 40)
      table.integer('amount')
      table.float('price')
      table.float('total')
      table.timestamps()
    })
  }

  down () {
    this.drop('inventories')
  }
}

module.exports = InventorySchema
