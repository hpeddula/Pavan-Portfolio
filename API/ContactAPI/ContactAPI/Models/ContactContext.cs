using System;
using Microsoft.EntityFrameworkCore;
namespace ContactAPI.Models
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {
        }
        public DbSet<ContactForm> Contacts { get; set; }

    }
}
