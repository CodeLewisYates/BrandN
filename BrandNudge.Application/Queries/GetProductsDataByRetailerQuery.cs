using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetProductsDataByRetailerQuery(int RetailerId) : IRequest<List<Product>>;
}
