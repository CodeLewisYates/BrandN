
using BrandNudge.Core.Models;

namespace BrandNudge.Core.Services
{
    public interface ISummaryDataService
    {
        public Task<List<RetailerStockSummary>> GetSummaryShelfPrice();
        public Task<List<RetailerPriceSummary>> GetAvgPriceSummary();
        public Task<List<Product>> GetProducts();
        public Task<List<RetailerProductCategory>> GetProductsByCategory(string date, int categoryId);
        public Task<List<Category>> GetAllCategories();
        public Task<List<string>> GetAllDates();
    }
}
