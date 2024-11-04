using AutoMapper;
using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Validators;
using Link.Application.Responses;
using Link.Domain;
using LinkCutter.Application.Contracts.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Link.Application.Features.LinkTypes.Handlers.Commands
{

    public record CreateLinkCommand(LinkDTO linkDTO) : IRequest<BaseCommandResponse>;

    public class CreateLinkCommandHandler : IRequestHandler<CreateLinkCommand, BaseCommandResponse>
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CreateLinkCommandHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;

        }
        public async Task<BaseCommandResponse> Handle(CreateLinkCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            if (request.linkDTO.Name == null)
            {   do
                {
                    string generatedLink = Guid.NewGuid().ToString();
                    request.linkDTO.Name = generatedLink;
                }
            while (_unitOfWork.LinkRepository.GetByName(request.linkDTO.Name) != null);
    
            }
            else
            {
                var validator = new LinkDTOValidator();
                var validationResult = await validator.ValidateAsync(request.linkDTO);
                if (validationResult.IsValid == false)
                {
                    response.Success = false;
                    response.Message = "Creation Failed";
                    response.Errors = validationResult.Errors.Select(q => q.ErrorMessage).ToList();
                    return response;
                }
            }
                var leaveType = _mapper.Map<Link.Domain.Link>(request.linkDTO);

                leaveType = await _unitOfWork.LinkRepository.Add(leaveType);
                await _unitOfWork.Save();

                response.Success = true;
                response.Message = "Creation Successful";
                response.Id = leaveType.Id;
                
            
            return response;
        }
    }
}
