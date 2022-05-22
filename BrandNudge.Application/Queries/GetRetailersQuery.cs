using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetRetailersQuery() : IRequest<List<Retailer>>;
}
