/**
 * @param arr - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
    let trianglesCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstNumber = i + 1;
        let secondNumber = arr[firstNumber - 1];
        let thirdNumber = arr[secondNumber - 1];

        if (arr[thirdNumber - 1] === firstNumber && thirdNumber !== secondNumber && thirdNumber !==firstNumber) {
            trianglesCount++;
        }

    }
    return trianglesCount / 3;
};
