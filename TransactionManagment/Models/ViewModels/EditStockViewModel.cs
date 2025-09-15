namespace TransactionManagment.Models.ViewModels;

public class EditStockViewModel
{
    public int IdProduct { get; set; }
    public int Quantity { get; set; }
    public string Operation { get; set; }
    public string Detail { get; set; }
}
