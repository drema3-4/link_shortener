using FluentValidation;
using Link.Application.DTO;
namespace Link.Application.Features.LinkTypes.Validators
{
    public class LinkDTOValidator:AbstractValidator<LinkDTO>
    {
        public LinkDTOValidator()
        {
            RuleFor(link => link.Name)
    .Matches("^[a-z]+([A-Z][a-z]*)*$").WithMessage("{PropertyName} должно соответствовать шашлычной нотации");

            RuleFor(link => link.Url)
      .NotEmpty().WithMessage("{PropertyName} is required.")
      .Matches(@"[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)").WithMessage("{PropertyName} должно соответствовать формату ссылки");
        }
    }
}
