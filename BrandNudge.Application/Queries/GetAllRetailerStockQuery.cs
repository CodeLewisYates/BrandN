using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetAllRetailerStockQuery() : IRequest<List<RetailerStockSummary>>;
}
