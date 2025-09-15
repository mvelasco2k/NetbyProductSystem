namespace ProductManagment.Models;
using Microsoft.EntityFrameworkCore;

public class ProductsContext : DbContext
{
    public ProductsContext(DbContextOptions<ProductsContext> options) : base(options)
    {
    }
    public DbSet<Product> Product { get; set; }
    public DbSet<Category> Category { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasIndex(c => c.Nombre).IsUnique();
        modelBuilder.Entity<Product>()
        .HasOne(p => p.Category)
        .WithMany()
        .HasForeignKey(p => p.IdCategory);
    }
}
