using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using Entity;
using NPOI.SS.UserModel;

namespace import.Extensions
{
    public static class RowExtensions
    {
        public static Guest ToEntity(this IRow row)
        {
            var guest = new Guest();

            foreach (var cell in row.Cells)
            {
                switch (cell.ColumnIndex)
                {
                    case 0: guest.Name = cell.StringCellValue;
                        guest.LastName = ParseLastName(guest.Name);
                        break;
                    case 1: guest.Partner = cell.StringCellValue;
                        break;
                    case 2: guest.TotalGuestsAllowed = (int) cell.NumericCellValue;
                        break;
                    case 5: 
                        guest.Address = cell.StringCellValue;
                        guest.Zipcode = ParseZipCode(guest.Address);
                        break;
                }
            }

            return guest;
        }

        private static string ParseLastName(string lastName)
        {
            if(string.IsNullOrEmpty(lastName))
            {
                return null;
            }

            try
            {
                lastName = lastName.Trim();
                char[] seps = {' '};

                string[] splits = lastName.Split(seps);

                List<string> splitList = splits.ToList();

                if(splitList.Last() == "III" || splitList.Last() == "Jr")
                {
                    return splitList[splitList.Count - 2];
                }


                return splitList.Last();
            }
            catch(Exception e)
            {
               Console.WriteLine(e.Message);
            }

            return null;
        }

        private static string ParseZipCode(string address)
        {
            if(string.IsNullOrEmpty(address))
            {
                return null;
            }

            try
            {
                char[] seps = {' '};

                string[] splits = address.Split(seps);
                
                return splits.ToList().Last();
            }
            catch(Exception e)
            {
               Console.WriteLine(e.Message);
            }

            return null;
        }
    }
}
