use('facturacionCampus_IvanSanchez')
db.createCollection('proveedores', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'nit', 'nombre'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        nit: {
          bsonType: 'number',
          description: 'el nit es requerido y de tipo number'
        },
        nombre: {
          bsonType: 'string',
          description: 'el nombre es requerido y de tipo string'
        }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('medicamentos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'nombre', 'precioCaja', 'stock', 'fechaExpiracion', 'estado', 'idProveedor'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        nombre: {
          bsonType: 'string',
          description: 'el nombre es requerido y de tipo string'
        },
        precioCaja: {
          bsonType: 'number',
          description: 'el precio de la caja  es requerido y es de tipo number'
        },
        stock: {
          bsonType: 'number',
          description: 'la cantidad de stock es requerida y de tipo number'
        },
        fechaExpiracion: {
          bsonType: 'date',
          description: 'La fecha de expiracion es requerido y de tipo date'
        },
        estado: {
          bsonType: 'int',
          enum: [0, 1],
          description: 'el estado del medicamento es requerido y de tipo int (0:no vendido, 1:vendido)'
        },
        idProveedor: {
          bsonType: 'int',
          description: 'el proveedor del medicamento es requerido y de tipo int'
        }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('paciente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'cedula', 'nombre'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        cedula: {
          bsonType: 'number',
          description: 'la cedula es requerido y de tipo number'
        },
        nombre: {
          bsonType: 'string',
          description: 'el nombre es requerido y de tipo string'
        },
        telefono: {
          bsonType: 'number',
          description: 'el telefono debe ser de tipo number'
        }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('empleado', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'cedula', 'nombre'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        cedula: {
          bsonType: 'number',
          description: 'la cedula es requerido y de tipo number'
        },
        nombre: {
          bsonType: 'string',
          description: 'el nombre es requerido y de tipo string'
        },
        telefono: {
          bsonType: 'number',
          description: 'el telefono debe ser de tipo number'
        }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('ventas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'cantidad', 'precioTotal', 'fechaVenta', 'idMedicamento', 'idPaciente', 'idEmpleado'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        cantidad: {
          bsonType: 'number',
          description: 'la cantidad es requerido y de tipo number'
        },
        precioTotal: {
          bsonType: 'number',
          description: 'el precio total  es requerido y de tipo number'
        },
        fechaVenta: {
          bsonType: 'date',
          description: 'la fecha es requerida y de tipo number'
        },
        idMedicamento: { bsonType: 'int', description: 'es requerido' },
        idPaciente: { bsonType: 'int', description: 'es requerido' },
        idEmpleado: { bsonType: 'int', description: 'es requerido' }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('recetas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'medicamentos', 'fechaEmision', 'prescritasBy'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id es requerido y de tipo int (siga la secuencia)'
        },
        medicamentos: {
          bsonType: 'array',
          items: {
            bsonType: 'int'
          }
        },
        fechaEmision: { bsonType: 'date', description: 'es requerido' },
        prescritasBy: { bsonType: 'string', description: 'es de tipo string' }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.createCollection('usuarios', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['username', 'password', 'rol'],
      properties: {
        username: {
          bsonType: 'string',
          description: 'el username es obligatorio'
        },
        password: {
          bsonType: 'string',
          description: 'la passowrd es obligatoria'
        },
        rol: {
          bsonType: 'int',
          description: 'el rol debe ser de tipo int (0:admin, 1:paciente)'
        },
        permisos: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        }
      }
    }
  }
})

use('facturacionCampus_IvanSanchez')
db.proveedores.insertMany([
  {
    id: 1,
    nit: 31561156,
    nombre: 'LABORATORIO MYM'
  },
  {
    id: 2,
    nit: 9875652215,
    nombre: 'LABORATORIO XX'
  }
])

use('facturacionCampus_IvanSanchez')
db.medicamentos.insertMany([
  {
    id: 1,
    nombre: 'Acetaminofen',
    precioCaja: 2000,
    stock: 50,
    fechaExpiracion: new Date('2024-05-05'),
    estado: 1,
    idProveedor: 1
  },
  {
    id: 2,
    nombre: 'Paracetamol',
    precioCaja: 3000,
    stock: 20,
    fechaExpiracion: new Date('2024-05-05'),
    estado: 1,
    idProveedor: 2
  },
  {
    id: 3,
    nombre: 'Ibuprofeno',
    precioCaja: 1000,
    stock: 30,
    fechaExpiracion: new Date('2023-03-07'),
    estado: 0,
    idProveedor: 1
  },
  {
    id: 4,
    nombre: 'Dolex',
    precioCaja: 1500,
    stock: 60,
    fechaExpiracion: new Date('2023-08-15'),
    estado: 1,
    idProveedor: 2
  }
])

use('facturacionCampus_IvanSanchez')
db.paciente.insertMany([
  {
    id: 1,
    cedula: 12345,
    nombre: 'Ivan Sanchez',
    telefono: 32215151514
  },
  {
    id: 2,
    cedula: 54321,
    nombre: 'Luz Marina'
  }
])

use('facturacionCampus_IvanSanchez')
db.empleado.insertMany([
  {
    id: 1,
    cedula: 98765,
    nombre: 'Ivan Sanchez'
  },
  {
    id: 2,
    cedula: 54987,
    nombre: 'Luz Marina',
    telefono: 3125431
  }
])

use('facturacionCampus_IvanSanchez')
db.ventas.insertMany([
  {
    id: 1,
    cantidad: 5,
    precioTotal: 10000,
    fechaVenta: new Date(),
    idMedicamento: 1,
    idPaciente: 1,
    idEmpleado: 1
  },
  {
    id: 2,
    cantidad: 4,
    precioTotal: 10000,
    fechaVenta: new Date(),
    idMedicamento: 2,
    idPaciente: 2,
    idEmpleado: 2
  }
])

use('facturacionCampus_IvanSanchez')
db.recetas.insertMany([
  {
    id: 1,
    medicamentos: [1, 2],
    fechaEmision: new Date(),
    prescritasBy: 'Martinez'
  },
  {
    id: 2,
    medicamentos: [1],
    fechaEmision: new Date(),
    prescritasBy: 'Fabio Castillo'
  }, {
    id: 3,
    medicamentos: [1, 2],
    fechaEmision: new Date('2022-04-01'),
    prescritasBy: 'Luiz Carlos'
  },
  {
    id: 4,
    medicamentos: [2],
    fechaEmision: new Date('2021-05-01'),
    prescritasBy: 'Marcos Palacis'
  }
])
