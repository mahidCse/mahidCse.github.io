using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularJsExampleApps.Models;

namespace AngularJsExampleApps.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        private ProjectDB db = new ProjectDB();

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Test()
        {
            return View();
        }

        public ActionResult GetAllStudent()
        {
            var students = db.Students.ToList();
            return Json(students, JsonRequestBehavior.AllowGet);
        }
    }
}