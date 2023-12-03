using System;
using System.Collections.Generic;

namespace Raszpberry_WEBAPI.Models
{
    public partial class Rzinvt01
    {
        public int Id { get; set; }
        public string ItemType { get; set; } = null!;
        public string ItemName { get; set; } = null!;
        public string ModelNo { get; set; } = null!;
        public string ItemCode { get; set; } = null!;
    }
}
