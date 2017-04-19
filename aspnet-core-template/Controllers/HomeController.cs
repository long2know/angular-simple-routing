using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnet_core_template.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult MainComponent()
        {
            return View();
        }

        public IActionResult AboutComponent()
        {
            return View();
        }

        public IActionResult HomeComponent()
        {
            return View();
        }

        public IActionResult ContactComponent()
        {
            return View();
        }
    }
}
