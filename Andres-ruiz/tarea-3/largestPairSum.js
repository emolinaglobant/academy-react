 function largestPairSum (numbers) {
        let numbers = [10,14,2,23,19];
        let first, second;
        if (numbers[0] > numbers[1])
        {
            first = numbers[0];
            second = numbers[1];
        }
        else
        {
            first = numbers[1];
            second = numbers[0];
        }
        for (let i = 2; i < numbers.length; i ++)
        {
            if (numbers[i] > first)
            {
                second = first;
                first = numbers[i];
            }
            else if (numbers[i] > second && numbers[i] != first)
                second = numbers[i];
        }
        document.write(first + second);
    }
 
 const strictEqual = require("chai").assert.strictEqual;

 function doTest (array, expected) {
   const actual = largestPairSum(array);
   strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
 }
 
 it("Basic tests", () => {
     doTest([10,14,2,23,19], 42);
     doTest([-100,-29,-24,-19,19], 0);
     doTest([1,2,3,4,6,-1,2], 10);
     doTest([-10, -8, -16, -18, -19], -18);
 });




