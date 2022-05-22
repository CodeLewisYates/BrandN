using Microsoft.AspNetCore.Mvc;
using MediatR;
using BrandNudge.Application.Queries;

namespace BrandNudge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetailersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public RetailersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetRetailers()
        {
            var result = await _mediator.Send(new GetRetailersQuery());
            return Ok(result);
        }
        
        [HttpGet]
        [Route("Categories/{retailerId}")]
        public async Task<IActionResult> GetCategoriesByRetailer([FromRoute] int retailerId)
        {
            var result = await _mediator.Send(new GetCategoriesByRetailerQuery(retailerId));
            return Ok(result);
        }

        [HttpGet]
        [Route("CategoryPopularity/{retailerId}")]
        public async Task<IActionResult> GetCategoryPopularityByRetailer([FromRoute] int retailerId)
        {
            var result = await _mediator.Send(new GetCategoryPopularityByRetailerQuery(retailerId));
            return Ok(result);
        }
    }
}
