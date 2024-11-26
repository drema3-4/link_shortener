using AutoMapper;
using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Validators;
using Link.Application.Responses;
using LinkCutter.Application.Constants;
using LinkCutter.Application.Contracts.Identity;
using LinkCutter.Application.Contracts.Persistence;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace Link.Application.Features.LinkTypes.Handlers.Commands
{

    public record DeleteLinkCommand(LinkDTO linkDTO) : IRequest<BaseCommandResponse>;

    public class DeleteLinkCommandHandler : IRequestHandler<DeleteLinkCommand, BaseCommandResponse>
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public DeleteLinkCommandHandler(IMapper mapper, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor,
            IUserService userService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _httpContextAccessor = httpContextAccessor;
            _userService = userService;

        }
        public async Task<BaseCommandResponse> Handle(DeleteLinkCommand request, CancellationToken cancellationToken)
        {
            var userId = _httpContextAccessor.HttpContext.User.Claims.FirstOrDefault(x => x.Type == CustomClaimTypes.Uid);
            var user = await _userService.GetUser(userId.Value);
            var isAdmin = await _userService.IsAdmin(userId.Value);
            var response = new BaseCommandResponse();
            var link = await _unitOfWork.LinkRepository.Get(request.linkDTO.Id);
            if (link.CreatedBy == userId.Value || isAdmin)
            {
                var result = await _unitOfWork.LinkRepository.DeleteLinkById(request.linkDTO.Id);
                if (result == false)
                {
                    response.Success = false;
                    response.Message = "Удаление неуспешно";
                    return response;
                }
                response.Success = true;
                return response;
            }
            else
            {
                response.Success = false;
                response.Message = "Удаление неуспешно";
                return response;
            }
        }
    }
}
