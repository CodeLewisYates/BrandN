using MediatR;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;
using BrandNudge.Application.Queries;

namespace BrandNudge.Application.Handlers
{
    public class GetRetailersAvgPriceHandler : IRequestHandler<GetAllRetailersAvgPriceQuery, List<RetailerPriceSummary>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetRetailersAvgPriceHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }

        public async Task<List<RetailerPriceSummary>> Handle(GetAllRetailersAvgPriceQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetAvgPriceSummary();
            return result;
        }
    }
}
