using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJsExampleApps.Models
{
    public class ProjectDB:DbContext
    {
        public ProjectDB() : base("AngularJsExample")
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}