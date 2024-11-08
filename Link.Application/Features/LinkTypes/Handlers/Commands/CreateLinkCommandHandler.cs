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
            while (await _unitOfWork.LinkRepository.DoesLinkExist(request.linkDTO.Name));
    
            }
            else
            {
                var validator = new LinkDTOValidator();
                var validationResult = await validator.ValidateAsync(request.linkDTO);
                var check = await _unitOfWork.LinkRepository.GetByName(request.linkDTO.Name);
                if (check != null)
                {
                    response.Success = false;
                    response.Message = "Такая ссылка уже существует";
   
                    return response;
                }
                if (validationResult.IsValid == false)
                {
                    response.Success = false;
                    response.Message = "Создание ссылки неуспешно";
                    response.Errors = validationResult.Errors.Select(q => q.ErrorMessage).ToList();
                    return response;
                }
            }
                var linkType = _mapper.Map<Link.Domain.Link>(request.linkDTO);

                linkType = await _unitOfWork.LinkRepository.Add(linkType);
                await _unitOfWork.Save();

                response.Success = true;
                response.Message = linkType.Name;
                response.Id = linkType.Id;
                
            
            return response;
        }
    }
}
