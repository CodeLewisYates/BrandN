using System.ComponentModel.DataAnnotations.Schema;

namespace BrandNudge.Core.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public decimal BasePrice { get; set; }
        public decimal ShelfPrice { get; set; }
        public decimal PromotedPrice { get; set; }
        public string Date { get; set; } = string.Empty;
        public string EAN { get; set; } = string.Empty;
        public string Brand { get; set; } = string.Empty;
        public string Manufacturer { get; set; } = string.Empty;
        public string? Category { get; set; }
        public string PromotionDescription { get; set; } = string.Empty;
        public string Retailer { get; set; } = string.Empty;
    }
}
