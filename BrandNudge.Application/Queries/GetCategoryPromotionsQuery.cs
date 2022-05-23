using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetCategoryPromotionsQuery(int RetailerId, string Date) : IRequest<List<CategoryPromotion>>;
}
