using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetAllRetailersAvgPriceQuery : IRequest<List<RetailerPriceSummary>>;
}
