using Microsoft.EntityFrameworkCore;
using TransactionManagment.Models;

namespace TransactionManagment.Models
{
    public class TransactionContext : DbContext
    {
        public TransactionContext(DbContextOptions<TransactionContext> options) : base(options)
        {
        }
        public DbSet<NewTransaction> NewTransaction { get; set; }
        public DbSet<TransactionType> TransactionType { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<NewTransaction>()
                .HasOne(p => p.TransactionType)
                .WithMany()
                .HasForeignKey(p => p.IdTransactionType);
        }

    }
}
