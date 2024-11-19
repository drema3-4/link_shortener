using LinkCutter.Application.Models.Identity;
using LinkCutter.Application.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Application.Contracts.Identity
{
    public interface IAuthService
    {
        Task<AuthResponse> Login(AuthRequest request);
        Task<RegistrationResponse> Register(RegistrationRequest request);



    }
}
