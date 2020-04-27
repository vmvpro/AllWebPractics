using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebProjectCore.Models;

namespace WebProjectCore.Controllers
{
	public class HomeController : Controller
	{
		//private readonly IHttpContextAccessor _httpContextAccessor;

		//public HomeController(IHttpContextAccessor httpContextAccessor)
		//{
		//	_httpContextAccessor = httpContextAccessor;
		//}

		private IHostingEnvironment _env;
		public HomeController(IHostingEnvironment env)
		{
			_env = env;
		}

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

		public ViewResult GetServerInfo()
		{

			//return ViewComponent("PriorityList", new { maxPriority = 3, isDone = false });
			ViewBag.Title = "GetServerInfo";
			return View();
			return View("PartialPart1");
		}


		public ViewResult GetAjax()
		{
			ViewBag.Title = "GetAjax";
			return View();
		}

		
		public ViewResult PostAjax()
		{
			ViewBag.Title = "PostAjax";
			return View();
		}

		[HttpPost]
		public JsonResult PostAjaxForm()
		{
			string success = "Успешно!!!";

			return new JsonResult(success);

			string sPostValue1 = "";
			string sPostValue2 = "";
			string sPostValue3 = "";
			{
				MemoryStream stream = new MemoryStream();
				Request.Body.CopyTo(stream);
				stream.Position = 0;
				using (StreamReader reader = new StreamReader(stream))
				{
					string requestBody = reader.ReadToEnd();
					if (requestBody.Length > 0)
					{
						var user = JsonConvert.DeserializeObject<User>(requestBody);
						if (user != null)
						{
							sPostValue1 = user.Name;
							sPostValue2 = user.Password;
							sPostValue3 = user.Email;
						}
					}
				}
			}

			//List<string> lstString = new List<string>
			//{
			//	sPostValue1,
			//	sPostValue2,
			//	sPostValue3
			//};

			//return new JsonResult(lstString);
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

		//[HttpGet]
		//public HtmlContentViewComponentResult GetHtml()
		//{
		//	return new HtmlContentViewComponentResult(
		//		new HtmlString("<p>VMV HTML</p>"));
		//}

		//[HttpGet]
		//public string GetHtml()
		//{
		//	return "<p>VMV HTML</p>";
		//}

		//[HttpGet("{id}")]


		[HttpGet]
		public ActionResult<string> GetHtml(string id)
		{

			// Использование среды разработки
			char separator = Path.DirectorySeparatorChar;
			string webRoot = _env.WebRootPath;

			string filePath = Path.Combine(webRoot, "html", "getHtml_0" + id + ".html");
			string fileContent = System.IO.File.ReadAllText(filePath);

			return fileContent;

			// Тест
			//return "<p>VMV HTML Produces</p>";

		}

		[HttpGet]
		public JsonResult GetJson(string id)
		{
			//return "<p>VMV HTML Produces</p>";
			char separator = Path.DirectorySeparatorChar;
			string webRoot = _env.WebRootPath;

			string filePath = Path.Combine(webRoot, "data", "data.json");
			string fileContent = System.IO.File.ReadAllText(filePath);

			return new JsonResult(fileContent);
			
		}

		//[HttpGet]
		//public JsonResult OnGetList()
		//{
		//	List<string> lstString = new List<string>
		//	{
		//		"Val 1",
		//		"Val 2",
		//		"Val 3"
		//	};
		//	return new JsonResult(lstString);
		//}





	}
}
