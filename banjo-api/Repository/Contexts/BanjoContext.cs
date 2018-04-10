using System;
using System.Collections.Generic;
using System.Text;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Repository.Contexts
{
    public class BanjoContext : DbContext
    {
        public BanjoContext(DbContextOptions<BanjoContext> options) : base(options) { }

        public DbSet<Guest> Guests { get; set; }
    }
}
