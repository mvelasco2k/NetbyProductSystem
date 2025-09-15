using Azure;
using TransactionManagment.Commons;
using TransactionManagment.Models;
using TransactionManagment.Models.Dto;
using TransactionManagment.Models.ViewModels;
using TransactionManagment.Services.Interfaces;

namespace TransactionManagment.Services.Implementations;

public class ServiceTransactions : IServiceTransactions
{
    public string ProductsUrl = Constants.ProductsUrl;
    private readonly TransactionContext _context;

    public ServiceTransactions(TransactionContext context)
    {
        _context = context;
    }

    public Task<List<TransactionsViewModel>> GetAllTransactions()
    {
        try
        {
            var transactionsList = new List<TransactionsViewModel>();
            var allTransactions = _context.NewTransaction.ToList();
            using var httpClient = GetHttpClient();
            var response = httpClient.GetAsync("GetAllProducts").GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                throw new Exception(errorMessage);
            }
            var productList = response.Content.ReadFromJsonAsync<List<SimpleProductDto>>().GetAwaiter().GetResult();

            foreach (var transaction in allTransactions)
            {
                var transactionViewModel = new TransactionsViewModel
                {
                    Id = transaction.ID,
                    Fecha = transaction.Fecha,
                    Transaction = transaction.IdTransactionType == Constants.COMPRA_ID ? Constants.COMPRA : transaction.IdTransactionType == Constants.VENTA_ID ? Constants.VENTA : "",
                    Product = productList?.ToArray().FirstOrDefault(p => p.Id == transaction.IdProduct)?.Nombre ?? "Producto no encontrado",
                    Cantidad = transaction.Cantidad,
                    PrecioUnitario = transaction.PrecioUnitario,
                    PrecioTotal = transaction.PrecioTotal,
                    Detalle = transaction.Detalle
                };
                var product = productList?.FirstOrDefault(p => p.Id == transaction.IdProduct);
                transactionsList.Add(transactionViewModel);
            }
            return Task.FromResult(transactionsList);
        }
        catch(Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public Task<List<TransactionsViewModel>> GetTransactionsByIdProduct(int idProduct)
    {
        try
        {
            var transactionsList = new List<TransactionsViewModel>();
            var productTransactions = _context.NewTransaction.Where(t => t.IdProduct == idProduct).ToList();

            using var httpClient = GetHttpClient();
            var response = httpClient.GetAsync($"GetProductById/{idProduct}").GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                throw new Exception(errorMessage);
            }
            var product = response.Content.ReadFromJsonAsync<SimpleProductDto>().GetAwaiter().GetResult();

            foreach (var transaction in productTransactions)
            {
                var transactionViewModel = new TransactionsViewModel
                {
                    Id = transaction.ID,
                    Fecha = transaction.Fecha,
                    Transaction = transaction.IdTransactionType == Constants.COMPRA_ID ? Constants.COMPRA : transaction.IdTransactionType == Constants.VENTA_ID ? Constants.VENTA : "",
                    Product = product != null ? product.Nombre : "Producto no encontrado",
                    Cantidad = transaction.Cantidad,
                    PrecioUnitario = transaction.PrecioUnitario,
                    PrecioTotal = transaction.PrecioTotal,
                    Detalle = transaction.Detalle
                };
                transactionsList.Add(transactionViewModel);
            }
            return Task.FromResult(transactionsList);
        }
        catch(Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public Task<ProductDto> TransactionProducts(EditStockViewModel editStock)
    {
        try
        {
            using var httpClient = GetHttpClient();
            var response = httpClient.PutAsync($"EditProductStock/{editStock.IdProduct}/{editStock.Quantity}/{editStock.Operation}", null).GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                throw new Exception(errorMessage);
            }

            var editedProductStock = response.Content.ReadFromJsonAsync<ProductDto>().GetAwaiter().GetResult();
            var precioUnitario = editedProductStock?.Precio;

            var transaction = new NewTransaction
            {
                Fecha = DateTime.Now,
                IdTransactionType = editStock.Operation == Constants.COMPRA ? Constants.COMPRA_ID : editStock.Operation == Constants.VENTA ? Constants.VENTA_ID : 0,
                IdProduct = editStock.IdProduct,
                Cantidad = editStock.Quantity,
                PrecioUnitario = precioUnitario,
                PrecioTotal = precioUnitario * editStock.Quantity,
                Detalle = editStock.Detail
            };

            // Guardar la transacción en la base de datos 
            _context.NewTransaction.Add(transaction);
            _context.SaveChanges();
            return Task.FromResult(editedProductStock);
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message, ex);
        }
    }

    private HttpClient GetHttpClient()
    {
        var httpClient = new HttpClient();
        httpClient.BaseAddress = new Uri(ProductsUrl);
        return httpClient;
    }
}
