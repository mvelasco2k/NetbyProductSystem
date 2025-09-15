using TransactionManagment.Models.Dto;

namespace TransactionManagment.Models.ViewModels;

public class TransactionsViewModel
{
    public int Id { get; set; }
    public DateTime Fecha { get; set; }
    public string Transaction { get; set; }
    public string Product { get; set; }
    public int? Cantidad { get; set; }
    public decimal? PrecioUnitario { get; set; }
    public decimal? PrecioTotal { get; set; }
    public string Detalle { get; set; }

}
