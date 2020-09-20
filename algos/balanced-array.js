function balancedArr(arr) {
    let i=0;
    let sumL=0;
    let sumTotal=0;

    for (let z=0; z<arr.length; z++) {
        sumTotal += arr[z];
    }

    while (i<arr.length-1) {
        sumL += arr[i];
        if (sumTotal - 2*sumL === arr[i+1]) {
            break;
        } else {
            i++;
        }
    }
    return i+1;

    // let j=arr.length-1;
    // let sumR=arr[arr.length-1];
    // while (i<arr.length-1) {
    //     while (j>0) {
    //         if (sumL < sumR) {
    //             i++;
    //             sumL += arr[i];
    //         }
    //         if (sumL > sumR) {
    //             j--;
    //             sumR += arr[j];
    //         }
    //         if (sumL === sumR) {
    //             break;
    //         }
    //     }
    //     i++;
    //     break;
    // }
    // return i;
}


console.log(balancedArr([1, 2, 3, 4, 6]))


