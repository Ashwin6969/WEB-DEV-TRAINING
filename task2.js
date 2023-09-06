const data = ['w3resource','w3resource','w3resource']
const data1 = [1, 2, 4, 0]
var cloneData = []
var cloneData1 = []

//copying array1(data)
console.log(cloneData)
for(var i=0 ; i<data.length ; i++)
{
    cloneData.push(data[i]);
}

//copying array2(data1)
console.log(cloneData1)
for(i=0 ; i<data1.length ; i++)
{
    cloneData1.push(data1[i]);
}
console.log("Original:") 
console.log(data)
console.log(data1)

console.log("Cloned:")
console.log(cloneData);
console.log(cloneData1)

