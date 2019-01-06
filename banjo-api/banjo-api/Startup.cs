using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using banjo_api.Configurations;
using banjo_api.Models;
using Entity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Repository;
using Repository.Contexts;
using Repository.Interfaces;

namespace banjo_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddOptions();
            services.AddCors();

            string banjoConnectionString = Configuration.GetConnectionString("banjo");
            services.AddDbContext<BanjoContext>(o => o.UseSqlServer(banjoConnectionString));

            var section = Configuration.GetSection("CustomConfigSection");
            services.Configure<CustomConfigurations>(section);

            services.AddScoped<IGuestsRepository, GuestsRepository>();
            services.AddScoped<ICommentsRepository, CommentsRepository>();

            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<GuestDto, Guest>()
                    .ForMember(dest=>dest.CreatedDateTime, opt=>opt.Ignore())
                    .ForMember(dest=>dest.DeletedDateTime, opt=>opt.Ignore());
                cfg.CreateMap<Guest, GuestDto>();
                
                cfg.CreateMap<CommentDto, Comment>()
                    .ForMember(dest=>dest.Approved, opt=>opt.Ignore())
                    .ForMember(dest=>dest.CreatedDateTime, opt=>opt.Ignore())
                    .ForMember(dest=>dest.DeletedDateTime, opt=>opt.Ignore());
                cfg.CreateMap<Comment, CommentDto>();
             
            });

            Mapper.AssertConfigurationIsValid();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:4200")
                    .AllowAnyHeader().AllowAnyMethod();
                builder.WithOrigins("http://banjo-wedding.com/")
                    .AllowAnyHeader().AllowAnyMethod();

            });
                
            app.UseMvc();
        }
    }
}
