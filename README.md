# Raszpberry_WEBAPI

This is a basic WEBAPI that works with SQLServer
-
### SETUP
 - Install EntityFramework.SqlServer and EntityFramework.Tools
 - You can use the provided database on this repo and restore it on your SQL Server
 - After restoring, open the Package Manager Console and type in: 
 - >  Scaffold-DbContext "Server=Your-server-name;Database=Your-database-name;TrustServerCertificate=true;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer
 - After that you can create your own controller based on the database provided

You can follow below links for reference: 
- 

- [ASP.NET Core Docs](https://docs.microsoft.com/en-us/aspnet/core/)
- [EntityFramework Core Docs](https://docs.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Scaffold](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator)