// 콜백 함수 : 매개변수(파라미터)로 함수를 전달하는 함수

let number =[1, 2, 3, 4, 5];

number.forEach(function(x) {
  console.log(x*2);
})


const 테스트 = function (콜백함수) {
  콜백함수(10)
}

const 함수 = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
}
테스트(함수) //10번째 안녕하세요



const test = function (callback) {
  for(let i = 0; i <5; i++){
  callback(i)
  }
}

const apple = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
}
test(apple) //0번째 안녕하세요, 1번째 안녕하세요, 2번째 안녕하세요, 3번째 안녕하세요, 4번째 안녕하세요



const book = function (배열, 미니언즈) {
  for (const 값 of 배열){
    미니언즈(값)
  }
}

const 짱구 = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
}
book([52, 273, 103, 32], 짱구) //52번째 안녕하세요, 273번째 안녕하세요, 103번째 안녕하세요, 32번째 안녕하세요



const 배열 = [52, 273, 103, 57]
배열.forEach(function(value, index, array){
  console.log(value, index, array)
}) //52 0 (4) [52, 273, 103, 57], 273 1 (4) [52, 273, 103, 57], 103 2 (4) [52, 273, 103, 57], 57 3 (4) [52, 273, 103, 57]



const 배열2 = [52, 273, 103, 57]
console.log(배열2.filter(function(value, index){
  return true
})) //(4) [52, 273, 103, 57]

console.log(배열2.filter(function(value, index){
  return false
})) //[]


let 배열3 = [273, 52, 103, 32, 57]
배열3 = 배열3.filter(function (value, index){
  return value % 2 === 0
})
console.log(배열3) //(2) [52, 32]



let 배열4 = [273, 52, 103, 32, 57]
배열4 = 배열4.map(function (value, index){
  return value + "!!"
})
console.log(배열4) //(5) ['273!!', '52!!', '103!!', '32!!', '57!!']


// #화살표 함수 (매개변수) => {본문}
let 배열5 = [273, 52, 103, 32, 57]
배열5 = 배열5.filter((value, index) => value % 2 === 0)
console.log(배열5) //(2) [52, 32] = 배열3과 같은 식이다.