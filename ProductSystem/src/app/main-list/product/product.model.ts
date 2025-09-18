export class Categoria {
  constructor(
    public id: number,
    public nombre: string
  ) {}
}

export class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public idCategory: number,
    public imagen: string,
    public precio: number,
    public stock: number,
    public category: Categoria
  ) {}
}     

export class NewProducto {
  constructor(
    public nombre: string,
    public descripcion: string,
    public idCategory: number,
    public imagen: string,
    public precio: number,
    public stock: number
  ) {}
}    

export class EditProducto {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public idCategory: number,
    public imagen: string,
    public precio: number,
    public stock: number
  ) {}
}    