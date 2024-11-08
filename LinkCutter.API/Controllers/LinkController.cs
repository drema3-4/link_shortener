using Link.Application.DTO;
using Link.Application.Features.LinkTypes.Handlers.Commands;
using Link.Application.Features.LinkTypes.Handlers.Queries;
using Link.Application.Responses;
using LinkCutter.Application.Features.LinkTypes.Handlers.Queries;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;



namespace LinkCutter.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkController : Controller
    {
        private IMediator _mediator;

        public LinkController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("GetLinks")]
        public async Task<ActionResult<IEnumerable<LinkDTO>>> GetAllLinks()
        {
            var allLinks = await _mediator.Send(new GetLinkTypeListRequest());
            
            return Ok(allLinks);
        }
        //    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

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



        //[HttpGet]
        //public LinkDTO GetLink()
        //{
        //    return new LinkDTO();
        //}


    }
}
