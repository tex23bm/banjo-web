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
        public async Task<IActionResult> GetGuests(string lastname, string zipcode)
        {
            var guestTask = await _guestsRepository.GetAll(lastname, zipcode);
            var guestsList = guestTask.Select(Mapper.Map<GuestDto>).ToList();

            return Ok(guestsList);
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> UpdateGuest(int id, [FromBody] GuestDto guest)
        {
            try
            {
                if(id != guest.Id)
                {
                    return BadRequest("Id to update does not match entity Id");
                }

                Entity.Guest entity = await _guestsRepository.Get(id); 

                if(guest.ConfirmedGuests > entity.TotalGuestsAllowed)
                {
                    return BadRequest("Cannot have more guests than the maximum allowed for thie guest");
                }

                entity.Name = guest.Name;
                entity.ConfirmedGuests = guest.ConfirmedGuests;
                entity.Partner = guest.Partner;

                await _guestsRepository.Update(entity);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
            return Ok();
        }
    }
}