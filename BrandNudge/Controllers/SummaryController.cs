using Microsoft.AspNetCore.Mvc;
using MediatR;
using BrandNudge.Application.Queries;
using BrandNudge.API.Dtos;

namespace BrandNudge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SummaryController : ControllerBase
    {
        private readonly IMediator _mediator;
        public SummaryController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("Stock")]
        public async Task<IActionResult> GetSummaryShelfPrice()
        {
            var result = await _mediator.Send(new GetAllRetailerStockQuery());
            return Ok(result);
        }

        [HttpGet]
        [Route("Price")]
        public async Task<IActionResult> GetSummaryAvgPrice()
        {
            var result = await _mediator.Send(new GetAllRetailersAvgPriceQuery());
            return Ok(result);
        }

        [HttpGet]
        [Route("ProductsData")]
        public async Task<IActionResult> GetProductsData()
        {
            var result = await _mediator.Send(new GetProductsDataQuery());
            return Ok(result);
        }

        [HttpGet]
        [Route("ProductsData/{id}")]
        public async Task<IActionResult> GetProductsDataByRetailer([FromRoute] int id)
        {
            var result = await _mediator.Send(new GetProductsDataByRetailerQuery(id));
            return Ok(result);
        }

        [HttpPost]
        [Route("ProductsByCategory")]
        public async Task<IActionResult> GetProductsByCategory([FromBody] ProductsByCategoryDto dto)
        {
            var result = await _mediator.Send(new GetProductsByCategoryQuery(dto.Date, dto.CategoryId));
            return Ok(result);
        }

        [HttpGet]
        [Route("Categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var result = await _mediator.Send(new GetAllCategoriesQuery());
            return Ok(result);
        }

        [HttpGet]
        [Route("Dates")]
        public async Task<IActionResult> GetAllDates()
        {
            var result = await _mediator.Send(new GetAllDatesQuery());
            return Ok(result);
        }
    }
}
