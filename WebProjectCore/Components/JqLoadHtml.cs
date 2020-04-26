using Microsoft.AspNetCore.Mvc;

namespace WebProjectCore.Components
{
	public class JqLoadHtml : ViewComponent
	{
		public IViewComponentResult Invoke()
		{
			//return View("PartialPart1");
			return View();
		}


	}
}
