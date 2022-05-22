using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Models;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetRetailersHandler : IRequestHandler<GetRetailersQuery, List<Retailer>>
    {
        private readonly IRetailersDataService _service;
        public GetRetailersHandler(IRetailersDataService retailersDataService)
        {
            _service = retailersDataService;
        }

        public async Task<List<Retailer>> Handle(GetRetailersQuery request, CancellationToken cancellationToken)
        {
            var result = await _service.GetRetailers();
            
            return result;
        }
    }
}
