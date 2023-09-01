import { body } from 'express-validator'

export const ejemploValidator = [

  body('nombre')
    .notEmpty()
    .isString()
    .withMessage('mensaje personalizado'),

  body('edad')
    .notEmpty()
    .isNumeric()
    .withMessage('mensaje personalizado'),
  body('habilidades')
    .isArray()
    .notEmpty()
    .withMessage('msg')
    .custom(values => {
      return values.every(arlInfo => {
        const requiredFields = ['jugar', 'estudiar', 'correr']
        return requiredFields.every(field => field in arlInfo)
      })
    })
    .withMessage('debe contener los valores'),
  body('fecha')
    .notEmpty()
    .isISO8601()
    .withMessage('El formato de fecha debe ser ISO 8601'),
  // PARA ARRAYS= CONVERTIR EL ID RECIBIDO EN OBJECT ID
  // si es un array que todos los elementos cumplan con eso
  body('detalle.responsables.*').notEmpty().customSanitizer(value => new ObjectId(value)),
  body('detalle.fecha_inicio').optional().notEmpty().isISO8601().customSanitizer(value => new Date(value))

]
