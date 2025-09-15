Nombre: Mateo Velasco

SISTEMA DE GESTIÓN DE PRODUCTOS
Proyecto realizado en .NET Core 8 utilizando arquitectura MVC en Visual Studio 2022

**REQUISITOS**
  - Instalacion de SQL Server
  - Postman para prueba de APIs (ocpional, ya que está configurado con Swagger)
  - Instalación de .NET Core 8

**EJECUCIÓN DEL BACKEND**
  1. Clonar el repositorio
  2. Verificar que la solución consta de dos microervicios (ProductManagment, TransactionManagment)
  3. Cambiar la cadena de conexion en los archivos appsettings.json para la base de datos
  4. Se adicionan capturas de los endpoints utilizados en la seccion de Evidencias

**EVIDENCIAS**
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



*Aclaración: Debido a temas de horario laboral esta semana no pude concluir la parte del front, desde ya mil disculpas.
