import { connect, closeConnection } from '../database/connection.js'

export class Proveedor {
  // Obtener recetas médicas emitidas después del 1 de enero de 2023
  static async getMedicamentosByProveedor (req, res) {
    try {
      const db = await connect()
      const proveedor = db.collection('proveedores')
      const result = await proveedor.aggregate([
        {
          $lookup: {
            from: 'medicamentos',
            localField: 'id',
            foreignField: 'idProveedor',
            as: 'medicamentos'
          }
        },
        {
          $unwind: '$medicamentos'
        },
        {
          $group: {
            _id: '$nombre',
            medicamentos: { $sum: 1 }
          }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer la cantidad de medicamentos por proveedor' })
    } finally {
      await closeConnection()
    }
  }
}
