using AutoMapper;
using Link.Application.Contracts.Persistence;
using Link.Application.DTO;
using LinkCutter.Application.Constants;
using LinkCutter.Application.Contracts.Identity;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Link.Application.Features.LinkTypes.Handlers.Queries
{
    public record GetLinkTypeListRequest():IRequest<IEnumerable<LinkDTO>>;
    public class GetLinkListRequestHandler : IRequestHandler<GetLinkTypeListRequest, IEnumerable<LinkDTO>>
    {
        private readonly ILinkRepository _linkRepository;
        private readonly IUserService _userService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;
        
        public GetLinkListRequestHandler(ILinkRepository linkRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor,
            IUserService userService
            )
        {
            _linkRepository = linkRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
            _userService = userService;

        }
        public async Task<IEnumerable<LinkDTO>> Handle(GetLinkTypeListRequest request, CancellationToken cancellationToken)
        {
            var userId = _httpContextAccessor.HttpContext.User.Claims.FirstOrDefault(x => x.Type == CustomClaimTypes.Uid);
            var isAdmin = await _userService.IsAdmin(userId.Value);
            IEnumerable<Link.Domain.Link> links;
            if (isAdmin)
            {
                links = await _linkRepository.GetAllLinks();
            }
            else
            {
                links = _linkRepository.GetAllLinks().Result.Where(i => i.CreatedBy == userId.Value && !i.IsDeleted);
            }
            var linksDto = _mapper.Map<List<LinkDTO>>(links);
            return linksDto; 
        }
    }
}
