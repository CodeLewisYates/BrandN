using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetCategoryPopularityByRetailerHandler : IRequestHandler<GetCategoryPopularityByRetailerQuery, List<CategoryPopularity>>
    {
        private readonly IRetailersDataService _retailersDataService;
        public GetCategoryPopularityByRetailerHandler(IRetailersDataService retailersDataService)
        {
            _retailersDataService = retailersDataService;
        }
        public async Task<List<CategoryPopularity>> Handle(GetCategoryPopularityByRetailerQuery request, CancellationToken cancellationToken)
        {
            var result = await _retailersDataService.GetCategoryPopularitiesByRetailer(request.RetailerId);
            return result;
        }
    }
}
