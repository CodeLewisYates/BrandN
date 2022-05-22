using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetProductsDataQuery : IRequest<List<Product>>;
}
