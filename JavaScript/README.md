## 변수(형, type)
- **Array**(배열) 
  * 형태 : `['하나', '둘', '셋'], [100, 200, 300]`
  * 호출 : `변수명, 변수명[0], 변수명[0][0] (변수명[index])`
- **String**(문자열)
  * 형태 : `'abcde', "abcde",｀abcde｀`
  * 호출 : `변수명, 변수명[0] (변수명[index])`
  * 문자열로 만들기 : `+ ''`를 붙임. 예시) `3 + ''`, `[1, 2] + ''`
- **Number**(숫자)
  * 형태 : 10, 10.123
  * 호출 : 변수명
  * 일반적 숫자 뿐 아니라, `Infinity`, `-Infinitiy`, `NaN`이 '특수 숫자값'으로 포함됨.
- **Boolean**(논리값)
  * 형태 : `true`, `false`
  * 호출 : 변수명
- **Object**(객체)
  * 형태 : ``{
              "지역이름": "전국",
              "확진자수": 24889,
              "격리해제수": 23030,
              "사망자수": 438,
              "십만명당발생율": 48.0
            }``
  * 호출 : `변수명`, `변수명.지역이름`, `변수명['지역이름']` (`변수명.key`, `변수명[key]`)
- **undefine** : undefind
- **null** : object

## 산술연산(+, -, /, *, , %)
## 논리연산(!, &&, ||)
## 비교연산(==, !=, >, >=, <, <=, ===, !==)
## 조건문(if, else if, else, switch)
## 반복문(for, for in, for of, while, do while, forEach, break, continue)
### for문
``` javascript
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```
``` javascript
let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
} // 결과 : [10, 20, 30, 40]

for (let i in a) {
    console.log(i);
} // 결과 : [1, 2, 3, 4]

a.forEach(e => console.log(e**2));
// 결과 : [100, 400, 900, 1600]

```

 * (실습)**평균 계산하기**
   * `parseInt()` : 문자를 숫자로 바꿔줌.
```js
let data = '3, 4, 10, 12, 16'.split(',')
data // ['3', '4', '10', '12', '16']
let 합계 = 0
for (let i of data) {
    합계 += parseInt(i);
}
console.log(합계/data.length)
```

### while문
``` javascript
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}


let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)

```
 * (실습) **구구단 만들기**
``` javascript
let i = 2
let j = 1
while (i < 10) {
if (i == 5){
    break;
  }// 구구단 4단까지만 나오게 함
    document.write(`${i} X ${j} = ${i*j} <br>`);
    j++
    if (j == 10) {
        i++
        j = 1
    }
}

```
### break와 continue
``` javascript
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
}

for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
```

## 함수
### 기본함수
 * **함수 선언문**
```js
function add(x, y){
    return x + y;
}

add(3, 5) // 8
```

 * **함수 표현식**
```js
let add = function(x, y){
    return x + y;
}

add(3, 5) // 8
```

|단어|번역|의미|상단 예시|
|------|---|---|:---:|
|parameter|매개변수|함수와 메서드 입력 변수(variable)의 이름|`x`, `y`
|argument|(전달)인자|함수와 메서드의 입력 값(value)|`3`, `5`
* 함수를 **파**라미터로 **선**언하고 **아**규먼트로 **실**행한다!

```js
function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);  // 30
//함수에서 정의되었다 하더라도, 아규먼트가 우선함

add(10);  // 210
add();  // 300

```
> 호이스팅은 자동적으로 자바스크립트 엔진이 읽어 올때 됩니다. 아래 2가지 차이가 크다고 할 수 있는데, 나중에 호이스팅이랑 클로저 배우시면 좀더 수월하실거 같네요. <br> <br>💡 **함수 선언문**으로 선언된 함수는 함수 호이스팅이 발생한다. 런타임 이전에 함수 객체가 생성이 되므로 함수가 정의되기 전에 함수를 호출할 수 있다.  미리 함수 호출해도 가능, 클로저 상황에 많이 사용. <br> <br>💡 **함수 표현식**으로 선언된 함수는 변수 호이스팅이 발생하며, undefined로 초기화된다. 그러므로 함수 표현식으로 선언한 함수는 함수가 정의되기 전에 함수를 호출할 수 없다.


### 콜백함수
```js
function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function cal(a, b){
    return a(10, 10) + b(10, 10);
}

cal(add, mul);
```

### 화살표함수
```js
function add(x, y) {
    return x + y
}

let addArrow = (x, y) => x + y;
```

#### map()
```js
let array = [1, 4, 9, 16];

값1 = array.map(x => x * 2);
값1 // [2, 8, 18, 32]

function 제곱(x) {
    return x ** 2
}

값2 = array.map(제곱);
값2 // [1, 16, 81, 256]

값3 = array.map(x => x**0.5)
값3 // [1, 2, 3, 4]

값4 = array.map(x => x**0.5).map(x => x**3)
값4 // [1, 8, 27, 64]
```

```js
let data = [{
    반: 1,
    번: 1,
    이름: "Jimin",
    중간고사점수: 55
},{
    반: 1,
    번: 2,
    이름: "Jungkook",
    중간고사점수: 60
},{
    반: 1,
    번: 3,
    이름: "Taehyung",
    중간고사점수: 30
},{
    반: 1,
    번: 4,
    이름: "Jin",
    중간고사점수: 20
},{
    반: 1,
    번: 5,
    이름: "Jay",
    중간고사점수: 100
}]

data.map(x => x.중간고사점수)  // [55, 60, 30, 20, 100]
data.map(x => x.중간고사점수 * 3)  // [165, 180, 90, 60, 300]
data.map(x => [x.이름, x.중간고사점수])  // [['Jimin', 55], ['Jungkook', 60], ... ['Jay', 100]]

let s = 0;
data.map(x => x.중간고사점수).forEach(y => s += y)
```

#### filter()
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);  // 6글자를 초과
console.log(result);  // ['exuberant', 'destruction', 'present']
```

```js
let number = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
const result = number.filter(i => i > 5);
console.log(result);  // [6, 8, 9]
```

### 기명함수
```js
let aa = function sum(x, y) {
    return x + y
}

// 익명 함수인것 같지만 바뀜
let bb = function(x, y) {
    return x + y
}
// ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
let cc = (x, y) => x + y;
```

### 익명함수
```js
console.dir(function (a,b) {
    return a+b
    }
    )
```

### 재귀함수
 - 종료 조건 체크
 - 반복문으로 구현 가능한 것은 재귀함수로 모두 구현 가능하나, 재귀함수로 구현 가능한 것은 반복문으로 대부분 구현 가능
```js
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)  // 재귀함수, 자기가 자기 함수를 불러옴
}

// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1

// 따라서 factorial(5) == 120
```

```js
function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)  // 재귀함수, 자기가 자기 함수를 불러옴
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1

// 따라서 sigma(5) = 15
```

```js
function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0] // .slice(n) n번째부터 끝까지의 문자열 + 0번째 문자열
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'
```

``` js
// 피보나치
// 1, 1, 2, 3, 5, 8, 13, 21

function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2

//////////////////////////////////////////

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1) /// 3항연산자 : ? true일 때 : false일 때
  return fibo_cache[n]
}
```

### 즉시실행함수
 1. 즉시 실행하고 외부에서 컨트롤 할 필요가 없는 함수
 2. function scope, 메모리 효율을 위해 사용
```js
// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());


// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());
```


## 선언
 * ``js let x`` : 변수로 사용하세요.
 * ``const x`` : 변하지 않는 상수값
 * ``var x`` : 전역에서 사용할 변수값, **실무에서 되도록 사용하지 않을 것!**

## 전개표현식 사용
``` javascript
function add(...x){
    return x;
}

add(1, 2, 3, 4, 5)
```
## 블록스코프
``` javascript
if (true){
    let what = 100;
}
console.log(what); // not defined error
// 안에서 선언된 변수는 일종의 지역변수
```

## 정규표현식
 * 텍스트의 특정 패턴을 찾아내는 목적
 * https://regexr.com/5nvc2

## 리터럴
 * 리터럴은 코드에 보여지는 타입의 표현을 의미
 * 원래 배열을 생성하려면 ``new Array(4,5,6);``로 작성해야 하나, ``[4,5,6]``로 표현하는 배열
 * 마찬가지로 ``new Object()`` 의 리터럴 표현은 ``{}``
 * ``new Number(5)``의 리터럴 표현은 ``5``
 * ``new String("hello")``의 리터럴 표현은 ``"hello"``


## 상호작용
```js
prompt('hello?') // 'hi'
comfirm() // VM188:1 Uncaught ReferenceError: comfirm is not defined
confirm('hi')  // true
alert('hello')  // undefined
```

## new Date()
 * **주의** : 월(month)는 0부터 시작. `1월 = 0, 2월 = 1`
 ```js
 let d = new Date();
 d  // Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시)
d.getFullYear()  // 2021
d.getMonth() // 11
d.getDate()  // 1
d.getDay()  // 3
// 일요일부터 0

d.getHours()  // 10
d.getMinutes()  // 35
d.getSeconds()  // 1
d.getMinutes()  // 35

```

## Array

```js
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나']
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');

과일[0] // '사과'
과일[0] = '귤'
과일 // ['귤', '수박', '복숭아', '딸기', '바나나']

과일[1][0]  // '수'
과일[1][0] = '불'
과일[1]  // '수박'
// Array는 변수[인덱스] = '' 꼴로 값을 바꿀 수 있지만, 요소의 일부를 바꾸지는 못한다.
```

### pop(), push()
```js
과일 = [‘사과’, ‘수박’, 복숭아’, ‘딸기’, ‘고구마’]

과일.pop() // [‘사과’, ‘수박’, 복숭아’, ‘딸기’] // 맨 뒤에서 빼기
과일.push(‘한라봉’) // [‘사과’, ‘수박’, 복숭아’, ‘딸기’, ‘한라봉’] // 맨 뒤에 넣기
과일.join('냠냠') // '사과냠냠수박냠냠복숭아냠냠딸기냠냠오렌지'
```

### slice(), splice()
```js
과일 = ['참외', '사과',  '수박', '복숭아', '딸기', '오렌지']
과일.slice(2,4);  // ['수박', '복숭아']

과일.splice(2,3);  // index가 2인 값부터 3개의 값
과일 = ['수박', '복숭아', '딸기']  // 과일이란 변수의 array가 아예 변경됨.

```

### concat()
 * array 변수를 합침. 다만 기존 변수를 바꾸는 것은 아니므로, 필요하다면 별도의 변수 지정해야 함.
```js
let 과일 = ['참외', '사과', '오렌지'];
let 제주과일 = ['귤', '한라봉', '천혜향'];

과일.concat(제주과일); // ['참외', '사과', '오렌지', '귤', '한라봉', '천혜향']
과일 // ['참외', '사과', '오렌지']
제주과일 // ['귤', '한라봉', '천혜향']
```

### sort()
 * `.sort()`는 기본적으로 사전식 정렬
```js
let data = [10, 20, 30, 11, 22, 25]
data.sort() // [10, 11, 20, 22, 25, 30]

data.push(111)
data.sort() // [10, 11, 111, 20, 22, 25, 30]
```

 * 오름차순/내림차순 정렬
```js
data.sort((a,b) => a-b) // 오름차순 [10, 11, 20, 22, 25, 30, 111]
data.sort((a,b) => b-a) // 내림차순 [111, 30, 25, 22, 20, 11, 10]
```



## Object
```js
let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
}
```
 - object 값 불러오는 방법
   * ``person.name // '이호준' ``
   * ``person['name'] // '이호준' ``
   * ``person.이력.첫번째직장 // '하나'``
   * ``person['이력']['첫번째직장'] // '하나'``

### Object.keys(), .values(), .entries()

* object의 key만 array로 가져오기
```js
Object.keys(person) // ['name', 'age', 'height', 'weight', '이력']
```

* object의 value만 array로 가져오기
```js
Object.values(person) // ['이호준', 10, 30, 40, {첫번째직장: '하나', 두번째직장: '둘'}]
```

* object의 key와 value를 array의 array로 묶어서 가져오기
```js
Object.entries(person) // [['name', '이호준'], ['age', 10], ... , ['이력': {첫번째직장: '하나', 두번째직장: '둘'}]]
```

* (실습)**object 출력**
```js
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

///
name: 이호준
age: 10
height: 30
weight: 40
이력: [object Object]
```

