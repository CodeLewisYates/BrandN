
namespace BrandNudge.Core.Models
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string ManufacturerName { get; set; } = string.Empty;
        public List<Brand>? Brands { get; set; }
    }
}
