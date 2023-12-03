using System;
using System.Collections.Generic;

namespace Raszpberry_WEBAPI.Models
{
    public partial class Rzemp01
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? DateHired { get; set; }
        public bool? Regular { get; set; }
    }
}
