'use strict'

const Inventory = use('App/Models/Inventory')

class InventoryService {

    static async getDescriptionById(array){
        const asyncForEach = async(array, callback) => {
            for (let index = 0; index < array.length; index++) {
              await callback(array[index], index, array);
            }
        }

        const products = []
        await asyncForEach(array, async(el) => {
            const p = await Inventory.findOrFail(el)
            products.push(p.description)
        })
        return products
    }

}

module.exports = InventoryService