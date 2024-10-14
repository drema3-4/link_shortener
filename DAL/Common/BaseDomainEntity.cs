﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Link.Domain.Common
{
    public abstract class BaseDomainEntity
    {

        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public long CreatedById { get; set; }
    }
}
