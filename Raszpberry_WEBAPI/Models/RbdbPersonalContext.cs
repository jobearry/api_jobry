using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Raszpberry_WEBAPI.Models;

public partial class RbdbPersonalContext : DbContext
{
    public RbdbPersonalContext()
    {
    }

    public RbdbPersonalContext(DbContextOptions<RbdbPersonalContext> options)
        : base(options)
    {
    }

    public virtual DbSet<RbpEmp> RbpEmps { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=raszpberry-test-db.cp1ikcdokujf.us-east-1.rds.amazonaws.com,1433;Database=RBDB-Personal;User Id=admin;Password=Yonko2209;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RbpEmp>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RBP_EMP__3214EC27475157C9");

            entity.ToTable("RBP_EMP");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DateHired).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
