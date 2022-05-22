using BrandNudge.Data.Data;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace BrandNudge.Data.Repository
{
    public class SummaryDataService : ISummaryDataService
    {
        private readonly DataContext _dataContext;
        public SummaryDataService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<RetailerStockSummary>> GetSummaryShelfPrice()
        {
            var result = await _dataContext.Products.GroupBy(x => x.Retailer.RetailerName).Select(x => new RetailerStockSummary
            {
                Retailer = x.Key,
                Data = x.GroupBy(y => y.Date).Select(y => new DateValue
                {
                    Date = y.Key,
                    Value = y.Count()
                })
            }).ToListAsync();

            return result;
        }

        public async Task<List<RetailerPriceSummary>> GetAvgPriceSummary()
        {
            var result = await _dataContext.Products.GroupBy(x => x.Retailer.RetailerName).Select(x => new RetailerPriceSummary
            {
                Retailer = x.Key,
                Data = x.GroupBy(y => y.Date).Select(y => new DateValue
                {
                    Date = y.Key,
                    Value = y.Sum(z => z.ShelfPrice) / y.Count()
                })
            }).ToListAsync();

            return result;
        }

        public async Task<List<Product>> GetProducts()
        {
            var result = await _dataContext.Products.Select(x => new Product
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

        public async Task<List<RetailerProductCategory>> GetProductsByCategory(string date, int categoryId)
        {
            var result = await _dataContext.Products.Where(x => x.Date == date && x.Category.Id == categoryId).GroupBy(x => new { x.Category.CategoryName, x.Retailer.RetailerName }).Select(x => new RetailerProductCategory
            {
                Retailer = x.Key.RetailerName,
                ProductCount = x.Count(),
            }).ToListAsync();

            return result;
        }

        public async Task<List<Category>> GetAllCategories()
        {
            var result = await _dataContext.Categories.Select(x => new Category
            {
                CategoryName = x.CategoryName,
                Id = x.Id,
            }).ToListAsync();

            return result;
        }

        public async Task<List<string>> GetAllDates()
        {
            var result = await _dataContext.Products.Select(x => x.Date).Distinct().OrderByDescending(x => x).ToListAsync();
            return result;
        }
    }
}
