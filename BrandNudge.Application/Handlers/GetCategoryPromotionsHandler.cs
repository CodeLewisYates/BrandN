using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    internal class GetCategoryPromotionsHandler : IRequestHandler<GetCategoryPromotionsQuery, List<CategoryPromotion>>
    {
        private readonly IRetailersDataService _retailersDataService;
        public GetCategoryPromotionsHandler(IRetailersDataService retailersDataService)
        {
            _retailersDataService = retailersDataService;
        }
        public async Task<List<CategoryPromotion>> Handle(GetCategoryPromotionsQuery request, CancellationToken cancellationToken)
        {
            var result = await _retailersDataService.GetCategoryPromotionByRetailer(request.RetailerId, request.Date);
            return result;
        }
    }
}
