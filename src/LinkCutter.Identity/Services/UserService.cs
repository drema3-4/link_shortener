using AutoMapper;

using LinkCutter.Identity.Models;
using LinkCutter.Application.Contracts.Identity;
using LinkCutter.Application.Models.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        
        public async Task<User> GetUser(int userId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            return new User
            {
                Email = user.Email,
                Id = user.Id,
                UserName = user.UserName
            };
        }

        public async Task<List<User>> GetUsers()
        {
            var employees = await _userManager.GetUsersInRoleAsync("User");
            return employees.Select(q => new User { 
                Id = q.Id,
                Email = q.Email,
                UserName = q.UserName
            }).ToList();
        }
    }
}
