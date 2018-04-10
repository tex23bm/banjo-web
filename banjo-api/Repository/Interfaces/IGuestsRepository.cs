using System;
using System.Collections.Generic;
using System.Text;
using Entity;

namespace Repository.Interfaces
{
    public interface IGuestsRepository
    {
        IEnumerable<Guest> GetAll();
    }
}
