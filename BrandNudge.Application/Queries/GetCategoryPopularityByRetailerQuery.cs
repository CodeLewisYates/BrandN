using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetCategoryPopularityByRetailerQuery(int RetailerId) : IRequest<List<CategoryPopularity>>;
}
