// console.log("hello world");

// var a=10; //redeclare,reinitialize  //global scope
// console.log(a);

// let b=20; //Cannot be redeclared in same scope //block scope
// console.log(b)   //Can be updated

// const c=30; //Cannot be redeclared  //block scope
//            //Cannot be reassigned
// console.log(c);

// //primitive,non primitive data types
// //
// var a=10;
// var str="nan" // '' // '' //string
// var bool = true; //boolean
// var un; //undefine
// var nu = null; //null
// var big=123456789n;
// var symbol=Symbol("hi");
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);


//operators

// //arithmetic(+,-,*,/,%)
// var a=10
// var b='20'
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// //relational operators(<,<=,>,>=,==,!=,===,!==)
// var a=10
// var b=20
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a==b)  //checks value
// console.log(a!=b)  //checks value
// console.log(a===b) //checks datatype and value
// console.log(a!==b)  //checks datatype and value

// //logical (&&,||,!)

// a=true
// b=false
// console.log(a&&b);
// console.log(a||b);
// console.log(!b);

// //arrays

// var arr=[1,2,3,4]
// console.log(arr);
// console.log(typeof arr);

// var obj={
//          name:"viky",
//          age:24
// }
// console.log(obj)
// console.log(typeof obj)

// //looping statements

// //for loop
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

// //while loop
// let i=1
// while(i<=10){
//     console.log(i);
//     i++
// }

// //do while
// i=1
// do{
//     console.log("do...while");
// }
// while(i===0)

// //even number
// for(let i=1;i<=10;i++)
// {
//     if(i%2==0) console.log(i);
    
// }

// //condition statements(if,else if, else)
// let m=70
// if(m>=90) console.log("o grade");
// else if(m>=80) console.log("A grade");
// else if(m>=70) console.log("B grade");
// else console.log("Fail");

// //switch case

// let day=6;
// switch(day)
// {
//     case 1:{ console.log("sunday");
//     break}
//     case 2:{ console.log("monday");
//     break}
//      case 3:{ console.log("tuesday");
//      break}
//       case 4: {onsole.log("wednesday");
//       break}
//        case 5: {console.log("thursday");
//        break}
//         case 6: {console.log("friday");
//         break}
//          case 7: {console.log("saturday"); 
//          break}
//          default:
//             { 
//                console.log("invalid input");
//                break
               
//             }
// }


// //ternary operator
// i=8
// let result=(i%2==0)?"even":"odd";
// console.log(result);

// m=80
// let r=(m>=90)?"A":(m>=80)?"B":(m>=70)?"c":"fail"
// console.log(r);

// function add()
// {
//     console.log(10+20);
    
// }
// add()
// //arrow function
// var add=(a,b) =>{
//     console.log(a+b);
// }
// add(10,50)

// var arr1=[10,20,30]
// var arr2=[...arr1,40,50,60]
// console.log(arr2);


// //destructing operator
// var [m1,m2,m3,m4,m5]=[89,90,99,96,87]
// console.log(m1)
// console.log(m2)
// console.log(m3);
// console.log(m4);
// console.log(m5);



// var{
//     name,age,dept,marks
// }={
//     name:"vikram",
//     age:24,
//     dept:['cs','ds'],
//     marks:{
//         mern:90,
//         java:54,
//         c:54
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(marks);





// let arrr = [10,20,30,40];
// for(let i in arrr)
// {
//     console.log(i,arrr[i]);
// }


// var obj={
//     name:"vikram",
//     agee:24

// }

// //for ... in

// for(let i in obj)
// {
//     console.log(i,obj[i]);
    
// }

// // for..of 

// for(let val of arrr){
//     console.log(val);
// }

// //map

// let ar=[1,2,3,4]
// var double_array=ar.map((i)=>(i*3))
// console.log(double_array);


// //filter
// var even=ar.filter((i)=>(i%2===0))
// console.log(even);


// //reducer
// var total=ar.reduce((sum,i)=>(sum+i),0)
// console.log(total);


// //sum
// var total_sum=arrr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0)
// console.log(total_sum);



// //prime
// var n=7
// var flag=true
// if(n<=1) flag=false
// else{
//     for(let i=2;i<=n/2;i++){
//         if(n%i===0)
//         {
//             flag=false
//             break
//         }
//     }
// }
// console.log(flag?"prime":"not prime");


// var name="vikram";
// console.log(`my name is ${name}`);

// ar.forEach((value,index)=>{
//       console.log(index,value);
      
// })

// var add=(a,b,callBack)=>{
//     var result=a+b
//     callBack(result)
// }
// add(10,20,(res)=>{console.log(res)})

// var main=(callBack)=>{
//     console.log("I am main");
//     callBack()
// }
// var demo =()=>{
//     console.log("I am callBack");
    
// }
// main(demo)



// //promise
// var promise= new Promise((resolve,reject)=>{
//     var success = true
//     if(success){
//         setTimeout(()=>
//             {
//              resolve("promise resolved"),5000
//             })
//     }
//     else{
//         reject("promise rejected")
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// const getData=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))




const getData=async()=>{
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/posts")
        var data=await res.json()
        console.log(data);
        
}
catch(err)
{
      console.log(err);
                 
}
}
getData()


