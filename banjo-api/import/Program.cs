using System;
using System.IO;
using System.Linq;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace import
{
    class Program
    {
        static void Main(string[] args)
        {
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
            
            for (int i = 0; i <= sheet.LastRowNum; ++i) //Loop the records upto filled row  
            {
                IRow row = sheet.GetRow(i);
                if (row != null) //null is when the row only contains empty cells   
                {
                    foreach (var cell in row.Cells)
                    {
                        Console.Write($"{cell.ToString()}\t");
                    }

                    Console.Write("\r\n");
                }
            }

            Console.WriteLine("Finished, Cleaning up!");

        }
    }
}
