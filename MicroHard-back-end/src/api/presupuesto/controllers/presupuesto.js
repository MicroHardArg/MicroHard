'use strict';

/**
 * presupuesto controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::presupuesto.presupuesto',{
    async create(ctx) {
        const {cliente, descripcion, total}= ctx.request.body.data;

        // Gets previous entries from the client
        try {
            var entries=await strapi.db.query('api::presupuesto.presupuesto').findMany({
                where: {cliente: cliente},
                orderBy: { id: 'ASC' },
            });
    
        // Calculates total debt from previous entries
            // var totales=0;
    
            // entries.map(entry => {
            //     if (entry.tipo==="Presupuesto" || entry.tipo==="Recurrente") {
            //         total=total+entry.monto;
            //     }
            //     if (entry.tipo==="Abono") {
            //         total=total-entry.monto;
            //     }
            // });

        // Calculates final debt based on recent amount
            // if (tipo==="Presupuesto" || tipo==="Recurrente") {
            //     total=total+monto;
            // }
            // else if (tipo==="Abono") {
            //     total=total-monto;
            // };
    
        // Assigns debt to property "deuda"
            // ctx.request.body.data.deuda=total;
    
        // Creates new entry for the client
            return strapi.db.query('api::presupuesto.presupuesto').create({
                data: {
                    cliente: cliente,
                    descripcion: descripcion,
                    total: total,
                }
            });

        }
        catch(error) {
            console.log(error);
        };
    }
});;



