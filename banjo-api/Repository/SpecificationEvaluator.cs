using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public static class SpecificationEvaluator<T>
    {
        public static IQueryable<T> ApplySpecification(IQueryable<T> query, ISpecification<T> specification)
        {
            if(specification.Criteria != null)
            {
                query = query.Where(specification.Criteria);
            }

            return query;
        }
    }
}
