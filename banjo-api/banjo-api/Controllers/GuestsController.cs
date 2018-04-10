using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using banjo_api.Configurations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Repository.Interfaces;

namespace banjo_api.Controllers
{
    [Produces("application/json")]
    [Route("api/Guests")]
    public class GuestsController : Controller
    {
        private readonly IGuestsRepository _guestsRepository;

        public GuestsController(IGuestsRepository guestsRepository)
        {
            _guestsRepository = guestsRepository;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetGuests()
        {
            var guestsList = _guestsRepository.GetAll().ToList();

            return Ok(guestsList);
        }
    }
}