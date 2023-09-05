Documentacion EndPoints

1. Obtener todos los medicamentos con menos de 50 unidades en stock => http://localhost:1234/medicamentos/getMedicamentosless50unidades
2. Medicamentos comprados al 'Proveedor A' => http://localhost:1234/medicamentos/getMedicamentosProveedorEspecifico/?proveedor=LABORATORIO MYM
3.  Total de ventas del medicamento 'Paracetamol' => http://localhost:1234/ventas/getVentasParacetamol
4. Total Dinero recaudo en ventas de medicamentos => http://localhost:1234/ventas/getTotalDineroRecaudado
5. Obtener recetas médicas emitidas después del 1 de enero de 2023 => http://localhost:1234/recetas/getRecetasAfter1Enero
6. Recetas prescritas por el Dr. Martínez => http://localhost:1234/recetas/getRecetasPrescritarByDoctor?nombreDoctor=Martinez
7. Medicamentos que caducan antes del 1 de enero de 2024  => http://localhost:1234/medicamentos/getMedicamentosCaducanBefore1Enero
8. Medicamentos que no han sido vendidos => http://localhost:1234/medicamentos/getMedicamentosNoVendidos
9. Obtener el medicamento más caro => http://localhost:1234/medicamentos/getMedicamentosMasCaro
10. Número de medicamentos por proveedor => http://localhost:1234/proveedor/getMedicamentosByProveedor