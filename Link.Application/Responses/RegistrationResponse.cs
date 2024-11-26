using Link.Application.Responses;

namespace LinkCutter.Application.Responses
{
    public class RegistrationResponse : BaseCommandResponse
    {
        public string UserId { get; set; }

        public string Token { get; set; }

        public DateTime ExpirationKey { get; set; }
    }
}
