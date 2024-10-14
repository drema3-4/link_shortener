using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using LinkCutter.Identity;

namespace LinkCutter.API
{
    public class DesignTimeLinkCutterIdentityDbContext : IDesignTimeDbContextFactory<LinkCutterIdentityDbContext>
    {

        public LinkCutterIdentityDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LinkCutterIdentityDbContext>();
            // pass your design time connection string here
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=LinkCutter_identity_db;Trusted_Connection=True;MultipleActiveResultSets=true");
            return new LinkCutterIdentityDbContext(optionsBuilder.Options);
        }
    }
}
