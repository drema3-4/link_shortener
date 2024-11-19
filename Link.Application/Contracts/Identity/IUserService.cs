using LinkCutter.Application.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Application.Contracts.Identity
{
    public interface IUserService
    {
        Task<List<User>> GetUsers();
        Task<User> GetUser(string userId);


        Task MakeAdmin(string userId);

        Task RemoveAdmin(string userId);

        Task<bool> IsAdmin(string userId);
    }
}
