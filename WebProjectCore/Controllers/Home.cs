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

		public HomeController(IHttpContextAccessor httpContextAccessor)
		{
			_httpContextAccessor = httpContextAccessor;
		}

		public ViewResult Index()
		{
			return View();
		}

	}
}
