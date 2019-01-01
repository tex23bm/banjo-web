using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Repository.Contexts;
using Repository.Interfaces;

namespace Repository
{
    public class GuestsRepository : IGuestsRepository
    {
        private readonly BanjoContext _banjoContext;

        public GuestsRepository(BanjoContext banjoContext)
        {
            _banjoContext = banjoContext;
        }

        public async Task<IEnumerable<Guest>> GetAll(string lastName, string zipCode)
        {
            return await Task.Run(()=> {
                return _banjoContext.Guests
                    .Where(guest=>
                        (string.IsNullOrEmpty(lastName) || guest.LastName.ToLower().Contains(lastName.ToLower()))
                        && (string.IsNullOrEmpty(zipCode) || guest.Zipcode.Equals(zipCode,StringComparison.CurrentCultureIgnoreCase))
                    )
                    .ToList();
                });
        }

        public async Task Add(IEnumerable<Guest> guests)
        {
            await _banjoContext.Guests.AddRangeAsync(guests);
            await _banjoContext.SaveChangesAsync();
        }

        public Task<Guest> Get(int id)
        {
            return Task.Run(()=> _banjoContext.Guests.First(g=>g.Id == id));
        }

        public async Task Update(Guest guest)
        {
            guest.ModifiedDateTime = DateTime.UtcNow;

            Guest entity = _banjoContext.Guests.Find(guest.Id);
            _banjoContext.Entry(entity).CurrentValues.SetValues(guest);
            await _banjoContext.SaveChangesAsync();
        }
    }
}
