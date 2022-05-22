using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetProductsByCategoryQuery(string Date, int CategoryId) : IRequest<List<RetailerProductCategory>>;
}
