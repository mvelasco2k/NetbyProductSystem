// export class Producto {
//   constructor(
//     public id: number,
//     public nombre: string,
//     public descripcion: string,
//     public imagen: string,
//     public precio: number,
//     public stock: number
//   ) {}
// }

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  idCategory: number;
  imagen: string;
  precio: number;
  stock: number;
  category: Categoria;
}