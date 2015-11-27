using System.Collections.Generic;
using AngularJsExampleApps.Models;

namespace AngularJsExampleApps.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularJsExampleApps.Models.ProjectDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularJsExampleApps.Models.ProjectDB context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var students = new List<Student>
            {
                new Student {Name = "Mahid", Status = "true"},
                new Student {Name = "Nil", Status = "true"},
                new Student {Name = "Sabuj", Status = "true"},
                new Student {Name = "Hafiz", Status = "false"}
            };
            students.ForEach(s=>context.Students.AddOrUpdate(s));
            context.SaveChanges();
        }
    }
}
