using System.ComponentModel.DataAnnotations.Schema;

namespace BrandNudge.Data.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        [Column(TypeName = "decimal(18, 6)")]
        public decimal BasePrice { get; set; }
        [Column(TypeName = "decimal(18, 6)")]
        public decimal ShelfPrice { get; set; }
        [Column(TypeName = "decimal(18, 6)")]
        public decimal PromotedPrice { get; set; }
        public string Date { get; set; } = string.Empty;
        public string EAN { get; set; } = string.Empty;
        public Retailer Retailer { get; set; }
        public Promotion? Promotion { get; set; }
        public Brand Brand { get; set; }
        public Category Category { get; set; }
    }
}
