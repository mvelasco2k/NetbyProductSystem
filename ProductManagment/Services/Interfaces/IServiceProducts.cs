using ProductManagment.Models;

namespace ProductManagment.Services.Interfaces
{
    public interface IServiceProducts
    {
        Task<Product> GetProductById(int id);
        Task<List<Product>> GetAllProducts();
        Task<Product> CreateProduct(Product producto);
        Task<Product> EditProduct(Product product);
        Task<Product> EditProductStock(int idProduct, int quantity, string operation);
        Task<bool> DeleteProductById(int id);
    }
}
