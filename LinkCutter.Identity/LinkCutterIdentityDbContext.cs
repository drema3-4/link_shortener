
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using LinkCutter.Identity.Configurations;
using System.Collections.Generic;
using System.Text;
using LinkCutter.Identity.Models;

namespace LinkCutter.Identity
{
    public class LinkCutterIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public LinkCutterIdentityDbContext(DbContextOptions<LinkCutterIdentityDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
        }
    }
}
