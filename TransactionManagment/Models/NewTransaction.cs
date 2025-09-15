namespace TransactionManagment.Models;

public class NewTransaction
{
    public int ID { get; set; }
    public DateTime Fecha { get; set; }
    public int IdTransactionType { get; set; }
    public int IdProduct { get; set; }
    public int? Cantidad { get; set; }
    public decimal? PrecioUnitario { get; set; }
    public decimal? PrecioTotal { get; set; }
    public string Detalle { get; set; }
    public virtual TransactionType? TransactionType { get; set; } = null!;
}
