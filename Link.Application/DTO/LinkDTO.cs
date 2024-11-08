using Link.Application.DTO.Common;
using Link.Domain;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Link.Application.DTO
{
    public class LinkDTO:BaseDTO
    {
        [AllowNull]
        public string Name { get; set; }
        public string Url { get; set; }


       
    }
}
