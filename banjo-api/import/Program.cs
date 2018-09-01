using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using import.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using Repository;
using Repository.Contexts;

namespace import
{
    class Program
    {
        private static IConfiguration Configuration { get; set; }

        static void Main(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();

            string banjoConnectionString = Configuration.GetConnectionString("banjo");

            var optionsBuilder = new DbContextOptionsBuilder<BanjoContext>();
            optionsBuilder.UseSqlServer(banjoConnectionString);

            var banjoContext = new BanjoContext(optionsBuilder.Options);
            var repository = new GuestsRepository(banjoContext);


            if (!args.Any())
            {
                Console.WriteLine("Required Argument: Excel File For Import");
                return;
            }

            string fileName = $"{Directory.GetCurrentDirectory()}\\{args[0]}";
            Console.WriteLine($"Reading: {fileName}");
            //Create COM Objects. Create a COM object for everything that is referenced

            XSSFWorkbook workbook = new XSSFWorkbook(fileName); 
            ISheet sheet = workbook.GetSheetAt(0);

            var guestList = new List<Guest>();

            for (int i = 0; i <= sheet.LastRowNum; ++i) //Loop the records upto filled row  
            {
                IRow row = sheet.GetRow(i);
                if (row != null) //null is when the row only contains empty cells   
                {
                    guestList.Add(row.ToEntity());
                }
            }

            var task =  Task.Run(async () => { await repository.Add(guestList); });

            Task.WaitAll(task);

            Console.WriteLine("Finished, Cleaning up!");

        }
    }
}
