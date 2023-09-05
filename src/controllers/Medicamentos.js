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

  static async getMedicamentosProveedorEspecifico (req, res) {
    try {
      const proveedor = req.query.proveedor
      const db = await connect()
      const medicamentos = db.collection('medicamentos')
      const result = await medicamentos.aggregate([
        {
          $lookup: {
            from: 'proveedores',
            localField: 'idProveedor',
            foreignField: 'id',
            as: 'proveedor'
          }
        },
        {
          $unwind: '$proveedor'
        },
        {
          $match: { 'proveedor.nombre': { $eq: proveedor } }
        }

      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer los medicamentos comprados a un proveedor en especifico' })
    } finally {
      await closeConnection()
    }
  }

  static async getMedicamentosCaducanBefore1Enero (req, res) {
    try {
      const db = await connect()
      const medicamentos = db.collection('medicamentos')
      const result = await medicamentos.aggregate([
        {
          $match: { fechaExpiracion: { $lt: new Date('2024-01-01') } }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer los medicamentos que caducan antes del 1 de enero del 2024' })
    } finally {
      await closeConnection()
    }
  }

  static async getMedicamentosNoVendidos (req, res) {
    try {
      const db = await connect()
      const medicamentos = db.collection('medicamentos')
      const result = await medicamentos.aggregate([
        {
          $match: { estado: { $eq: 0 } }
        }
      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer los medicamentos que no se han vendido' })
    } finally {
      await closeConnection()
    }
  }

  static async getMedicamentosMasCaro (req, res) {
    try {
      const db = await connect()
      const medicamentos = db.collection('medicamentos')
      const result = await medicamentos.aggregate([
        {
          $group: {
            _id: 'valor medicamento mas caro',
            valor: { $max: '$precioCaja' }
          }
        }

      ]).toArray()
      res.status(200).json({ status: 200, data: result })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 404, message: 'Error al traer el medicamento mas caro' })
    } finally {
      await closeConnection()
    }
  }
}
