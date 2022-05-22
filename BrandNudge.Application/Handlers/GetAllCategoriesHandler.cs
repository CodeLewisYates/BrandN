using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetAllCategoriesHandler : IRequestHandler<GetAllCategoriesQuery, List<Category>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetAllCategoriesHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }
        public async Task<List<Category>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetAllCategories();
            return result;
        }
    }
}
