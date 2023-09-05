
INSTALACION

1. Clona el repositorio o descarga el .zip
2. accede al proyecto
3. instala las dependencias necesarias npm i
4. configura la cadena de conexion en el archivo src/database/connection.js y el archivo  .env  (solo si es necesario)
5. Ejecutar la base de datos en src/database/schemasFarmacia.mongodb.js
6. corre el proyecto npm run dev
7. registarte e inicia sesion y genera el token de acceso 


GENERACION TOKEN DE ACCESO

1. crea un usuario => POST http://localhost:1234/auth/register

//el rol 0 es admin y el rol 1 es paciente

datos entrada: {
  "username": "Andres",
  "password": "prueba",
  "rol": 0,
  "permisos": ["1.0.0", "2.0.0"]
}

2. Inicia sesion para generar el token de acceso a los recursos => POST http://localhost:1234/auth/login
datos entrada: {
  "username": "Andres",
  "password": "prueba"
}

3. Copiar el token generado y pegar en el Header con el nombre Authorization y la palabra reservada bearer

Ejemplo:

|  Headers      |      value          |
|-------------------------------------|
| Authorization | bearer your_api_key |

Documentacion EndPoints

Todos son metodos GET

1. Obtener todos los medicamentos con menos de 50 unidades en stock => http://localhost:1234/medicamentos/getMedicamentosless50unidades
2. Medicamentos comprados al 'Proveedor A' => http://localhost:1234/medicamentos/getMedicamentosProveedorEspecifico/?proveedor=LABORATORIOMYM
3.  Total de ventas del medicamento 'Paracetamol' => http://localhost:1234/ventas/getVentasParacetamol
4. Total Dinero recaudo en ventas de medicamentos => http://localhost:1234/ventas/getTotalDineroRecaudado
5. Obtener recetas médicas emitidas después del 1 de enero de 2023 => http://localhost:1234/recetas/getRecetasAfter1Enero
6. Recetas prescritas por el Dr. Martínez => http://localhost:1234/recetas/getRecetasPrescritarByDoctor?nombreDoctor=Martinez
7. Medicamentos que caducan antes del 1 de enero de 2024  => http://localhost:1234/medicamentos/getMedicamentosCaducanBefore1Enero
8. Medicamentos que no han sido vendidos => http://localhost:1234/medicamentos/getMedicamentosNoVendidos (estado 0 significa no vendido)
9. Obtener el medicamento más caro => http://localhost:1234/medicamentos/getMedicamentosMasCaro
10. Número de medicamentos por proveedor => http://localhost:1234/proveedor/getMedicamentosByProveedor
11. Obtener el total de medicamentos vendidos en marzo de 2023 => http://localhost:1234/ventas/getVentasMarzo
12. Promedio de medicamentos comprados por venta =>  http://localhost:1234/ventas/getPromedioMedicamento