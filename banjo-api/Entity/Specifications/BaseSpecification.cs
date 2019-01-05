using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Entity.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public Expression<Func<T,bool>> Criteria { get; set; }

        public BaseSpecification(Expression<Func<T,bool>> criteria)
        {
            Criteria = criteria;
        }
    }
}
