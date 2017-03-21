using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Contact
    {
        public Contact(string firstName, string lastName, long phone, string address)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Address = address;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
    }
}
