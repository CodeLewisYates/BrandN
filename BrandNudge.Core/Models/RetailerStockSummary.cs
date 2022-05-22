

namespace BrandNudge.Core.Models
{
    public class RetailerStockSummary
    {
        public string Retailer { get; set; } = string.Empty;

        public IEnumerable<DateValue> Data { get; set; }
    }

}
