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

        
        public async Task<User> GetUser(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            return new User
            {
                Email = user.Email,
                Id = user.Id,
                UserName = user.UserName

            };
        }

        public async Task MakeAdmin(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            await _userManager.AddClaimAsync(user, new Claim("role", "admin"));
        }
        
        public async Task RemoveAdmin(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            await _userManager.RemoveClaimAsync(user, new Claim("role", "admin"));
        }

        public async Task<bool> IsAdmin(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return false;
            }

            var roles = await _userManager.GetRolesAsync(user);
            return roles.Contains("admin");
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
