
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Raszpberry_WEBAPI.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;

namespace Raszpberry_WEBAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureServices((context, services) =>
                    {
                        // Configure services here...
                        var connString = context.Configuration.GetSection("AppSettings:DBConnectionString").Value; 
                        services.AddDbContext<RASZContext>(options =>
                            options.UseSqlServer(connString));

                        services.AddControllers();
                        services.AddEndpointsApiExplorer();
                        services.AddSwaggerGen(c =>
                        {
                            c.SwaggerDoc("v1", new OpenApiInfo
                            {
                                Title = "Raszpberry_WEBAPI",
                                Version = "v1"
                            });
                        });
                    });

                    webBuilder.Configure(app =>
                    {
                        // Configure the application here...
                        app.UseSwagger();
                        // Example: app.UseRouting();
                        app.UseSwaggerUI(c =>
                        {
                            c.SwaggerEndpoint("/swagger/v1/swagger.json", "Raspberry_WEBAPI V1");
                        });
                        app.UseHttpsRedirection();
                        app.UseRouting();
                        app.UseAuthorization();

                        app.UseEndpoints(endpoints =>
                        {
                            endpoints.MapControllers();
                            
                        });
                    });
                });
    }
}
