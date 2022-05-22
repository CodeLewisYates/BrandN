using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetCategoriesByRetailerHandler : IRequestHandler<GetCategoriesByRetailerQuery, List<Category>>
    {
        private readonly IRetailersDataService _retailersDataService;
        public GetCategoriesByRetailerHandler(IRetailersDataService retailersDataService)
        {
            _retailersDataService = retailersDataService;
        }

        public async Task<List<Category>> Handle(GetCategoriesByRetailerQuery request, CancellationToken cancellationToken)
        {
            var result = await _retailersDataService.GetCategoriesByRetailer(request.RetailerId);
            return result;
        }
    }
}
