using Link.Application.DTO;
using Link.Application.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Application.Responses
{
    public class GetLinkResponse:BaseCommandResponse
    {
        LinkDTO linkDto { get; set; }
    }
}
