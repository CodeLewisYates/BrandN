
namespace BrandNudge.Data.Models
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string ManufacturerName { get; set; } = string.Empty;
        public ICollection<Brand>? Brands { get; set; }
    }
}
