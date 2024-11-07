
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using LinkCutter.Identity.Configurations;
using System.Collections.Generic;
using System.Text;
using LinkCutter.Identity.Models;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics.CodeAnalysis;

namespace LinkCutter.Identity
{
    public class LinkCutterIdentityDbContext : IdentityDbContext
    {
        public LinkCutterIdentityDbContext([NotNullAttribute] DbContextOptions options)
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
