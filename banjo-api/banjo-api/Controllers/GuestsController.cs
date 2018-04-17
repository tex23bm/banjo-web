using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using banjo_api.Configurations;
using banjo_api.Models;
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
            var guestTask = await _guestsRepository.GetAll();
            var guestsList = guestTask.Select(Mapper.Map<GuestDto>).ToList();

            return Ok(guestsList);
        }
    }
}