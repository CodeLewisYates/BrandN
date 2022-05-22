using MediatR;
using BrandNudge.Core.Models;

namespace BrandNudge.Application.Queries
{
    public record GetAllCategoriesQuery : IRequest<List<Category>>;
}
