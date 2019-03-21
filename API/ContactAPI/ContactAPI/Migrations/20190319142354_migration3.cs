using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactAPI.Migrations
{
    public partial class migration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MobileNo",
                table: "Contacts",
                newName: "Message");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Message",
                table: "Contacts",
                newName: "MobileNo");
        }
    }
}
