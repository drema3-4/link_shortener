using Link.Domain;
using Link.Domain.Common;
using LinkCutter.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Link.Persistence
{
    public class LinkDbContext: AuditableDbContext
    {
        public LinkDbContext(DbContextOptions<LinkDbContext> options) : base(options) {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(LinkDbContext).Assembly);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach(var entry in ChangeTracker.Entries<BaseDomainEntity>())
            {
                if(entry.State == EntityState.Added)
                {
                    entry.Entity.CreatedDate = DateTime.UtcNow;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        public DbSet<Link.Domain.Link> Links { get; set; }
    }
}
