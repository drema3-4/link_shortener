using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Link.Application.DTO;
using Link.Domain;
using LinkCutter.Application.Models.Identity;

namespace Link.Application.Profiles
{
    public class MappingProfile:Profile
    {
        public MappingProfile() 
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<Link.Domain.Link, LinkDTO>().ReverseMap();
        }
    }
}
