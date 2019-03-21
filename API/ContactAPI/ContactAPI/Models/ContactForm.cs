using System;
namespace ContactAPI.Models
{
    public class ContactForm
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
