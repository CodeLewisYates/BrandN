using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.Core.Services;

namespace BrandNudge.Application.Handlers
{
    public class GetAllDatesHandler : IRequestHandler<GetAllDatesQuery, List<string>>
    {
        private readonly ISummaryDataService _summaryDataService;
        public GetAllDatesHandler(ISummaryDataService summaryDataService)
        {
            _summaryDataService = summaryDataService;
        }
        public async Task<List<string>> Handle(GetAllDatesQuery request, CancellationToken cancellationToken)
        {
            var result = await _summaryDataService.GetAllDates();
            return result;
        }
    }
}
