using AutoMapper;
using Link.Application.Contracts.Persistence;
using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Handlers.Queries;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Application.Features.LinkTypes.Handlers.Queries
{
    public record GetLinkByNameRequest(string name):IRequest<LinkDTO>;
    public class GetLinkByNameRequestHandler:IRequestHandler<GetLinkByNameRequest, LinkDTO>
    {
        private readonly ILinkRepository _linkRepository;
        private readonly IMapper _mapper;

        public GetLinkByNameRequestHandler(ILinkRepository linkRepository, IMapper mapper)
        {
            _linkRepository = linkRepository;
            _mapper = mapper;

        }
        public async Task<LinkDTO> Handle(GetLinkByNameRequest request, CancellationToken cancellationToken)
        {
            var links = await _linkRepository.GetByName(request.name);
            var linkDto = _mapper.Map<LinkDTO>(links);
            return linkDto;
        }
    }
}
