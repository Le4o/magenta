'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.string('code', 300)
      table.string('description', 800)
      table.integer('sold_amount')
      table.float('total')
      table
        .integer('id_buy')
        .references('id_buy')
        .inTable('clients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
