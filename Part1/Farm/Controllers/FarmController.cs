using Farm.Models;
using Microsoft.AspNetCore.Mvc;

namespace Farm.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FarmController : ControllerBase
    {
        private static readonly HashSet<string> Animals = new() { "Cat", "Dog", "Mouse" };

        [HttpGet]
        public IEnumerable<Animal> Get()
        {
            return Animals.Select(animal => new Animal { Name = animal }).ToArray();
        }

        [HttpPost]
        public ActionResult Post([FromBody]string name)
        {
            if(Animals.Contains(name)) 
                return BadRequest($"{name} already exists");

            Animals.Add(name);

            return Ok();
        }

        [HttpDelete("{name:alpha}")]
        public ActionResult Delete(string name)
        {
            if (!Animals.Contains(name))
                return BadRequest($"{name} doesn't exist");

            Animals.Remove(name);

            return Ok();
        }
    }
}