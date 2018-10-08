using BabySitterKata.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace BabySitterKata.Controllers
{
    [Route("api/calculate")]
    public class CalculatorController : Controller
    {
        private readonly CalculatorServiceImpl _calculatorService;

        public CalculatorController(CalculatorServiceImpl calculatorService)
        {
            _calculatorService = calculatorService;
        }

        // POST api/calculate
        [HttpPost]
        [ProducesResponseType(typeof(string), statusCode: 201)]
        public IActionResult Post([FromBody]Models.HourlyDataDto data)
        {

            return Ok();
        }
    }
}
