Nombre: Mateo Velasco

**SISTEMA DE GESTIÓN DE PRODUCTOS**
Proyecto realizado en:
Backend: .NET Core 8 utilizando arquitectura MVC en Visual Studio Code
Frontend: Angular 20.1.1 (lógica de componentes)


**REQUISITOS**
  - Instalacion de SQL Server
  - Postman para prueba de APIs (ocpional, ya que está configurado con Swagger)
  - Instalación de .NET Core 8
  - Instalación de Angular 20

**EJECUCIÓN DEL BACKEND**
  1. Clonar el repositorio
  2. Verificar que la solución consta de dos microervicios (ProductManagment, TransactionManagment)
  3. Cambiar la cadena de conexion en los archivos appsettings.json para la base de datos
  4. Se adicionan capturas de los endpoints utilizados en la seccion de Evidencias
  5. Existe un archivo launch.json para ejecutar todas las tareas del back y front, sin embargo, se recomienda ejecutar individualmente

**EVIDENCIAS BACK**
  - GetAllProducts (Obtener el listado de todos los productos)
    <img width="836" height="678" alt="image" src="https://github.com/user-attachments/assets/f75a12e7-5a77-484f-9fba-4669644037e4" />
  - CreateProduct (Creación de un nuevo producto)
    <img width="845" height="636" alt="image" src="https://github.com/user-attachments/assets/d37f8722-229f-4270-9d6a-53dd8fbdab84" />
  - EditProduct (Editar un producto ya existente)
    <img width="856" height="639" alt="image" src="https://github.com/user-attachments/assets/895db0e9-eb66-4027-8e25-c0bf0cf7128c" />
  - DeleteProductById (Borrar producto por Id)
    <img width="835" height="478" alt="image" src="https://github.com/user-attachments/assets/6d5efd62-bcec-414e-bbef-ffed322e3b68" />
  - GetProductById (Obtener producto por Id)
    <img width="866" height="644" alt="image" src="https://github.com/user-attachments/assets/9d083e9d-76b1-4ec3-a10d-7a8510f6793b" />
  - TransactionProducts (Endpoint para realizar compras o ventas)
    El campo Operation puede tener el valor: COMPRA o VENTA
    <img width="839" height="620" alt="image" src="https://github.com/user-attachments/assets/88757795-5e3b-4a29-bb70-ade8f87fe313" />
  - GetTransactionsByIdProduct (Obtener listado de transacciones por producto)
    <img width="859" height="657" alt="image" src="https://github.com/user-attachments/assets/39ef82cd-4e38-4786-b644-9b55f1a488eb" />
  - GetAllTransactions (Obtener listado de todas las transacciones realizadas)
    <img width="856" height="641" alt="image" src="https://github.com/user-attachments/assets/95ba8fbb-2340-4cad-b7bb-1bc568d84c66" />

**EJECUCIÓN DEL FRONTEND**
  1. Ejecutar individualmente el proyecto mediante el comando ng serve
  2. Verificar que está ubicado en la carpeta ProductSystem
  3. Se adicionan las evidencias de las pantallas
  4. Cuenta con validaciones de stock, datos mal ingresados y errores inesperados

**EVIDENCIAS FRONT**
  - Pantalla principal del listado de productos (paginado por cada 5 elementos)
    <img width="1890" height="594" alt="image" src="https://github.com/user-attachments/assets/985158f0-5ce1-4302-af54-33a81c8ac319" />
  - Pantalla para crear un nuevo producto
    <img width="1851" height="601" alt="image" src="https://github.com/user-attachments/assets/8d60c944-0388-4559-a8aa-38f614742d12" />
  - Pantalla para editar un producto existente
    <img width="1895" height="621" alt="image" src="https://github.com/user-attachments/assets/491e2fec-67f4-43c9-b5f6-e73472822979" />
  - Pantalla para realizacion de transacciones (Compras o Ventas)
    <img width="1858" height="648" alt="image" src="https://github.com/user-attachments/assets/4a6b71e3-7e70-41b3-a20b-ea348b4908db" />



