using Link.Application.DTO.Common;
using Link.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Link.Application.DTO
{
    public class LinkDTO:BaseDTO
    {
        public string Name { get; set; }
        public string Url { get; set; }

        public string CreatedBy { get; set; }

       
    }
}
