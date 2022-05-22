
namespace BrandNudge.Data.Models
{
    public class Retailer
    {
        public int Id { get; set; }
        public string RetailerName { get; set; } = string.Empty;
        public ICollection<Product>? Products { get; set; }
    }
}
