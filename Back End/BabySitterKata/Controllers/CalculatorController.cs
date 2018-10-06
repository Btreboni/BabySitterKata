using BabySitterKata.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
