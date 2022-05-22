using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetProductsByCategoryHandler : IRequestHandler<GetProductsByCategoryQuery, List<RetailerProductCategory>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetProductsByCategoryHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }

        public async Task<List<RetailerProductCategory>> Handle(GetProductsByCategoryQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetProductsByCategory(request.Date, request.CategoryId);
            return result;
        }
    }
}
