using Entity;
using Repository.Contexts;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class CommentsRepository : ICommentsRepository
    {
        private readonly BanjoContext _banjoContext;

        public CommentsRepository(BanjoContext banjoContext)
        {
            _banjoContext = banjoContext;
        }

        public async Task AddComment(Comment comment)
        {
           await _banjoContext.AddAsync(comment);
        }

        public async Task<List<Comment>> GetComments(ISpecification<Comment> specification)
        {
            return await Task.Run(() =>
            {
                IQueryable<Comment> results = SpecificationEvaluator<Comment>
                    .ApplySpecification(_banjoContext.Comments.AsQueryable(), specification);
            
                return results.ToList();
            });
        }

        public async Task SaveChanges()
        {
            await _banjoContext.SaveChangesAsync();
        }
    }
}
