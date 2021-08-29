let arr = [1,1,1,2,3,3,3,4,4,5,5,5,5,6,7]

let duplicateRemoved = (arr) => {
    let ids = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!ids[arr[i]]) {
            ids[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(duplicateRemoved(arr))