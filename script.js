// class Calculator{
//     Numbers(x){
//         if(this.num1 != undefined && this.op != undefined){
//             if(this.num2 == undefined) {
//                 this.num2 = "";
//             }
//             this.num2 += x;
//         }
//         else{
//             if(this.num1 == undefined) {
//                 this.num1 = "";
//             }
//             this.num1 += x;
//         }
//         this.Display();
//     }
//     Decimal(x){
//         if(this.num1 != undefined && this.op != undefined){
//             if(this.num2 != undefined) {
//                 if(!this.num2.includes(".")){
//                     this.num2 += x;
//                 }
//             }
//         }
//         else{
//             if(this.num1 != undefined) {
//                 if(!this.num1.includes(".")){
//                     this.num1 += x;
//                 }
//             }
//         }
//         this.Display();
//     }
//     Operator(op){
//         if(this.num1 != undefined){
//             if(this.op != undefined && this.num2 != undefined){
//                 this.Equals();
//             }
//             this.op = op;
//             this.Display();
//         }
//     }
//     Equals(){
//         if(this.num1 != undefined && this.op != undefined && this.num2 != undefined){
//             this.num1 = eval(this.num1 + this.op + this.num2);
//             // console.log(this.num1);
//             this.op = undefined;
//             this.num2 = undefined;

//             this.Display();
//         }
//     }

//     BackSpace(){
//         if(this.op == undefined){
//             //num1
//             if(this.num1.length > 0){
//                 this.num1 = this.num1.substring(0,this.num1.length-1);
//             }
//         }
//         else{
//             //num2
//             if(this.num2.length > 0){
//                 this.num2 = this.num2.substring(0,this.num2.length-1);
//             }
//         }

//         this.Display();
//     }
//     Reset(){
//         this.num1 = undefined;
//         this.op = undefined;
//         this.num2 = undefined;
//         this.Display();
//     }
//     Display(){
//         var text = "";
//         if(this.num1 != undefined){
//             text = this.num1;
//             if(this.op != undefined){
//                 text += " " + this.op;
//                 if(this.num2 != undefined){
//                     text += " " + this.num2;
//                 }
//             }
//         }
//         $('#display').text(text);
//     }
// }

// var Calc = new Calculator();

// $('button[data-Type=number]').click(function(){
//     Calc.Numbers($(this).text());
// });
// $('button[data-Type=decimal]').click(function(){
//     Calc.Decimal($(this).text());
// });
// $('button[data-Type=operator]').click(function(){
//     Calc.Operator($(this).text());
// });

// $('button[data-Type=equals]').click(function(){
//     Calc.Equals();
// });
// $('button[data-Type=reset]').click(function(){
//     Calc.Reset();
// });
// $('button[data-Type=backspace]').click(function(){
//     Calc.BackSpace();
// });



// // $('.book button').click(function(){
// //     var opinion = $(this).attr("data-Opinion");
// //     // console.log("book " + opinion);
// //     $current = $('.book.active');
// //     $next = $current.next();
    
// //     if($next.length == 0){
// //         // $next = $('.book').first();
// //         // $next = $('.book').eq(0);
// //         $next = $('.book:first-of-type');
// //         // $next = $('.book:first-child');
// //     }

// //     $current.removeClass("active");
// //     $next.addClass("active");
// // });

// // class Calculator2{
// //     constructor(){
// //     }
// //     // a
// //     // b
// //     // op
// //     calc(){
// //         // if(this.op == "+"){
// //         //     console.log(a+b);
// //         // }
// //         // else if(this.op == "-"){
// //         //     console.log(a-b);
// //         // }
// //         // else if(this.op == "*"){
// //         //     console.log(a*b);
// //         // }
// //         switch(op){
// //             case '+':
// //                 console.log(a+b);
// //                 break;
// //             case '*':
// //                 console.log(a*b);
// //                 break;
// //             case '-':
// //                 console.log(a-b);
// //                 break;
// //         }
// //     }
// // }

// function perfect(x){
//     var soma = 0;
//     for(var i=0;i<x;i++){
//         if(x % i == 0) {
//             soma += i;
//         }
//     }
//     if(soma == x){
//         console.log(x + " é um número perfeito");
//     }
// }





// function DecimaltoBinary(number){
//     var result = "";
//     while(number >= 1){
//         // if(number % 2 == 0){
//         //     result += 0;
//         // }
//         // else{
//         //     result += 1;
//         // }
//         result += number % 2;

//         number = Math.trunc(number / 2);
//         //console.log(number);
//     }
//     result = result.split("").reverse().join("");
//     console.log(result);

// }
//DecimaltoBinary(2);





// function BinarytoDecimal(numbers){
//     numbers = numbers.toString();
//     numbers = numbers.split("").reverse();
//     var sum = 0;
//     numbers.forEach(function(valor,index){
//         sum += valor * (2 ** index);
//     });
//     console.log(sum);
// }




// BinarytoDecimal(100)




























// function DecimaltoBinary(x){
//     var result = "";
//     while(x >= 1){
//         result += (x % 2);
//         x = Math.trunc(x/2);
//         //console.log("x = " + x);
//     }
//     //result = result.split("").reverse().join("");
//     console.log(result);
// }


// DecimaltoBinary(3);












// function BinarytoDecimal(x){
//     var numbers = x.toString().split("").reverse();
//     var sum = 0;
//     numbers.forEach(function(number,index){
//         //console.log("number = " + number + "| index = " + index);
//         sum += number * (2**index);
//     });
//     console.log(sum);
// }
//BinarytoDecimal(101);



// var x = "dog";

// var combinations = [];

// function combine(toCombine,index){
//     for(var i = index; i < x.length; i++){
//         console.log(i);
//         toCombine += x[i];
//         combinations.push(toCombine);
//         combine(toCombine,index+1);
//         //toCombine = toCombine.substr(0,toCombine.length-1);
//     }
// }
// combine("",0);

// console.log(combinations);

// var combinations = [x];
// x = x.split("");

// x.forEach(function(v, i){
//     combinations.push(v);
//     x.forEach(function(v2, i2){
//         if(i == i2) return;
        
//         if(combinations.indexOf(v+v2) == -1 && combinations.indexOf(v2+v) == -1){
//             combinations.push(v + v2);
//         }
//     });
// });


// console.log(combinations);








// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// var x = "dog";

// var combinations = [x];

// x = x.split("");

// x.forEach(function(v1,i1){
//     combinations.push(v1);
//     x.forEach(function(v2,i2){
//         if(i1 == i2) return;
//         if(combinations.indexOf(v1+v2) == -1 && combinations.indexOf(v2+v1) == -1){
//             combinations.push(v1+v2);
//         }
//     });
// });
// console.log(combinations);


// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// var x = 'webmaster';

// x = x.split("");

// for(var i1 = 0; i1<x.length;i1++){
//     for(var i2 = 0; i2<x.length;i2++){
//         if(i1==i2) continue;
//         if(x[i1] < x[i2]){
//             var temp = x[i1];
//             x[i1] = x[i2];
//             x[i2] = temp;
//         }
//     }
// }
// console.log(x.join(""));



// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// var x = 'the quick brown fox';

// x = x.split(" ");

// x.forEach(function(v,i){
//     x[i] = v[0].toUpperCase() + v.substr(1,v.length);
// });

// console.log(x.join(" "));







// Write a JavaScript program to reverse the elements of a given array of integers length 3.


// var x = [3,5,9];
// var y = [];
// for(var i = x.length-1; i>=0; i--){
//     y.push(x[i]);
// }
// console.log(y);

// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.


// var x = [3,5,9,1,4,6,7];
// var y = [];

// for(var i = 1; i<x.length; i++){
//     y.push(x[i]);
// }
// y.push(x[0]);
// console.log(y);

//com número varíavel para rodar

// var x = [3,5,9,1,4,6,7];
// var y = [];
// var rotate = 3;

// for(var i = rotate; i<x.length; i++){
//     y.push(x[i]);
// }

// for(var i = 0; i<rotate; i++){
//     y.push(x[i]);
// }

// console.log(y);


// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function isPrime(number){
//     if(number <= 1 ){
//         console.log("não é número primo");
//         return;
//     }
//     for(var i = 2;i<number;i++){
//         if(number % i != 0){
//             console.log("não é número primo");
//             return;
//         }
//     }
//     console.log("número primo");
// }

var book1 = {
    name:"",
    img:"",
    links:[
        {
            text:"link1",
            url:"link1"
        },
        {
            text:"link2",
            url:"link2"
        }
    ]
}
var book2 = {
    name:"",
    img:"",
    opinion: ""
}
var book3 = {
    name:"",
    img:"",
    descricao:"",
    // link:{
    //     text:"",
    //     url:""
    // }
    links:{
        0:{
            text:"",
            url:""
        },
        1:{
            text:"",
            url:""
        }
    }
}



class Library{
    constructor(){
        this.books = [book1,book2,book3];
        this.seenBooks = [];
        this.Load(this.books[0]);
    }
    Load(book){
        $(".book h1").text(book.name);
        $(".book img").attr("src",book.img);
        book.links.forEach(function(v,i){
            $(".book a").eq(i).text(v.text);
            $(".book a").eq(i).attr("href",v.url);
        });
    }
    NextBook(){
        this.seenBooks.push(this.books[0]);
        this.books.splice(0,1);
        this.Load(this.books[0]);
    }
}

var library = new Library();

$('.book button').click(function(){
    library.NextBook();
});