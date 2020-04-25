﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using WebProjectCore.Middleware;

namespace WebProjectCore
{
	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{

			
			services.AddMvc();
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{


			app.UseDeveloperExceptionPage();
			app.UseStatusCodePages();
			//----------------------------------
			app.UseMiddleware<NoCacheMiddleware>();
			//----------------------------------
			app.UseStaticFiles();
			app.UseBrowserLink();
			app.UseMvcWithDefaultRoute();
		}
	}
}
