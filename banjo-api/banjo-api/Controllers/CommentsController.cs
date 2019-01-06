using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using banjo_api.Models;
using Entity;
using Entity.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository;
using Repository.Interfaces;

namespace banjo_api.Controllers
{
    [Produces("application/json")]
    [Route("api/Comments")]
    public class CommentsController : Controller
    {
        private readonly ICommentsRepository _commentsRepository;

        public CommentsController(ICommentsRepository commentsRepository)
        {
            _commentsRepository = commentsRepository;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            List<Comment> comments = await _commentsRepository.GetComments(
                    new ActiveApprovedCommentSpecification(DateTime.UtcNow));

            List<CommentDto> commentDtos = comments.Select(Mapper.Map<CommentDto>).ToList();

            return Ok(commentDtos);
        }

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> AddComment([FromBody] CommentDto comment)
        {
            try
            {
                Comment entity = Mapper.Map<Comment>(comment);
                
                DateTime now = DateTime.UtcNow;

                entity.CreatedDateTime = now;
                entity.ModifiedDateTime = now;
                entity.Approved = true;

                await _commentsRepository.AddComment(entity);
                await _commentsRepository.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok();
        }
    }
}