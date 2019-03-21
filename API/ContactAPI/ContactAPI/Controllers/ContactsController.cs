using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContactAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactContext _context;
        public ContactsController(ContactContext context)
        {
            _context = context;
        }
        public IActionResult Post([FromBody]ContactForm contactForm)
        {
            ContactForm contact = new ContactForm();
            {
                if (contactForm is null)
                {
                    return BadRequest();
                }
                else
                {
                    if (contactForm.Email != null)
                    {
                        contact.Email = contactForm.Email;
                    }
                    if (contactForm.Message != null)
                    {
                        contact.Message = contactForm.Message;
                    }
                    if (contactForm.Name != null)
                    {
                        contact.Name = contactForm.Name;
                    }
                    contact.TimeStamp = DateTime.Now;
                    _context.Contacts.Add(contact);
                    _context.SaveChanges();
                    return Ok(contact);
                }
            }
        }
    }
}
