using System;
using System.Collections.Generic;

namespace Raszpberry_WEBAPI.Models;

public partial class RbpEmp
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public DateTime? DateHired { get; set; }

    public bool? Regular { get; set; }
}
