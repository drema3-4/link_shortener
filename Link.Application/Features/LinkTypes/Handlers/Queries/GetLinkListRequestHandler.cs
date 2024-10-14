using AutoMapper;
using Link.Application.Contracts.Persistence;
using Link.Application.DTO;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Link.Application.Features.LinkTypes.Handlers.Queries
{
    public record GetLinkTypeListRequest():IRequest<IEnumerable<LinkDTO>>;
    public class GetLinkListRequestHandler : IRequestHandler<GetLinkTypeListRequest, IEnumerable<LinkDTO>>
    {
        private readonly ILinkRepository _linkRepository;
        private readonly IMapper _mapper;   
        
        public GetLinkListRequestHandler(ILinkRepository linkRepository, IMapper mapper)
        {
            _linkRepository = linkRepository;
            _mapper = mapper;

        }
        public async Task<IEnumerable<LinkDTO>> Handle(GetLinkTypeListRequest request, CancellationToken cancellationToken)
        {
            var links = await _linkRepository.GetAllLinks();
            var linksDto = _mapper.Map<List<LinkDTO>>(links);
            return linksDto; 
        }
    }
}
