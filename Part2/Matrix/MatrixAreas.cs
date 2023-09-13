using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Matrix
{
    public class MatrixAreas
    {
        public int Calculate(string str)
        {
            var regex = new Regex("^[01](([,;])[01])*$");
            if (str == null || !regex.IsMatch(str))
            {
                throw new ArgumentException();
            }

            var matrix = str.Split(';', StringSplitOptions.RemoveEmptyEntries)
                .Select(x => x.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(y => int.Parse(y)).ToArray()).ToArray();

            var areas = 0;
            var exists = new HashSet<Tuple<int, int>>();

            for (int i = 0; i < matrix.Length; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    if (RecursiveCheck(i, j, matrix, exists) > 0) areas++;
                }
            }

            return areas;
        }

        int RecursiveCheck(int i, int j, int[][] matrix, HashSet<Tuple<int, int>> exists)
        {
            if (i < 0 || j < 0 || i > matrix.Length - 1 || j > matrix[i].Length - 1) return 0;

            var key = new Tuple<int, int>(i, j);
            if (matrix[i][j] == 0 || exists.Contains(key)) return 0;

            exists.Add(key);

            var result = 1;
            result += RecursiveCheck(i - 1, j, matrix, exists);
            result += RecursiveCheck(i + 1, j, matrix, exists);
            result += RecursiveCheck(i, j - 1, matrix, exists);
            result += RecursiveCheck(i, j + 1, matrix, exists);

            return result;
        }
    }
}
