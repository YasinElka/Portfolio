using MongoDB.Bson;

namespace Portfolio.Models
{
    public class Employee
    {
        public ObjectId Id { get; set; }
        public String Name { get; set; }

        public int Birthyear { get; set; }
    }
}
