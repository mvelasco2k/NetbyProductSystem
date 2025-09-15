using Microsoft.EntityFrameworkCore;
using ProductManagment.Models;
using ProductManagment.Common;
using ProductManagment.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;

namespace ProductManagment.Services.Implementations
{
    public class ServiceProducts : IServiceProducts
    {
        private readonly ProductsContext _context;
        public ServiceProducts(ProductsContext context)
        {
            _context = context;
        }

        public Task<Product> EditProductStock(int idProduct, int quantity, string operation)
        {
            try
            {
                var product = _context.Product.Find(idProduct);
                
                ValidateEditStock(product, quantity, operation);

                product.Stock = operation == Constants.COMPRA ? product.Stock + quantity : operation == Constants.VENTA ? product.Stock - quantity : product.Stock;
                _context.Product.Update(product);
                _context.SaveChanges();
                return Task.FromResult(product);
                
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Task<Product> CreateProduct(Product producto)
        {
            try
            {
                var existProduct = _context.Product.Any(x => x.Nombre == producto.Nombre);
                if (existProduct)
                {
                    return null;
                }
                _context.Product.Add(producto);
                _context.SaveChanges();
                return Task.FromResult(producto);
            }
            catch (Exception ex)
            {
                throw new Exception("Error al guardar el producto", ex);
            }
        }

        public Task<bool> DeleteProductById(int id)
        {
            try
            {
                var product = _context.Product.Find(id);
                if (product != null)
                {
                    _context.Product.Remove(product);
                    _context.SaveChanges();
                    return Task.FromResult(true);
                }
                else
                {
                    return Task.FromResult(false);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error al eliminar el producto", ex);
            }
        }

        public Task<Product> EditProduct(Product product)
        {
            try
            {
                var existProduct = _context.Product.Any(x => x.Id == product.Id);
                if (!existProduct)
                {
                    return null;
                }
                _context.Product.Update(product);
                _context.SaveChanges();
                return Task.FromResult(product);
            }
            catch(Exception ex)
            {
                throw new Exception("Error al editar el producto", ex);
            }
        }

        public Task<List<Product>> GetAllProducts()
        {
            try
            {
                var products = _context.Product
                .Include(p => p.Category)
                .ToList();
                return Task.FromResult(products);
            }
            catch (Exception ex)
            {
                throw new Exception("Error al obtener los productos", ex);
            }
        }

        public Task<Product> GetProductById(int id)
        {
            try
            {
                var product = _context.Product
                .Include(p => p.Category)
                .FirstOrDefault(p => p.Id == id);

                return Task.FromResult(product);
            }
            catch (Exception ex)
            {
                throw new Exception("Error al obtener el producto", ex);
            }
        }

        private void ValidateEditStock(Product? product, int quantity, string operation)
        {
            if (product?.Stock == 0 && operation == Constants.VENTA) throw new Exception($"El producto {product?.Nombre} no cuenta con stock.");
            if (product == null) throw new Exception("El producto no está registrado en la base.");
            if (quantity <= 0) throw new Exception("Ingrese una cantidad mayor a cero.");
            if (operation != Constants.COMPRA && operation != Constants.VENTA) throw new Exception("La operación es inválida.");
            if (product?.Stock < quantity && operation == Constants.VENTA) throw new Exception("Stock insuficiente para realizar la venta");
        }
    }
}
