using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace aspnet_core_template
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(@"Properties/hosting.json", optional: false, reloadOnChange: true)
                .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(config)
                //.UseKestrel()
                .UseKestrel(options => options.UseHttps(new X509Certificate2("testCert.pfx", "testPassword")))
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .UseIISIntegration()
                //.UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
