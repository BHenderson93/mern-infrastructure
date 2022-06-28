/* let test = '___nnnnnnn___nnnnnnnnnnnnnnnnnnnnn'

const makeItHome = (path) => {
    let counter = 0
    let index = 0

    if (path.length < 16) {
        return 'Woohoo!'
    }

    while (path[index]) {
        path[index] === 'n' && counter++
        index++
        if (counter === 16) {
            return 'Car Dead'
        }
    }
    return 'Woohoo!'
}

console.log(makeItHome(test))

//senior/open membership
//senior = age > 54, handicap > 7

//input is pairs [age, handicap]

const membership = (stringArray) => {
    let output = []
    for (let [age, handicap] of stringArray) {
        if (age > 54) {
            if (handicap > 7) {
                output.push('Senior')
            } else {
                output.push('Open')
            }
        } else {
            output.push('Open')
        }
    }
    return output
}

input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

console.log(membership(input))
 */


let array1 = [1,2,3,4,5,6]
let array2 = [3,6,7,8,20]

function findDuplicates(arr1,arr2){

    let output = []
    let p1 = 0
    let p2 = 0
    
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]===arr2[p2]){
            output.push(arr1[p1])
            p1++
            p2++
        }else if(arr1[p1]>arr2[p2]){
            p2++
        }else{
            p1++
        }
    }
    return output
}

console.log(findDuplicates(array1,array2))


