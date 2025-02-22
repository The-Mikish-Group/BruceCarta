using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using BruceCarta.Models;
using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BruceCarta.Controllers
{
    public class CombosController : Controller // Combos Controller
    {
        protected IActionResult CustomView(string viewName)
        {
            ViewData["ViewName"] = viewName;
            return View("Slideshows");
        }
        public IActionResult Index() => CustomView("Combos");
    }

    public class SlideshowsController : Controller  //Slideshows Controller
    {
        protected IActionResult CustomView(string viewName)
        {
            ViewData["ViewName"] = viewName;
            return View("Slideshows");
        }
        public IActionResult Index() => CustomView("Slideshows");
    }
    public class GalleriesController : Controller  // Galleries Controller
    {
        protected IActionResult CustomView(string viewName)
        {
            ViewData["ViewName"] = viewName;
            return View("Galleries");
        }
        public IActionResult Index() => CustomView("Galleries");
    }
    public class GalleryBaseController : Controller
    {
        public IActionResult Index() => GalleryView();
        public IActionResult Gallery(string viewName) => GalleryView(viewName);
        protected IActionResult GalleryView(string imagefolder = "Gallery")
        {
            ViewData["ViewName"] = imagefolder;
            return View();
        }
    }

    public class BruceCartaController : GalleryBaseController { }    
    public class BruceCartaSlideController : GalleryBaseController { }
    public class BruceCartaComboController : GalleryBaseController { }

    public class OfficeViewController : GalleryBaseController { }
    public class OfficeViewSlideController : GalleryBaseController { }
    public class OfficeViewComboController : GalleryBaseController { }

}
