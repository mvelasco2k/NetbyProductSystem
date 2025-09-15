namespace TransactionManagment.Models.Dto;

public class ProductDto
{
    public int? Id { get; set; }
    public string? Nombre { get; set; }
    public string? Descripcion { get; set; }
    public int? IdCategory { get; set; }
    public string? Imagen { get; set; }
    public decimal? Precio { get; set; }
    public int? Stock { get; set; }
}
