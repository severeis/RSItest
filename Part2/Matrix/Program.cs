using System.Text.RegularExpressions;

namespace Matrix
{
    internal class Program
    {
        static void Main()
        {
            Console.Write("Input: ");
            var str = Console.ReadLine();

            try
            {
                var areas = new MatrixAreas().Calculate(str);
                Console.Write($"Output: {areas}");
            }
            catch(ArgumentException)
            {
                Console.Write($"Incorrect input, example 1,0,1;0,1,0");
            }

            Console.ReadKey();
        }
    }
}