using BabySitterKata.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BabySitterKata.Controllers
{
    [Produces("application/json")]
    [Route("api/calculate")]
    public class CalculatorController : Controller
    {
        private readonly ICalculatorService _calculatorService;

        public CalculatorController(ICalculatorService calculatorService)
        {
            _calculatorService = calculatorService;
        }

        //// GET api/calculate
        //[HttpGet]
        //[ProducesResponseType(typeof(string), statusCode: 200)]
        //public IActionResult GetLaunchDivisions()
        //{
        //    var test = "TESTING";

        //    return Ok(test);
        //}

        // POST api/calculate/wages
        [HttpPost("wages")]
        [ProducesResponseType(typeof(string), statusCode: 201)]
        public IActionResult Post([FromBody]Models.HourlyDataDto data)
        {
            var test = _calculatorService.CalculateNightlyWage(data);
            return Ok(test);
        }
    }
}
