using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public IEnumerable<Guest> GetAll()
        {
            return _banjoContext.Guests.ToList();
        }
    }
}
