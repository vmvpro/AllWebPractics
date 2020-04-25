using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WebProjectCore.Middleware
{
	public class NoCacheMiddleware
	{
		private readonly RequestDelegate m_next;
		public NoCacheMiddleware(RequestDelegate next)
		{
			m_next = next;
		}
		public async Task Invoke(HttpContext httpContext)
		{
			httpContext.Response.OnStarting((state) =>
			{
				// ref: http://stackoverflow.com/questions/49547/making-sure-a-web-page-is-not-cached-across-all-browsers
				httpContext.Response.Headers.Append("Cache-Control", "no-cache, no-store, must-revalidate");
				httpContext.Response.Headers.Append("Pragma", "no-cache");
				httpContext.Response.Headers.Append("Expires", "0");
				httpContext.Response.Headers.Append("X-FRAME-OPTIONS", "vmv");

				return Task.FromResult(0);
			}, null);


			await m_next.Invoke(httpContext);
		}
	}
}
