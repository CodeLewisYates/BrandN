using MediatR;

namespace BrandNudge.Application.Queries
{
    public record GetAllDatesQuery : IRequest<List<string>>;
}
