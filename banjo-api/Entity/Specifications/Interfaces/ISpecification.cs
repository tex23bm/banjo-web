using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Entity
{
    public interface ISpecification<T>
    {
        Expression<Func<T,bool>> Criteria { get; set; }
    }
}
