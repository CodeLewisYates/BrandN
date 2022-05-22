
namespace BrandNudge.Core.Models
{
    public class RetailerPriceSummary
    {
        public string Retailer { get; set; }
        public IEnumerable<DateValue> Data { get; set; }
    }
}
