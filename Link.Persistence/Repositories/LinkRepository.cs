using Link.Application.Contracts.Persistence;
using Link.Domain;
using Link.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Persistence.Repositories
{
    public class LinkRepository: GeneralRepository<Link.Domain.Link>, ILinkRepository
    {
        public LinkDbContext _dbContext;
        public LinkRepository(LinkDbContext context) : base(context) {
            _dbContext = context;
        }

        public async Task<IEnumerable<Link.Domain.Link>> GetAllLinks()
        {
            var allLinks = await _dbContext.Links.ToListAsync() ;
            return allLinks;
        }

        public async Task<Link.Domain.Link> GetByName(string name)
        {
            var link = await _dbContext.Links.FirstOrDefaultAsync(i => i.Name == name);
            return link;
        }

        public async Task<bool> DeleteLinkById(int linkId)
        {
            var link = await _dbContext.Links.FirstOrDefaultAsync(i => i.Id == linkId);
            if (link != null)
            {
                link.IsDeleted = true;
                await _dbContext.SaveChangesAsync();
                return true;
            }
            return false;

        }
    

        public async Task<bool> DoesLinkExist(string name)
        {

            return _dbContext.Links.Any(link => link.Name.ToLower() == name.ToLower());
        }



    }
}
