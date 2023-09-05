import { connect, closeConnection } from '../database/connection.js'

export class Ventas {
  // Total de ventas del medicamento 'Paracetamol'
  static async getVentasParacetamol (req, res) {
    try {
      const db = await connect()
      const ventas = db.collection('ventas')
      const result = await ventas.aggregate([
        {
          $lookup: {
            from: 'medicamentos',
            localField: 'idMedicamento',
            foreignField: 'id',
            as: 'medicamentos'
          }
        }, {
          $unwind: '$medicamentos'
        },
        {
          $match: {
            'medicamentos.nombre': { $eq: 'Paracetamol' }
          }
        },
        {
          $group: {
            _id: '$medicamentos.id',
            'Total de ventas del medicamento Paracetamol': { $count: { } }
          }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer la cantidad de ventas del medicamento' })
    } finally {
      await closeConnection()
    }
  }

  static async getTotalDineroRecaudado (req, res) {
    try {
      const db = await connect()
      const ventas = db.collection('ventas')
      const result = await ventas.aggregate([
        {
          $group: {
            _id: null,
            DineroTotalRecaudadoenMedicamentos: {
              $sum: '$precioTotal'
            }
          }

        }, {
          $project: {
            _id: 0
          }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer el total dinero recaudado' })
    } finally {
      await closeConnection()
    }
  }
}
