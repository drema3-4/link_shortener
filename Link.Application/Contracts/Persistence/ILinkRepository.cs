using Link.Application.DTO;
using Link.Domain;
namespace Link.Application.Contracts.Persistence;
public interface ILinkRepository : IGeneralRepository<Domain.Link>
{

    public Task<Domain.Link> GetByName(string name); 

    public Task<IEnumerable<Domain.Link>> GetAllLinks();

    public Task<bool> DoesLinkExist(string name);


}

