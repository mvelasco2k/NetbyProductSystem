using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagment.Models;
using ProductManagment.Services.Interfaces;

namespace ProductManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IServiceProducts _serviceProducts;
        public ProductController(IServiceProducts serviceProducts)
        {
            _serviceProducts = serviceProducts;
        }
        // POST: ProductController/Create
        [HttpGet]
        [Route("GetAllProducts")]
        public IActionResult GetAllProducts()
        {
            var productsList = _serviceProducts.GetAllProducts();
            return Ok(productsList.Result);
        }

        [HttpGet]
        [Route("GetProductById/{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = _serviceProducts.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product.Result);
        }

        [HttpPost]
        [Route("CreateProduct")]
        public IActionResult CreateProduct([FromBody]Product product)
        {
            var newProduct = _serviceProducts.CreateProduct(product);
            if (newProduct == null)
            {
                return BadRequest("El producto ya existe");
            }
            return Ok(newProduct.Result);
        }

        [HttpPut]
        [Route("EditProduct")]
        public IActionResult EditProduct([FromBody] Product product)
        {
            var editedProduct = _serviceProducts.EditProduct(product);
            if (editedProduct == null)
            {
                return BadRequest("El producto no existe");
            }
            return Ok(editedProduct.Result);
        }

        [HttpPut]
        [Route("EditProductStock/{idProduct}/{quantity}/{operation}")]
        public IActionResult EditProductStock(int idProduct, int quantity, string operation)
        {
            try
            {
                var editedProductStock = _serviceProducts.EditProductStock(idProduct, quantity, operation);
                return Ok(editedProductStock.Result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("DeleteProductById/{id}")]
        public IActionResult DeleteProductById(int id)
        {
            var result = _serviceProducts.DeleteProductById(id);
            if (!result.Result)
            {
                return NotFound();
            }
            return Ok();
        }
    }
}
