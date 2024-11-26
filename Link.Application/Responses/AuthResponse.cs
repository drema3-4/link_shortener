using Link.Application.Responses;

namespace LinkCutter.Application.Models.Identity
{
    public class AuthResponse:BaseCommandResponse
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public DateTime ExpirationKey { get; set; }
    }
}
