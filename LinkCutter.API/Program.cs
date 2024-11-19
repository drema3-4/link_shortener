using Link.Application;
using LinkCutter.Persistence;
using LinkCutter.Identity;
using LinkCutter.Identity.Models;
using Microsoft.Extensions.Options;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.ConfigureApplicationServices();
builder.Services.ConfigurePersistenceServices(builder.Configuration);
builder.Services.ConfigureIdentityServices(builder.Configuration);

builder.Services.AddControllers(
    options => { options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true; 

    }
    );

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                                                        //.WithOrigins("https://localhost:44351")); // Allow only this origin can also have multiple origins separated with comma
                    .AllowCredentials()); // allow credentials

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
