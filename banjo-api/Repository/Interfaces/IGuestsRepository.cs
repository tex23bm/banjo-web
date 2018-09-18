using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Entity;

namespace Repository.Interfaces
{
    public interface IGuestsRepository
    {
        Task<IEnumerable<Guest>>GetAll();
    }
}
