using Microsoft.VisualStudio.TestTools.UnitTesting;
using NahuelSantos.Utils;
using System;

namespace UnitTestNahuelSantos
{
    [TestClass]
    public class UnitTestConverter
    {
        [TestMethod]
        public void TestToWords()
        {
            long units = 13;
            long tens = 79;
            long hundreds = 152;

            Assert.AreEqual(NumberConverter.ToWords(units), "thirteen", true);
            Assert.AreEqual(NumberConverter.ToWords(tens), "seventy-nine", true);
            Assert.AreEqual(NumberConverter.ToWords(hundreds), "one hundred and fifty-two", true);
        }
    }
}
