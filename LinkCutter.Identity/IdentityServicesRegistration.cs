
using LinkCutter.Identity.Models;
using LinkCutter.Identity.Services;
using LinkCutter.Application.Contracts.Identity;
using LinkCutter.Application.Models.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Link.Application.Contracts.Persistence;
using LinkCutter.Application.Contracts.Persistence;

namespace LinkCutter.Identity
{
    public static class IdentityServicesRegistration
    {
        public static IServiceCollection ConfigureIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));

            services.AddDbContext<LinkCutterIdentityDbContext>(options => {
                options.UseSqlServer(configuration.GetConnectionString("LinkIdentityConnectionString"));
                }
                );
            services.AddIdentity<ApplicationUser, IdentityRole>()
                   .AddEntityFrameworkStores<LinkCutterIdentityDbContext>()
                   .AddDefaultTokenProviders();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuer = false,
                       ValidateAudience = false,
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = new SymmetricSecurityKey(
                           Encoding.UTF8.GetBytes(configuration["JwtSettings:Key"])),
                       ClockSkew = TimeSpan.Zero
                   };
               });
            services.AddAuthorization(options =>
            {
                options.AddPolicy("IsAdmin", policy => policy.RequireClaim("role", "admin"));
            });

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IUserService, UserService>();

            return services;
        }
    }
}
