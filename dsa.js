// Q-1 Checking sum zero 
// [-5,-4,-3,-2,-1,0,2,4,6,8]

// ans-
// function method

// let Sumzero = (array) => {
//     for (let number of array) {
//         for (let j = 0; j < array.length; j++) {
//             console.log(array[j]);
//             if (number + array[j] === 0) {
//                 console.log(array[j]);
//                 return [number, array[j]]
//             }
//         }
//     }
// }
// const final = Sumzero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8])
// console.log(final); 


// IMPROVE THE TIME COMPLEX CITY

// const sumaddZero = (array) => {
//     let left = 0
//     let right = array.length - 1

//     while (left < right) {
//         sum = array[left] + array[right]
//         if (sum === 0) {
//             return [array[left], array[right]]
//         } else if (sum < 0) {
//             left++
//         } else {
//             right--
//         }
//     }
// }
// const val = sumaddZero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8])
// console.log(val);

// Count unique Number

// [1,1,2,2,3,4,4,5,6,7,8,8]

// condition
// i=0,j=1
// Array[i]!=Array[j]
// i++
// Array[i]=Array[j]

// const countunique = (array) => {
//     if (array.length > 0) {
//         let i = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] !== array[j]) {
//                 i++;
//                 array[i] = array[j]
//             }
//          }
//         return i + 1
//     } else {
//         throw new Error("Array is empty")
//     }
// }
// const val = countunique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8])
// console.log(val);


//1-- ....................Prime Number OR not a prime number....................

// let prime = 4;
// let primecheck = (prime) => {
//     if (prime <= 1) {
//         console.log("not a prime number");
//         return
//     }
//     let flag = true;
//     for (let i = 2; i <= prime / 2; i++) {
//         if (prime % 2 === 0) {
//             flag = false

//         }
//     }
//     if (flag === true) {
//         console.log("prime number");
//     } else {
//         console.log("not a prime number");
//     }
// }
// primecheck(prime)

//2-- ................Check prime Number................

// let prim = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let check = prim.filter((val) => {
//     if (val <= 1) {
//         return false
//     }
//     let flag = true
//     for (let i = 2; i <= val / 2; i++) {
//         if (val % i === 0) {
//             flag = false
//         }
//     }
//     if (flag === true) {
//         return true
//     } else {
//         return  false
//     }
// })
// console.log(check);

// 3-Bobble Sort in loop method

// let arr = [34, 36, 39, 84, 99, 70, 1, 5, 9]

// let arr = [7, 8, 4, 9, 5, 3, 6, 1, 2]

// let bubble = (arr) => {

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < (arr.length - 1 - i); j++) {
//             debugger 
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }

//     }
//     console.log(arr);
// }
// bubble(arr);   


//4-- ...................First Largest number..............................

// 


// let sag = (array) => {
//     let f = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (f < array[i]) {
//             f = array[i]
 //         }
//     }
//     console.log(f);
// }
// sag(array)

// let array = [1, 34, 67, 89, 999, 2, 78]

// let lar = Math.max(...array)
// console.log(lar);

// 5--..................Second Largest Number......................................

// let vb = [1, 6, 3, 78, 2, 45]

// let vz1 = vb[0] //1
// let vz2 = vb[0] //1
// for (let i = 0; i < vb.length; i++) {
//     if (vz1 < vb[i]) {
//         vz1 = vz2
//         vz1 = vb[i]
//     }
//     else if (vz2 < vb[i] || vz1 === vz2) {
//         // debugger
//         vz2 = vb[i]
//     }
// }
// console.log(vz2);

// let fnum = Math.max(...vb)
// vb.splice(vb.indexOf(fnum), 1)
// let snum = Math.max(...vb)
// console.log(snum);






//6-- ......................Foctorial number.............................................

// if 5 factorial 1*2*3*4*5=120

// let n = 5;
// let ans = 1;
// let fac = (n) => {
//     for (let i = 1; i <= n; i++) {
//         ans *= i

//     }
//     console.log(ans);
// }
// fac(n)




//7--- ................Fibonic serise...................

// let f = 5;
// let data = (f) => {
//     let a = 0,
//         b = 1,
//         c
//     for (let i = 0; i < f; i++) {
//         console.log(a);
//         c = a + b;
//         a = b;
//         b = c
//     } 
// }
// data(f)




// synchronous 

// let fun2 = () => {
//     console.log("fun2 start");
// }
// let fun1 = () => {
//     console.log("fun1 start");

//     fun2()
//     console.log("fun2 end");
// }
// fun1()



// asynchoronous

// let fun2 = () => {
//     setTimeout(() => {
//         console.log("fun2 start");
//     }, 3000)
// }
// let fun1 = () => {
//     console.log("fun1 start ");
//     fun2()
//     console.log("fun1 end");
// }
// fun1()


// CALLBACK FUNCTION

// let first = (callback) => {
//     setTimeout(() => {
//         console.log("first execute");
//         callback()
//     }, 3000)

// }
// let second = () => {
//     console.log("second executive");
// }
// first(second)

// Hosting
// hosting is javascript default behavior where variable and function declare to top of the scope brfore the code 
// execution
// in let and const show the referance error
// var is display undefine
// xx()
// s1()
// console.log(data);


// var data = 7
// function s1() {
//     console.log("function one");
// }
// function xx() {
//     console.log("function two");
// }
// console.log(data);
// animal("tiger")
// function animal(name) {
//     console.log(`danger animal is ${name}`);
// }

//8---  Math method

// let sag = ["rohit", "dhoni", "sachine", "dk"]
// let fin = Math.floor(Math.random() * sag.length)
// console.log(sag[fin]);

// let dos = Math.floor(Math.random() * 100)
// console.log(dos);

//9--- reverse 

// let rv = "sagar"
// let store = ""
// let rev = (rv) => {
//     for (let i = rv.length - 1; i >= 0; i--) {
//         store += rv[i]
//     }
//     return store
// }
// console.log(rev(rv));


// Method

// let val = rv.split("").reverse().join("")
// console.log(val);

//10---- ODD AND EVEN

// let od = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = od.filter((val) => {
//     return (val % 2 === 0)
// })
// console.log(even);

// let odd = od.filter((val) => {
//     return (val % 2 !== 0)
// })
// console.log(odd);

//another way to get a odd and even but not recomended

// let check = (od) => {
//     for (let i = 1; i <= od; i++) {
//         if (od % 2 === 0) {
//             return true
//         }
//         // else if (od % 2 !== 0) {
//         //     return true
//         // }
//     }
// }
// console.log(od.filter(check));

// let number = prompt("enter value")
// if (number % 2 === 0) {
//     document.write("even number")
// } else {
//     document.write("odd number")
// }


//11---- swap the zero to last
// let array1 = [2, 0, 5, 3, 0, 8, 0, 9, 0];
// function swapZero(array1) {
//     for (let i = array1.length - 1; i >= 0; i--) {
//         if (array1[i] == 0) {

//             array1.splice(i, 1);
//             array1.push(0);
//         }
//     }
//     return array1;
// }
// console.log(swapZero(array1));


//12-----Dublicate value and remove the dublicate

// let array2 = [1, 3, 4, 15, 19, 18, 5, 5, 4, 18];
// let duplicateNUmber = array2.filter((ele, index, array2) => {
//     return array2.indexOf(ele) !== index;
// })
// console.log(duplicateNUmber);



// ANAGRAM

//13---- let anagram = (str1, str2) => {
//     let sort1 = str1.split("").sort().join("").toLowerCase();
//     let sort3 = str2.split("").sort().join("").toLowerCase();
//     return sort1 === sort3
// }
// console.log(anagram("silent", "listen"));

//BY Using for loop

// "hello"->"llheo"

// condition
// length check 
// string "hello"
// {h:1,e:1,l:2,o:1}


// let anagram1 = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     let counter = {}
//     for (let letter of str1) {
//         counter[letter] = (counter[letter] || 0) + 1

//     }
//     for (let items of str2) {
//         if (!counter[items]) {
//             return false
//         }
//         counter[items] -= 1
//     }
//     return true
// }
// anagram1("hello", "llohe")

//14--- string count

// let cg = "newspepper"
// let stores = {}
// for (let count of cg) {
//     stores[count] = (stores[count] || 0) + 1
// }
// console.log(stores);


//15--- out require

// let a = 69
// let b = 420

// output
// let a=69
// let b=420

// a = a + b //69+420
// b = a - b// 489-69=420
// a = a - b// 489-420=69
// console.log(a);
// console.log(b);

// 16-PALINDROM

// let palindrom = (str) => {
//     let a = str.split("").reverse().join("")
//     if (a === str) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(palindrom("madam"));


// 17 -flaten Array

// let array5 = [1, 2, [4, 6, [10, 13, [24, 50]]]];
// let store = []
// let flat = (array5) => {
//     for (let i = 0; i < array5.length; i++) {
//         if (Array.isArray(array5[i])) {
//             flat(array5[i])
//         } else {
//             store.push(array5[i])
//         }
//     }
//     return store
// }
// console.log(flat(array5));

// 18-letter count
// let check = ["newspapper"]

// let count = 0
// let did = check.filter((val) => {
//     console.log(val.split(""));
//     val.split("").map((data) => {
//         if (data === "p") {
//             count++
//         } 
//         return data
//     })
//     return val
// })
// console.log(count);


// 19-First letter capital


// let check = "sagar"

// let data = check[0].toUpperCase() + check.slice(1)
// console.log(data);

//20-- alternative capital word


// let string = "Sagar Kumar Mohapatra"
// let alternative = (string) => {
//     let a = string.toLowerCase().split("")
//     for (let i = 0; i < a.length; i += 2) {
//         a[i] = a[i].toUpperCase()
//     }
//     return a.join("")
// }
// console.log(alternative(string));

// 21-Element count

// let data = ["sagar", "sipu", "silu", "sima", "sagar", "sipu", "sagar"]
// let store = {}
// for (let c of data) {
//     store[c] = (store[c] || 0) + 1
// }
// console.log(store);


// 22-LARGEST CHARECTER

// let findlargest = (a) => {
//     let data = a.split(" ")
//     let newdata = data.reduce((pre, cur) => {
//         console.log(cur);
//         return pre.length > cur.length ? pre : cur
//     })
//     return newdata
// } 
// console.log(findlargest("my name is sagar"));



// 23-largest length
// let findlength = (a) => {
//     let data = a.split(" ")
//     let newdata = data.sort((a, b) => {
//         return a.length - b.length
//     })
//     return newdata.length
// }
// console.log(findlength("my name is sagar"));


// DIFFERENT QUESTION

// 1---------------
// var test = function () {
//     console.log(10);
// }

// function test() {
//     console.log(20);
// }
// test()
// 2---------------

// function fn() {
//     console.log(this);
// }
// fn()// out put window
// new fn() output-{}

// 24--Object

// let obj = [
//     { name: "sagar", age: 24 },
//     { name: "rohit", age: 29 },
//     { name: "ram", age: 24 },
//     { name: "dhoni", age: 20 }
// ]
// let findage = obj.map((val) => val.age)
// console.log(findage);

// let average = obj.map((val) => val.age).reduce((a, b) => a + b / obj.length)
// console.log(average);


// const someArray = [
//     {
//         name: 'Some Item',
//         id: 12223,
//         type: {
//             category: {
//                 attributes: [
//                     {
//                         element: 'earth',
//                         nature: 'calm',
//                         power: 2899
//                     },
//                     {
//                         element: 'magic',
//                         nature: 'feurious',
//                         power: 1300
//                     },
//                     {
//                         element: 'water',
//                         nature: 'stable',
//                         power: 907
//                     },
//                 ]
//             }
//         }
//     }

// ]

// let average = someArray.map((val) => val.type.category.attributes.map((ss) => ss.power))
// console.log(average);

// let average1 = average.flat(1)
// // console.log(average1);
// let ww = average1.reduce((a, b) => a + b / average1.length)
// console.log(ww);


// 25---//find 20 positive numbers those are divisble wit 7 and when divide by 2,3,4,5,6 reminder will be 1

// let count = 1
// for (let i = 7; count <= 20; i++) {
//     if (i % 7 === 1 && i % 2 === 1 && i % 3 === 1 && i % 4 === 0 && i % 5 === 0 && i % 6 === 0) {
//         console.log(i);
//         count++
//     }
// }


// 26-hello print 10tmes in 1sec duration
// let g = setInterval(() => {
//     console.log("hello");
// }, 1000)
// let h = setTimeout(() => {
//     clearInterval(g)
// }, 10000)

// 27-chunk the array
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let output = []
// let chunk = 3
// for (let i = 0; i < array1.length; i + chunk) {
//     output.push(array1.splice(i, i + chunk))
// }
// console.log(output);



// 28-reduce method

// 1-largest Number

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let data = array.reduce((a, b) => {
//     return a > b ? a : b

// })
// console.log(data);


// 29-data show

// let arr = [1, 2, 3, 34, 4, 5, 6, 7, 7, 8, 8, 8, 9, 90]
// let clicks = () => {
//     let el = document.getElementById("element").value
//     if (el < arr.length && typeof parseInt(el) === "number" || 0 >= el) {
//         alert(arr[el])
//     } else {
//         alert("plz enter proper index")
//     }

// }
// clicks()



// 30-insert element in array

// i-method

//  let arr=[20,30,40,50,60,70]
//  let data=arr.splice(2,0,10)
//  console.log(arr)

//  ii-loop

// let arr=[20,30,40,50,60,70]

// let newE=10
// let position=2
// for(let i=arr.length-1;i>=0;i--){
//     if(i>=position){
//         arr[i+1]=arr[i]
//         if(i===position){
//             arr[i]=newE
//         }
//     }

// }
// console.log(arr)


// 31-delete element

// let arr=[20,30,40,50,60,70]
// let position=3
// for(let i=position;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr.length=arr.length-1
// console.log(arr)


// 32- Rest operator allow a function to write a undefine number arrgument as an array
// let data = (...other) => {
//     let total = 0
//     for (let val of other) {
//         total += val
//     }
//     return total
// }
// console.log(data(1, 2, 3, 4, 5, 6, 7, 8));

// console.log(data(1, 2, 3, 4, 5, 4, 4, 4, 4, 5, 7, 8));

// 33-spread operator

// spread operator allow us to quickly copy and add all existing array or object
//  into another array and object .it also used to change and add  property of object

// add of array

// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9, 10]
// let c = [...a, ...b]
// console.log(c);

// copy of Array
// let d = [...a]
// console.log(d);

// let a = {
//     name: "sagar",
//     age: 23,
//     adress: "biso"
// }
// let b = {
//     x: "sipu",
//     y: 90,
//     z: "bangalore"
// }
// let c = { ...a, ...b }
// console.log(c);


// let b = {
//     x: "sipu",
//     y: 90,
//     z: "bangalore"
// }

// let f = JSON.stringify(b)
// let d = JSON.parse(f)
// console.log(d);

// let na = "newspapper"
// let store = {}
// let data = (na) => {
//     for (let data of na) {
//         store[data] = (store[data] || 0) + 1
//     }
// }
// data(na)
// console.log(store);

// let data = (async () => {
//     try {
//         let val = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let fin = await val.json()
//         console.log(fin);
//     }
//     catch (error) {
//         console.log(error);
//     }
// })

// data()


// ***unique Stringgit




// let data = Promise.race([
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res("1sec")
//         }, 1000)
//     }),
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res("3 sec")
//         }, 3000)
//     }),
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res("3 sec")
//         }, 3000)
//     })
// ]).then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.log(error);
// })
// console.log(data);

// 34-function currying nth sum

// let sum = (a) => {
//     return function (b) {
//         if (b) {
//             return sum(a + b)
//         }
//         return a
//     }
// }
// console.log(sum(10)(20)(30)(40)());

// 35-dublicate string
let a="sagarr"
    let res = a.split("").filter((value, index, array) => {
        return array.indexOf(value) === index
    }).join("")
    console.log(res);




// -Object method///////////////////////////////////////////////////////////////////////
// 1-average age 
//  let obj = [
//         { name: "sagar", age: 24 },
//         { name: "rohit", age: 29 },
//         { name: "ram", age: 24 },
//         { name: "dhoni", age: 20 }
//     ]

// let data=obj.map(res=> res.age).reduce((acc,pre)=>acc+pre/obj.length)
// console.log(data);//average age of object
// let data2=obj.map(res=>res.age).reduce((acc,pre)=>acc>pre ?acc:pre)
// console.log(data2);//largest age and small age


//2-- largest price value///////////////////////////////////////////
// const products = [
//   { name: 'Laptop', price: 800 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
// ];

// let rt=products.reduce((max,may)=>may.price >max.price ? may:max)
// console.log(rt);

//--3--- merge all product but not same product

// const store1Products = [
//     { name: 'Laptop', price: 800 },/////////////////////////////////////////////////////////////
//     { name: 'Phone', price: 500 },
// ];

// const store2Products = [
//     { name: 'Phone', price: 450 },
//     { name: 'Tablet', price: 300 },
// ];

// let p=[...store1Products,...store2Products].reduce((uniqe,id)=>{
//     if(!uniqe.some(p=>p.name===id.name)){
//         uniqe.push(id)
//     }
//     return uniqe
// },[])
// console.log(p);

//----4-----------Calculating Object Property Sum:

// const expenses = [/////////////////////////////////////////////////////////////////////////////
//     { category: 'Food', amount: 50 },
//     { category: 'Transport', amount: 30 },
//     { category: 'Food', amount: 20 },
// ];

// let count = expenses.reduce((acc, value) => {
//     acc[value.category] = (acc[value.category] || 0) + value.amount
//     return acc
// }, {})
// console.log(count);


//----5-----------Finding Common Property:

// const users1 = [/////////////////////////////////////////////////////////////////////////////////////////
//   { name: 'Alice', email: 'alice@example.com' },
//   { name: 'Bob', email: 'bob@example.com' },
// ];

// const users2 = [
//   { name: 'Charlie', email: 'charlie@example.com' },
//   { name: 'Bob', email: 'bob@example.com' },
// ];

// let ress=users1.map(na=>na.email)
// .filter(email=>users2.some(p=>p.email===email))
// console.log(ress);


//-------6----------Replacing Object Property:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//     { title: 'Book 1', author: 'Author 1', year: 1990 },
//     { title: 'Book 2', author: 'Author 2', year: 2005 },
//   ];

//   let rep=books.map(res=>({
//     ...res,
//     author:res.year<2000 ? "Anonomous":res.year
//   }))
//   console.log(rep);


// /----7-----------Object Property Manipulation:
// const employees = [
//   { name: 'Alice', salary: 50000 },////////////////////////////////////////////////////////////
//   { name: 'Bob', salary: 60000 },
// ];

// const salaryIncreasePercentage = 10;
// let ress=employees.map((res)=>({
//     ...res,
//     salary:res.salary*(1+salaryIncreasePercentage/100)
// }))
// console.log(ress);

//  return method
// let cv=employees.map((res)=>{
//     return res.salary*(1+salaryIncreasePercentage/100)

// })
// console.log(cv);


// ---------8------------- const array = [1,3,12,4,5,67,8,10];
// let red=(array,a)=>{
// let fin=array.indexOf(a) 
// if(array.includes(a)){
//     return `element found of ${a} in index ${fin}`
// }else{
//     return `element not found ${a}`
// }
// }
// console.log(red(array,121));

// /-------9----------- all array in singale array in an array of object-------------------------------

// const objectss = [/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   { name: "ashit", books: ["abc", "cde", "def"] },
//   { name: "anil", books: ["pqr", "cde", "rst"] },
//   { name: "sagar", books: ["abc", "cde", "xyz"] }
// ];


//  let con=objectss.reduce((acc,arr)=>{
//     return acc.concat(arr.books)
//  },[])
//  console.log(con);


//----10------- filter element
// const objects = [///////// ///////////////////////////////////////////////////////////////////////
//   { name: "ashit", books: ["abc", "cde", "def"] },
//   { name: "anil", books: ["pqr", "cde", "rst"] },
//   { name: "sagar", books: ["abc", "cde", "xyz"] }
// ];

// let findAllBooks = objects.reduce((acc,arr)=>{
//   return acc.concat(arr.books)
// },[])
// let filterOfAllDuplicate = findAllBooks.filter((val,ind,array)=>{
//   return array.indexOf(val) === ind;
// })
// let secondMethod = [... new Set(findAllBooks)];
// console.log(filterOfAllDuplicate)


//11-------You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.
//  In how many distinct ways can you climb to the top?

// const climbStairs = (n) => {
//     if (n === 0 || n === 1) {
//       return 1;
//     }

//     const dp = new Array(n + 1);
//     dp[0] = 1;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//       dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
//   };

//   const steps = 10; // Example: 5 steps
//   console.log(`Number of ways to climb ${steps} stairs: ${climbStairs(steps)}`);


//12---------Object Property Frequency find out
// const votes = [////////////////////////////////////////////////////////////////////////////////////////////////////////
// { candidate: 'A' },
// { candidate: 'B' },
// { candidate: 'A' },
// { candidate: 'C' },
// { candidate: 'B' },
// ];

// let fre=votes.reduce((acc,arr)=>{
//     acc[arr.candidate]=(acc[arr.candidate] ||0)+1
//     return acc
// },[])
// console.log(fre);


//13----------- Filtering and Mapping:////////////////////////////////////////////////////////////////////////
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 16 },
//   { name: 'Charlie', age: 20 },
// ];

// let dd=people.filter(res=>res.age>=20)
// console.log(dd);


//14------------ const products = [//////////////////////////////////////////////////////////////////////////////////////////
//   { name: 'Laptop', price: 800 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
// ];

// let sor=products.sort((a,b)=>a.price-b.price)
// console.log(sor);

// 15----------------//Grouping Objects:
// const students = [//////////////////////////////////////////////////////////////////////////////////////////
//   { name: 'Alice', grade: 'A' },
//   { name: 'Bob', grade: 'B' },
//   { name: 'Charlie', grade: 'A' },
// ];

// const groupedStudents = students.reduce((result, student) => {
//   if (!result[student.grade]) {
//     result[student.grade] = [];
//   }
//   result[student.grade].push(student.name);
//   return result;
// }, {});

// console.log(groupedStudents)


//----16--------------- const books = [
//       { title: 'Book 1', author: 'Author 1', year: 1990 },
//       { title: 'Book 2', author: 'Author 2', year: 2005 },
//     ];

//     let vm=books.map((res)=>({
// ...res,
// author:res.year >2000 ? "anonomus":res.author
//     }))
//     console.log(vm);



 

















