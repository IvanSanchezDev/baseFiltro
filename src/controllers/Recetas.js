import { connect, closeConnection } from '../database/connection.js'

export class Recetas {
  // Obtener recetas médicas emitidas después del 1 de enero de 2023
  static async getRecetasAfter1Enero (req, res) {
    try {
      const db = await connect()
      const recetas = db.collection('recetas')
      const result = await recetas.aggregate([
        {
          $match: { fechaEmision: { $gt: new Date('2023-01-01') } }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer las recetas emiitidas despues del 1 enero del 2023' })
    } finally {
      await closeConnection()
    }
  }

  static async getRecetasPrescritarByDoctor (req, res) {
    try {
      const nombreDoctor = req.query.nombreDoctor
      const db = await connect()
      const recetas = db.collection('recetas')
      const result = await recetas.aggregate([
        {
          $match: { prescritasBy: { $eq: nombreDoctor } }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer las recetas emiitidas despues del 1 enero del 2023' })
    } finally {
      await closeConnection()
    }
  }
}
