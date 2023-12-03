using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Raszpberry_WEBAPI.Models
{
    public partial class RASZContext : DbContext
    {
        public RASZContext()
        {
        }

        public RASZContext(DbContextOptions<RASZContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Rzemp01> Rzemp01s { get; set; } = null!;
        public virtual DbSet<Rzinvt01> Rzinvt01s { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-OBKMFEP;Database=RASZ;TrustServerCertificate=true;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Rzemp01>(entity =>
            {
                entity.ToTable("RZEMP01");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DateHired).HasColumnName("dateHired");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Regular).HasColumnName("regular");
            });

            modelBuilder.Entity<Rzinvt01>(entity =>
            {
                entity.ToTable("RZINVT01");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ItemCode)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("item_code");

                entity.Property(e => e.ItemName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("item_name");

                entity.Property(e => e.ItemType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("item_type");

                entity.Property(e => e.ModelNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("model_no");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
