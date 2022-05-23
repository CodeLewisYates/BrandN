using BrandNudge.Core.Services;
using BrandNudge.Core.Models;
using BrandNudge.Data.Data;
using Microsoft.EntityFrameworkCore;

namespace BrandNudge.Data.Repository
{
    public class RetailersDataService : IRetailersDataService
    {
        private readonly DataContext _context;
        public RetailersDataService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Retailer>> GetRetailers()
        {
            var result = await _context.Retailers.Select(x => new Retailer
            {
                Id = x.Id,
                RetailerName = x.RetailerName
            }).ToListAsync();

            return result;
        }

        public async Task<Retailer> GetRetailerById(int retailerId)
        {
            return new Retailer();
        }

        public async Task<List<Category>> GetCategoriesByRetailer(int retailerId)
        {
            var result = await _context.Products.Where(x => x.Retailer.Id == retailerId).Select(x => new Category
            {
                CategoryName = x.Category.CategoryName,
                Id = x.Category.Id
            }).Distinct().ToListAsync();

            return result;
        }

        public async Task<List<CategoryPopularity>> GetCategoryPopularitiesByRetailer(int retailerId)
        {
            var result = await _context.Products.Where(x => x.Retailer.Id == retailerId).GroupBy(x => new { x.Category.CategoryName, x.Date }).Select(x => new CategoryPopularity
            {
                CategoryName = x.Key.CategoryName,
                Date = x.Key.Date,
                Value = x.Count(),
            }).ToListAsync();

            return result;
        }

        public async Task<List<Product>> GetProductDataByRetailer(int retailerId)
        {
            var result = await _context.Products.Where(x => x.Retailer.Id == retailerId).Select(x => new Product
            {
                Id = x.Id,
                ProductName = x.ProductName,
                Brand = x.Brand.BrandName,
                Manufacturer = x.Brand.Manufacturer.ManufacturerName,
                Date = x.Date,
                BasePrice = x.BasePrice,
                ShelfPrice = x.ShelfPrice,
                Category = x.Category.CategoryName,
                PromotionDescription = x.Promotion == null ? "" : x.Promotion.PromotionDescription,
                Retailer = x.Retailer.RetailerName,
            }).ToListAsync();
            return result;
        }

        public async Task<List<CategoryPromotion>> GetCategoryPromotionByRetailer(int retailerId, string date)
        {
            var result = await _context.Products.Where(x => x.Retailer.Id == retailerId && x.Promotion != null && x.Date == date)
                .GroupBy(x => x.Category.CategoryName).Select(x => new CategoryPromotion
            {
                Category = x.Key,
                NumberOfPromotions = x.Count(),
            }).ToListAsync();

            return result;
        }

    }
}
