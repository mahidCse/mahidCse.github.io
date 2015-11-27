using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJsExampleApps.Startup))]
namespace AngularJsExampleApps
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
