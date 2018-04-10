using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using banjo_api.Configurations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace banjo_api.Controllers
{
    [Produces("application/json")]
    [Route("api/Guests")]
    public class GuestsController : Controller
    {
        public GuestsController(IConfiguration configuration, IOptions<CustomConfigurations> customOptions)
        {
            var something = configuration.GetConnectionString("something");
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetGuests()
        {
            var guests = new
            {
                name = "something",
                value = "value"
            };

            return Ok(guests);
        }
    }
}