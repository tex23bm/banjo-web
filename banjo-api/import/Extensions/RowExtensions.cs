using System;
using System.Collections.Generic;
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
                        break;
                    case 1: guest.Partner = cell.StringCellValue;
                        break;
                    case 2: guest.TotalGuestsAllowed = (int) cell.NumericCellValue;
                        break;
                }
            }

            return guest;
        }
    }
}
