using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using WebProjectCore.Middleware;
using WebProjectCore.Models;

namespace WebProjectCore
{
	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{

			services.AddAntiforgery(o => o.HeaderName = "VMV-XSRF-TOKEN");
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddSingleton<IRepository, UserRepository>();

			services.AddMvc();
			
			

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

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "defaults",
					template: "{controller}/{action}/{id?}",
					defaults: new { controller = "Home", action = "Index"}
				);
			});

			//app.UseMvcWithDefaultRoute();
		}
	}
}
