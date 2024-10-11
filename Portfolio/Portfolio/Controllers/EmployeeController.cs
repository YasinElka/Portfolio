using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            MongoClient dbClient = new MongoClient();

            var database = dbClient.GetDatabase("portfolio");
            var collection = database.GetCollection<Employee>("employee");

            List<Employee> employee = collection.Find(e => true).ToList();

            return View(employee);
        }


        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Employee employee)
        {
            MongoClient dbClient = new MongoClient();

            var database = dbClient.GetDatabase("portfolio");
            var collection = database.GetCollection<Employee>("employee");
            collection.InsertOne(employee);

            return Redirect("/Employee");
        }





    }
}