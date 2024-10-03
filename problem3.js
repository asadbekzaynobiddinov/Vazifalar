function countItem(array, item) {
    let count = 0
    for(let member of array){
        if(member === item){
            count++
        }
    }    
    return count
}


function findDuplicates(arr) {
    let newArr = []
    let have = new Set()
    for(let item of arr){
        if(countItem(arr, item) > 1 && !have.has(item)){
            newArr.push(item)
            have.add(item)
        }
    }
    return newArr
 }
 
 // Test case
 console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
 // Output: [1, 2]