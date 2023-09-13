using Matrix;

namespace MatrixTests
{
    [TestClass]
    public class MatrixAreasTests
    {
        private readonly MatrixAreas MatrixAreas = new();

        [TestMethod]
        public void TestCalculate1()
        {
            Assert.AreEqual(MatrixAreas.Calculate("1,0,1;0,1,0"), 3);
        }

        [TestMethod]
        public void TestCalculate2()
        {
            Assert.AreEqual(MatrixAreas.Calculate("1,0,1;1,1,0"), 2);
        }

        [TestMethod]
        public void TestCalculate3()
        {
            Assert.AreEqual(MatrixAreas.Calculate("1,1,1,0;0,1,0,0"), 1);
        }

        [TestMethod]
        public void TestArgumentException()
        {
            Assert.ThrowsException<ArgumentException>(() => MatrixAreas.Calculate(""));
            Assert.ThrowsException<ArgumentException>(() => MatrixAreas.Calculate("111"));
            Assert.ThrowsException<ArgumentException>(() => MatrixAreas.Calculate("abc"));
        }
    }
}