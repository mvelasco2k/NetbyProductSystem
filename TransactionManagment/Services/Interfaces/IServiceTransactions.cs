using TransactionManagment.Models;
using TransactionManagment.Models.Dto;
using TransactionManagment.Models.ViewModels;

namespace TransactionManagment.Services.Interfaces
{
    public interface IServiceTransactions
    {
        Task<ProductDto> TransactionProducts(EditStockViewModel editStock);
        Task<List<TransactionsViewModel>> GetTransactionsByIdProduct(int idProduct);
        Task<List<TransactionsViewModel>> GetAllTransactions();
    }
}
