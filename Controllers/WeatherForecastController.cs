using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace thorapps.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Route("[controller]")]

    public class EmailController : ControllerBase {
        [HttpPost]
        public async Task<IActionResult> PostAsync(string firstName, string lastName, string email, string jobTitle, string phone, string company, string country, string message)
        {
            if(firstName != "test")
            {
                return Ok("Success");
            } else
            {
                return Ok("Failed");
            }
        }

        [HttpPost]
        public bool Post(object  data)
        {
            if(!IsNullOrEmpty(data.country) && data.country != "test") {
                return true;
            } else {
                return false;
            }
        }
    }


    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
