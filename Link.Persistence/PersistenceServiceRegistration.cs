using Link.Application.Contracts.Persistence;
using Link.Persistence;
using LinkCutter.Application.Contracts.Persistence;
using LinkCutter.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<LinkDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("LinkConnectionString")));
    
            services.AddScoped<IGeneralRepository<Link.Domain.Link>, GeneralRepository<Link.Domain.Link>>();
            services.AddScoped<ILinkRepository, LinkRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
