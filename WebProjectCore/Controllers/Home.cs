using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace WebProjectCore.Controllers
{
	public class HomeController : Controller
	{
		private readonly IHttpContextAccessor _httpContextAccessor;

		//public HomeController(IHttpContextAccessor httpContextAccessor)
		//{
		//	_httpContextAccessor = httpContextAccessor;
		//}

		public ViewResult Index()
		{
			ViewBag.Title = "Index";
			return View();
		}

		public ViewResult LoadJquery()
		{
			ViewBag.Title = "Jquery";
			return View();
		}

		public ViewResult PartialView()
		{

			//return ViewComponent("PriorityList", new { maxPriority = 3, isDone = false });
			ViewBag.Title = "PartialView";
			return View("PartialView");
			return View("PartialPart1");
		}

		
		public ViewResult GetAjax()
		{
			ViewBag.Title = "GetAjax";
			return View();
		}

		[HttpGet]
		public IActionResult GetAjaxResult(string result)
		{
			
			return View();
		}

		[HttpGet]
		public JsonResult OnGetList()
		{
			List<string> lstString = new List<string>
			{
				"Val 1",
				"Val 2",
				"Val 3"
			};
			return new JsonResult(lstString);
		}

		[HttpGet]
		public string OnGetAjax()
		{	
			return "Hello VMV from the server!!!";
		}







	}
}
