
using Link.Domain.Common;

namespace Link.Domain
{

    public class Link : BaseDomainEntity
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string CreatedBy { get; set; }
        public bool IsDeleted { get; set; }
        public long Numbers { get; set; }
    }
}
