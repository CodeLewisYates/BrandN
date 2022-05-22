
namespace BrandNudge.Data.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string BrandName { get; set; } = string.Empty;
        public Manufacturer Manufacturer { get; set; }
        public List<Product> Products { get; set; }
    }
}
