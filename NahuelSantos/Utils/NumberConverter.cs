using System;
using System.Text.RegularExpressions;

namespace NahuelSantos.Utils
{
    public static class NumberConverter
    {
        private static readonly string[] Units = new[]
        {
            "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
        };

        private static readonly string[] Tens = new[]
        {
            "Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        };

        private static readonly string[] Hundreds = new[]
        {
            "Hundred", "Thousand", "Million", "Billion", "Trillion"
        };

        public static string ToWords(long number)
        {
            var words = string.Empty;

            if (number == 0)
            {
                return Units[0];
            }

            if (number < 0)
            {
                return "minus " + ToWords(Math.Abs(number));
            }

            if (number < 20)
            {
                return Units[number];
            }

            if ((number / 1000000000000) > 0)
            {
                words += ToWords(number / 1000000000000) + ' ' + Hundreds[4] + ' ';
                number %= 1000000000000;
            }

            if ((number / 1000000000) > 0)
            {
                words += ToWords(number / 1000000000) + ' ' + Hundreds[3] + ' ';
                number %= 1000000000;
            }

            if ((number / 1000000) > 0)
            {
                words += ToWords(number / 1000000) + ' ' + Hundreds[2] + ' ';
                number %= 1000000;
            }

            if ((number / 1000) > 0)
            {
                words += ToWords(number / 1000) + ' ' + Hundreds[1] + ' ';
                number %= 1000;
            }

            if ((number / 100) > 0)
            {
                words += ToWords(number / 100) + ' ' + Hundreds[0] + ' ';
                number %= 100;
            }

            if (number > 0)
            {
                if (words != "")
                {
                    words += "and ";
                }

                if (number < 20)
                {
                    words += Units[number];
                }
                else
                {
                    words += Tens[number / 10];
                    if ((number % 10) > 0)
                    {
                        words += "-" + Units[number % 10];
                    }
                }
            }

            // This Regex removes multiple spaces.
            return Regex.Replace(words, @"\s+", " "); ;
        }
    }
}
