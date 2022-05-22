using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetProductsDataHandler : IRequestHandler<GetProductsDataQuery, List<Product>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetProductsDataHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }
        public async Task<List<Product>> Handle(GetProductsDataQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetProducts();
            return result;
        }
    }
}
