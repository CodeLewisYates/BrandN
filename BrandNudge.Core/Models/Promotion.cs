using System.ComponentModel.DataAnnotations.Schema;

namespace BrandNudge.Core.Models
{
    public class Promotion
    {
        public int Id { get; set; }
        public string PromotionDescription { get; set; } = string.Empty;
    }
}
