using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetRetailerStockSummaryHandler : IRequestHandler<GetAllRetailerStockQuery, List<RetailerStockSummary>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetRetailerStockSummaryHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }
        public async Task<List<RetailerStockSummary>> Handle(GetAllRetailerStockQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetSummaryShelfPrice();
            return result;
        }
    }
}
