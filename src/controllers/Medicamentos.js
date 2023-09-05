import { connect, closeConnection } from '../database/connection.js'

export class Medicamentos {
  // Obtener todos los medicamentos con menos de 50 unidades en stock
  static async getMedicamentosless50unidades (req, res) {
    try {
      const db = await connect()
      const medicamentos = db.collection('medicamentos')
      const result = await medicamentos.find({ stock: { $lt: 49 } }).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer los medicamentos con menos de 50 unidades' })
    } finally {
      await closeConnection()
    }
  }
}
