using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetCategoriesByRetailerQuery(int RetailerId) : IRequest<List<Category>>;
}
