using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using BruceCarta.Models;

namespace BruceCarta.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Message = "Home";
            ViewData["ViewName"] = ViewBag.Message;            
            return View();
        }
        public IActionResult Contact()
        {
            ViewBag.Message = "Contact";
            ViewData["ViewName"] = ViewBag.Message;
            return View();
        }
        public IActionResult TOS()
        {
            ViewBag.Message = "TOS";
            ViewData["ViewName"] = ViewBag.Message;
            return View();
        }
        public IActionResult Privacy()
        {
            ViewBag.Message = "Privacy";
            ViewData["ViewName"] = ViewBag.Message;
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
