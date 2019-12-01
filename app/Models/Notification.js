'use strict'

const { observer } = use('App/Helpers')
const Inventory = use('App/Models/Inventory')

class Notification extends observer {

    constructor (state) {
        super(state)
    }

    async formatNotification () {

        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
              await callback(array[index], index, array);
            }
        }

        const findProduct = async () => {
            const products = []
            await asyncForEach(this.state[1], async(el) => {
                const p = await Inventory.findOrFail(el)
                products.push(p.description)
            })
            return products
        }

        if (this.state !== 'off') return findProduct()
        else return 'Notificação não criada'
        
    }

}

module.exports = Notification