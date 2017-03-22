using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactContext _context;
        //Palauttaa kaikki yhteystiedot
        //Tallentaa uuden yhteystiedon
        //Päivittää yhteystiedon
        //Poistaa yhteystiedon

        public ContactRepository(ContactContext context)
        {
            _context = context;
            //Add(new ContactItem(key:1,  firstName : "Keijo", lastName : "Testi", phone : 0404445556, address : "Saimaantie 3, Lappeenranta" ));
            Add(new ContactItem{FirstName = "Keijo", LastName = "Testi", Phone = "0404445556", Address = "Saimaantie 3, Lappeenranta"});
        }
        //Palauttaa kaikki yhteystiedot
        public IEnumerable<ContactItem> GetAll()
        {
            return _context.ContactItems.ToList();
        }
        //Tallentaa uuden yhteystiedon
        public void Add(ContactItem item)
        {
            _context.ContactItems.Add(item);
            _context.SaveChanges();
        }

        public ContactItem Find(long key)
        {
            return _context.ContactItems.FirstOrDefault(t => t.Key == key);
        }
        //Poistaa yhteystiedon
        public void Remove(long key)
        {
            var entity = _context.ContactItems.First(t => t.Key == key);
            _context.ContactItems.Remove(entity);
            _context.SaveChanges();
        }
        //Päivittää yhteystiedon
        public void Update(ContactItem item)
        {
            _context.ContactItems.Update(item);
            _context.SaveChanges();
        }
    }
}
