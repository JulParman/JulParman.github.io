using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/contact")]
    public class ContactController : Controller
    {
        private readonly IContactRepository _contactRepository;

        public ContactController(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        [HttpGet]
        public IEnumerable<ContactItem> GetAll()
        {
            return _contactRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetContact")]
        public IActionResult GetById(long id)
        {
            var item = _contactRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ContactItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _contactRepository.Add(item);

            return CreatedAtRoute("GetContact", new { id = item.Key }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] ContactItem item)
        {
            if (item == null || item.Key != id)
            {
                return BadRequest();
            }

            var contact = _contactRepository.Find(id);
            if (contact == null)
            {
                return NotFound();
            }

            if (item.FirstName != contact.FirstName)
            {
                contact.FirstName = item.FirstName;
            }
            if (item.LastName != contact.LastName)
            {
                contact.LastName = item.LastName;
            }
            if (item.Phone != contact.Phone)
            {
                contact.Phone = item.Phone;
            }
            if (item.Address != contact.Address)
            {
                contact.Address = item.Address;
            }
            if (item.City != contact.City)
            {
                contact.City = item.City;
            }
            _contactRepository.Update(contact);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var contact = _contactRepository.Find(id);
            if (contact == null)
            {
                return NotFound();
            }

            _contactRepository.Remove(id);
            return new NoContentResult();
        }
    }
}
