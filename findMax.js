
function findMax(testArray) {

    var max = -1;

    for (var index = 0; index <= testArray.length; index++) {
        if (testArray[index] > max) {
            max = testArray[index];
        } 
    }

    return max;
}