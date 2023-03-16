function isFibonacci(number){
     let fib = Boolean
     let testOne = 5 * number * number + 4
     let testTwo = 5 * number * number - 4

     let sqrtOne = parseInt(Math.sqrt(testOne))
     let sqrtTwo = parseInt(Math.sqrt(testTwo))

     if(sqrtOne * sqrtOne == testOne || sqrtTwo * sqrtTwo == testTwo){
          fib = true
     }
     if(fib == true){
          console.log(`O número ${number} pertence a sequencia de Fibonacci`)
     }else{
          console.log(`O número ${number} não pertence a sequencia de Fibonacci`)
     }

}
let number = 5
isFibonacci(number)


