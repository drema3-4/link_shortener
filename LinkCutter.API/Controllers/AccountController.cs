using AutoMapper;
using Azure.Core;
using Link.Application.DTO;
using LinkCutter.Application.Contracts.Identity;
using LinkCutter.Application.Models.Identity;
using LinkCutter.Application.Responses;
using LinkCutter.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutterApi.Controllers
{
    [ApiController]
    [Route("api/accounts")]
    public class AccountsController : Controller
    {
        private readonly IAuthService authService;
        private readonly IUserService userService;
        private readonly IConfiguration configuration;
        private readonly LinkCutterIdentityDbContext context;
        private readonly IMapper mapper;

        public AccountsController(IAuthService authService,
            IUserService userService,
            IConfiguration configuration,
            LinkCutterIdentityDbContext context,
            IMapper mapper)
        {
            this.authService = authService;
            this.userService = userService;
            this.configuration = configuration;
            this.context = context;
            this.mapper = mapper;
        }



        [HttpPost("makeAdmin")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
        public async Task<ActionResult> MakeAdmin([FromBody] string userId)
        {
            await userService.MakeAdmin(userId);
            return NoContent();
        }

        [HttpPost("removeAdmin")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
        public async Task<ActionResult> RemoveAdmin([FromBody] string userId)
        {
            await userService.RemoveAdmin(userId);
            return NoContent();
        }

        [HttpPost("signUp")]
        public async Task<ActionResult<RegistrationResponse>> Create(
            [FromBody] RegistrationRequest userCredentials)
        {
            var res = await authService.Register(userCredentials);
            if (res.Success)
            {
                return Ok(res);
            }
            else
            {
                return BadRequest(res);
            }
        }

            [HttpPost("login")]
            public async Task<ActionResult<AuthResponse>> Login(
                [FromBody] AuthRequest userCredentials)
            {
            var res = await authService.Login(userCredentials);
            if (res.Success)
            {
                return Ok(res);
            }
            else
            {
                return (res);
            }




        }


        }
    }
