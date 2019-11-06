using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VueApi.Controllers
{
    public class CatchAllController : ControllerBase 
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}