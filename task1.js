const data = 'Hellow World!'
const data1 = [1,2,4,0]
function checkk(n)
{
    if(Array.isArray(n)){
        console.log("This is an Array..")
    }else{
        console.log("This is not an Array")
    }
}
checkk(data);
checkk(data1)


// if(Array.isArray(data1)){
//     console.log("This is an Array..")
// }else{
//     console.log("This is not an Array")
// }