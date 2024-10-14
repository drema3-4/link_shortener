using Link.Application.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkCutter.Application.Contracts.Persistence
{
    public interface IUnitOfWork : IDisposable
    {
        ILinkRepository LinkRepository { get; }
        Task Save();
    }
}
