using AutoMapper;
using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Validators;
using Link.Application.Responses;
using LinkCutter.Application.Contracts.Persistence;
using MediatR;

namespace Link.Application.Features.LinkTypes.Handlers.Commands
{

    public record DeleteLinkCommand(LinkDTO linkDTO) : IRequest<BaseCommandResponse>;

    public class DeleteLinkCommandHandler : IRequestHandler<DeleteLinkCommand, BaseCommandResponse>
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public DeleteLinkCommandHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;

        }
        public async Task<BaseCommandResponse> Handle(DeleteLinkCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
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
    }
}
