// var x = 1;
// function test(
//     x,
//     y = function () {
//         x = 3;
//         console.log(x);
//     }
// ) {
//     var x;
//     function x() {
//         console.log(x);
//     }

//     console.log(x);
//     var x = 2;
//     y();
//     console.log(x);
// }
// test(111);
// console.log(x);
// function a(x = 1, y = 2) {
//     debugger;
//     var x = 22;
//     var x;
//     var y;
//     console.log(x);
//     var x = function x() {
//         console.log(y);
//     };
//     console.log(x);
// }
// a();
// function foo() {
//     //父作用域
//     var x;
//     var y = function () {
//         x = 2;
//     };
//     {
//         // 子块级作用域
//         let x = 3;
//         y();
//         console.log(x);
//     }
// }
//"use strict";
// function a(x, y = { m: 111, n: 22 }) {
//     console.log(this);
//     var y;
//     console.log(y);
//     y.m = 3;
//     console.log(arguments[1]);
//     // var y;
//     function y() {}
//     console.log(x, y);
// }
// a(1111, { m: 11, n: 22 });
//firefox
//1 找到所有的var 声明 2 如果有参数就在var里面赋值 3 最后找所有的function 声明, 有就覆盖参数数值
// var 参数 function
// function a(x = 1) {
//     debugger;
//     //var x;
//     // y;
//     console.log(x);
//     function x() {}

//     var x;
//     console.log(x);
// }
// a(5);
// var a = 1;
// (function a() {
//     a = 2;
//     console.log(a);
// })();
// console.log(a);
function a(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}
async function b() {
    console.log(789);
    let x = await a(1);
    console.log(x + 1);
    console.log(456);

    console.log(741);
}

b();
