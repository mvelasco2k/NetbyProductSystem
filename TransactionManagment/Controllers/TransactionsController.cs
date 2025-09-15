using Azure;
using Microsoft.AspNetCore.Mvc;
using TransactionManagment.Models.ViewModels;
using TransactionManagment.Services.Implementations;
using TransactionManagment.Services.Interfaces;

namespace TransactionManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private IServiceTransactions _serviceTransactions;
        public TransactionsController(IServiceTransactions serviceTransactions)
        {
            _serviceTransactions = serviceTransactions;
        }

        [HttpPut]
        [Route("TransactionProducts")]
        public IActionResult TransactionProducts([FromBody]EditStockViewModel editStock)
        {
            try
            {
                var editStockResult = _serviceTransactions.TransactionProducts(editStock).GetAwaiter().GetResult();
                return Ok(editStockResult);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetTransactionsByIdProduct/{idProduct}")]
        public IActionResult GetTransactionsByIdProduct(int idProduct)
        {
            try
            {
                var transactionsList = _serviceTransactions.GetTransactionsByIdProduct(idProduct).GetAwaiter().GetResult();
                return Ok(transactionsList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetAllTransactions")]
        public IActionResult GetAllTransactions()
        {
            try
            {
                var transactionsList = _serviceTransactions.GetAllTransactions().GetAwaiter().GetResult();
                return Ok(transactionsList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
