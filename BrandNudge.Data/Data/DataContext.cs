using Microsoft.EntityFrameworkCore;
using BrandNudge.Data.Models;

namespace BrandNudge.Data.Data
{
    public class DataContext : DbContext
    {
       public DataContext(DbContextOptions options) : base(options) { }

       public DbSet<Retailer> Retailers { get; set; }
       public DbSet<Manufacturer> Manufacturers { get; set; }
       public DbSet<Brand> Brands { get; set; }
       public DbSet<Product> Products { get; set; }
       public DbSet<Promotion> Promotions { get; set; }
       public DbSet<Category> Categories { get; set; }
    }
}
