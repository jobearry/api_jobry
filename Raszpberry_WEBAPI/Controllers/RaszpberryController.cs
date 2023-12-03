using Microsoft.AspNetCore.Mvc;
using Raszpberry_WEBAPI.Models;

namespace Raszpberry_WEBAPI.Controllers
{
    [ApiController]
    [Route("Raszpberry")]
    public class RaszpberryController : ControllerBase
    {
        private readonly RASZContext _context;
        public RaszpberryController(RASZContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Rzemp01>> GetAllEmployees()
        {
            var employees = _context.Rzemp01s.ToList();
            return Ok(employees);
        }
    }
}
