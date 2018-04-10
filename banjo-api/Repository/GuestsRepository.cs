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

        public async Task<IEnumerable<Guest>> GetAll()
        {
            return await Task.Run(()=> _banjoContext.Guests.ToList());
        }
    }
}
