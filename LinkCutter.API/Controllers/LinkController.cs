using AutoMapper;
using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Handlers.Commands;
using Link.Application.Features.LinkTypes.Handlers.Queries;
using Link.Application.Responses;
using LinkCutter.Application.DTO.Common;
using LinkCutter.Application.Features.LinkTypes.Handlers.Queries;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using LinkCutter.Application.Extensions;
using Microsoft.EntityFrameworkCore;
using LinkCutter.Application.Responses;



namespace LinkCutter.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkController : Controller
    {
        private IMediator _mediator;
        private IMapper _mapper;

        public LinkController(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;

        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("GetLinks")]
        public async Task<ActionResult<IEnumerable<LinkDTO>>> GetAllLinks(/*[FromQuery] PaginationDTO paginationDTO*/)
        {
            var allLinks = await _mediator.Send(new GetLinkTypeListRequest());
            //var queryable = allLinks.AsQueryable();
            //await HttpContext.InsertParametersPaginationInHeader(queryable);
            //var links = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            //var linksDTO = _mapper.Map<List<LinkDTO>>(links);
            //return Ok(linksDTO);
            return Ok(allLinks);
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        [HttpPost("CreateLink")]
        public async Task<BaseCommandResponse> CreateLink([FromBody]LinkDTO link)
        {
            var newlink = await _mediator.Send(new CreateLinkCommand(link));
            return newlink;
        }
        [HttpGet("GetLink")]
        public async Task<LinkDTO> GetLink([FromQuery] string name)
        {

            var link = await _mediator.Send(new GetLinkByNameRequest(name));
            return link;
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete("DeleteLink")]
        public async Task<BaseCommandResponse> DeleteLink([FromBody] LinkDTO link)
        {
            var newlink = await _mediator.Send(new DeleteLinkCommand(link));
            return newlink;
        }


        //[HttpGet]
        //public LinkDTO GetLink()
        //{
        //    return new LinkDTO();
        //}


    }
}
