
namespace BrandNudge.Core.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string BrandName { get; set; } = String.Empty;
        public List<Product>? Products { get; set; }
    }


}

