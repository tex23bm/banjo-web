using Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface ICommentsRepository
    {
        Task<List<Comment>> GetComments(ISpecification<Comment> specification);

        Task AddComment(Comment comment);

        Task SaveChanges();
    }
}
