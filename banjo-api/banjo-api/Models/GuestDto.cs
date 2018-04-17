using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banjo_api.Models
{
    public class GuestDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Partner { get; set; }

        public int TotalGuestsAllowed { get; set; }

        public int? ConfirmedGuests { get; set; }

        public DateTime ModifiedDateTime { get; set; }
    }
}
