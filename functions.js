// // const person  = {
// //     id : 1,
// //     first_name : "aniket gore",
// //     phone_number : 958842,
// //     gmail : "goreaniket100@gmail.com"
// // };


// // // for in loop
// // // for(let i in person){
// // //     console.log(person[i]);
// // // }
// // // for of loop
// // for(let i of Object.keys(person)){
// //     console.log(person[i]);
// // }



// // spread operator 

// const person  = {
//     id : 1,
//     first_name : "aniket gore",
//     phone_number : 958842,
//     gmail : "goreaniket100@gmail.com"
// };

// const person2  = {
//     id : 2,
//     first_name : "sanket salunke",
//     phone_number : 958842,
//     gmail : "goreaniket100@gmail.com"
// };





// const new_object = {...person, ...person2};
// console.log(new_object);


// arrow functions 
// const three = (a, b,c) =>{
//     return a+b+c;
// }


// const ans = three(10,20, 30);
// console.log(ans);


// function fun(a, b, ...rest){
//     console.log(a, b, rest);
// }

// const res = fun(1,2,3,4,5,6,7,8,9);
// console.log(res);


// parameter destructuring 

// const person = {
//     name : "aniket",
//     gender : "male"
// };

// function print(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// };

// print(person);


// callback function

function call(name){
    console.log("hello this is callback");
    console.log(`${name}`);
};

function back(callback){
    callback("aniket");
}

back(call);
