using BrandNudge.Core.Models;

namespace BrandNudge.Core.Services
{
    public interface IRetailersDataService
    {
        public Task<List<Retailer>> GetRetailers();
        public Task<List<Category>> GetCategoriesByRetailer(int retailerId);
        public Task<Retailer> GetRetailerById(int retailerId);
        public Task<List<CategoryPopularity>> GetCategoryPopularitiesByRetailer(int retailerId);
        public Task<List<Product>> GetProductDataByRetailer(int retailerId);
        public Task<List<CategoryPromotion>> GetCategoryPromotionByRetailer(int retailerId, string date);
    }
}
