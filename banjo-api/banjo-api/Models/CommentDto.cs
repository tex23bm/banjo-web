using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banjo_api.Models
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string AddedBy { get; set; }
        public string Source { get; set; }
        public string Comments { get; set; }
        public DateTime ModifiedDateTime { get; set; }
    }
}
