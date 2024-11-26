
using AutoMapper;
using Link.Application.Contracts.Persistence;
using Link.Persistence;
using LinkCutter.Application.Contracts.Persistence;
using LinkCutter.Persistence.Repositories;
using Microsoft.AspNetCore.Http;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace LinkCutter.Persistence.Repositories
{
    public static class CustomClaimTypes
    {
        public const string Uid = "uid";
    }
    
    public class UnitOfWork : IUnitOfWork
    {
        private readonly LinkDbContext _context;
        private  ILinkRepository linkRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ILinkRepository LinkRepository => linkRepository ??= new LinkRepository(_context);

        public UnitOfWork(LinkDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            this._httpContextAccessor = httpContextAccessor;
        }

        
        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }

        public async Task Save() 
        {
            
            var user = _httpContextAccessor.HttpContext.User;
            if (user.Identity.IsAuthenticated) await _context.SaveChangesAsync(user.Claims.FirstOrDefault(x => x.Type == CustomClaimTypes.Uid).Value);
            else
            await _context.SaveChangesAsync("Anonym");
        }
    }
}
