using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BabySitterKata.Controllers
{
    [Route("api/calculate")]
    public class CalculatorController : Controller
    {
        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]HourlyData data)
        {
        }
    }
}
