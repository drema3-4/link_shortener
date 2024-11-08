
using Link.Domain.Common;
using System.Diagnostics.CodeAnalysis;

namespace Link.Domain
{

    public class Link : BaseDomainEntity
    {
        public string Name { get; set; }
        public string Url { get; set; }
        [AllowNull]
        public bool IsDeleted { get; set; }
        public long Numbers { get; set; }
    }
}
