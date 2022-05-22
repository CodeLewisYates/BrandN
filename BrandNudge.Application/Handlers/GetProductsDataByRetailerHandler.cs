using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetProductsDataByRetailerHandler : IRequestHandler<GetProductsDataByRetailerQuery, List<Product>>
    {
        private readonly IRetailersDataService _retailersDataService;
        public GetProductsDataByRetailerHandler(IRetailersDataService retailersDataService)
        {
            _retailersDataService = retailersDataService;
        }

        public async Task<List<Product>> Handle(GetProductsDataByRetailerQuery request, CancellationToken cancellationToken)
        {
            var result = await _retailersDataService.GetProductDataByRetailer(request.RetailerId);
            return result;
        }
    }
}
