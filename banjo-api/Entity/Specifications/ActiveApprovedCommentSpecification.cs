using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Entity.Specifications
{
    public class ActiveApprovedCommentSpecification : BaseSpecification<Comment>
    {
        public ActiveApprovedCommentSpecification(DateTime asOf) : 
            base(c=>c.Approved == true 
            && (c.DeletedDateTime == null || c.DeletedDateTime > asOf)
            && c.CreatedDateTime <= asOf)
        {
        }
    }
}
