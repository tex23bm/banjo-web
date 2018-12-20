using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Entity;

namespace Repository.Interfaces
{
    public interface IGuestsRepository
    {
        Task<IEnumerable<Guest>>GetAll(string lastName, string zipCode);
        Task<Guest> Get(int id);
        Task Update(Guest guest);
        Task Add(IEnumerable<Guest> guests);
    }
}
