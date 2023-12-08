using Microsoft.AspNetCore.Mvc;
using Raszpberry_WEBAPI.Models;

namespace Raszpberry_WEBAPI.Controllers
{
    [ApiController]
    [Route("RBDB")]
    public class RBDBController : ControllerBase
    {
        private readonly RbdbPersonalContext _context;
        public RBDBController(RbdbPersonalContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<RbpEmp>> GetAllEmployees()
        {
            var employees = _context.RbpEmps.ToList();
            return Ok(employees);
        }
    }
}
