## This
 * 함수를 호출한 객체
```js
aboutThis는 window 객체 안에 있는 메소드
/// aboutThis는 window 객체 안에 있는 메소드
```
```js
let myObj = {
  val1: 100,
  func1: function(){ console.log(this)}
}

myObj.func1();
```

 * (실습)
```js
let 호텔 = [{
  '이름' : '하나호텔',
  '위치' : '제주도 제주시 001',
  '가격' : {'A':50000, 'B':30000, 'C':15000},
  '방의개수' : 50,
  '예약자수' : 25,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '둘호텔',
  '위치' : '제주도 제주시 002',
  '가격' : {'A':100000, 'B':60000, 'C':30000},
  '방의개수' : 100,
  '예약자수' : 30,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '셋호텔',
  '위치' : '제주도 제주시 003',
  '가격' : {'A':80000, 'B':50000, 'C':30000},
  '방의개수' : 120,
  '예약자수' : 80,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
}];

호텔[0]['남은방의개수']() ///  25
호텔[0]['예약자수'] = 46
호텔[0]['남은방의개수']() ///  4
```

## Scope
* 전역 스코프
* 함수 스코프
* 블록 스코프 : ES6부터 새로 생긴 스코프

### 전역 스코프
 * 범위 : 어디서든 접근 가능함
```js
var example;

example;
function func() {
  example;
}
```

### 함수 스코프
 * 범위 : 함수 내에서만 접근 가능함
```js
function test() {
    var val1 = 'Hello World!';
    }
val1; // val1 is not defined
```

## Closure
 * 폐쇄된 함수 내의 데이터에 접근하기 위한 테크닉
 * 함수에 함수가 있을 경우, 자식은 부모 함수에 접근하지만 부모는 자식 함수에 접근하지 못함.
```js
function myFunc(){
//----클로져 ----
	var val1 = "hi"
	return val1 // return을 통해 함수의 외부에서 접근 가능
}
myFunc()
```
 * 클로저 함수 : 클로저에 접근할 권한을 갖는 함수.
```js
function myFunction(){
  var val1 = "hello";
  return { getVal1 : function(){return val1} }
            // getVal1의 value값인 함수를 클로저 함수
            // {key: value}에서 value가 함수면 key는 함수명
}
```

 * (실습) 함수에 응용 적용
```js
function 제곱(x) {
    function 승수(y) {
        return y ** x 
    }
    return 승수
}

제곱(2)(10)  /// 100

let 제곱2 = 제곱(2)
let 제곱3 = 제곱(3)
제곱2(10) /// 100
제곱3(10) /// 1000
```
 * 결론
   - 재사용성을 높이기 위해 closure의 속성을 이용하여 함수를 만든다.
   - **실무에선 closure를 미리 생각하고 코딩**을 한다.

## Array 채우기

```js
Array(100).fill(0).map((value,index) => value + index)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
```
```js
'.'.repeat(9).split('.')
// ['', '', '', '', '', '', '', '', '', '']

## Math
```js
Math.ceil(9.2) // 올림
// 10

Math.ceil(-9.2) // 올림(음수에서 주의)
// -9

Math.floor(9.2) // 버림
// 9

[Math.round(3.4), Math.round(3.7)] // 반올림
// [3, 4]

Math.max(1,2,3,4,5,10)
// 10

Math.min(1,2,3,4,5,10)
// 1

Math.min([1,2,3,4,5,10])
// NaN

Math.min(...[1,0.7,2,3,4,5,10]) // array로 넣을 때는 '...'을 앞에 넣는다
// 0.7
```

## reduce()
 * `reduce()`는 오래된 용법으로, 가능하다면 `forEach()` 등으로 대체하여 사용 권장.
```js
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current);

console.log(result) // 15

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum * current);
console.log(result) // 120
```

## 함수 심화
```js
const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100
```
```js
// 비교대상

const xx = 100;

function a() {
  const xx = 1;
  function b() {
      console.log(xx);
  }
  b();
}

a(); // 1
```
 * 결론
   -  변수는 함수 내부에서 선언해야 함!
   -  f(b)의 xx는 f(a)의 xx를 가르키고 있음


## get, set
```js
let user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullNameSet(value) {
        [this.name, this.surname] = value.split(" ");
    }
};


user.fullNameSet = "Soochul Son";

console.log(user.name) // Soochul
console.log(user.surname) // Son
user.fullName // Soochul Son
```
 * get : object의 property를 메서드나 함수 등으로 불러오기 위해
 * set : object를 만들기 위해


## class, prototype
### 객체지향 개발
```js
function 기계(구멍1, 구멍2){
    this.q = 구멍1;
    this.w = 구멍2;
// 새로운 object를 {q: 구멍1, w: 구멍2} 만들라는 뜻. 구멍1과 구멍2는 parameter.
}

var nunu = new 기계('consume','snowball');
var garen = new 기계('strike', 'fire');

nunu  //  기계 {q: 'consume', w: 'snowball'}
garen //  기계 {q: 'strike', w: 'fire'}
```
 * this : 함수로부터 생성되는 object. 이 결과물을 ``instance``라고 함.

### class
 * ES6 이후로 새롭게 등장한 문법
 * class의 이름은 **대문자**로 시작하는 것이 국룰
 * JavaScript는 단일상속만 가능. 한 자식이 둘 이상의 부모의 매서드를 상속 받지 못함.
```js
class Hero {
    constructor(구멍1, 구멍2){
        this.q = 구멍1;
        this.w = 구멍2;
    }
}

var nunu1 = new Hero('consume', 'snowball');
var garen1 = new Hero('strike', 'fire');

nunu1 //  Hero {q: 'consume', w: 'snowball'}
garen1 //  Hero {q: 'strike', w: 'fire'}
```

#### ‼️ forEach와 map의 차이점
```js
let fortest = [1,2,3,4].forEach(x=> x**2)
let maptest = [1,2,3,4].map(x=> x**2)

fortest // undefined
maptest // [1, 4, 9, 16]
```
 * ``forEach()``는 순회만 할 뿐 return을 하지 않음 (``undefined``)
 * ``map()``은 순회하고 return을 함

### prototype
 > prototype은 **유전자** 같은 것이다. ─ 애플코딩
```js
function 기계(구멍1, 구멍2){
    this.q = 구멍1;
    this.w = 구멍2;
}

기계.prototype //  {constructor: function 기계}

기계.prototype.name = 'kim'
nunu.name  // 'kim'
nunu  // 기계 {q: 'consume', w: undefined}
```
 * 부모 함수나 클래스에 prototype으로 부여되면, 자식 object도 동일한 key, value를 갖게 됨. 다만 자식 object를 직접 호출할 때는 보이지 않음. (부모에게 있는 것이기 때문에)

## 에러 핸들링
### try, catch, finally
 * `try`했는데 문제가 생기면 `catch`에서 에러가 나고, 어떤 상황이든 `finally`는 한다.
```js
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

## Promise()
 * 비동기적 실행
   - '**동기적 실행**'은 순차적으로 실행되고, '**비동기적 실행**'은 실행되고 있는 중 다른 것을 실행한다.
  
 > 세탁기 돌리고 끝날 때까지 가만히 있으면 **동기적 실행**<br>세탁기 돌아가는 동안 잡일을 하면 **비동기적 실행**
```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});
// Promise가 만들어지면 executor 함수는 자동으로 실행됩니다.
// 시간이 지나면 완료 신호가 전달되면서 result는 'done'이 됩니다.
// 세탁기 비유로 따지면, setTimeout은 세탁기

console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');
// 세탁기 비유로 따지면, 잡일


// hello world
// hello world2
// 끝남!
```

```js
let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    // reject('hello world');
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    throw Error("에러 발생!")
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});
```


## 캡처링, 버블링
 * 브라우저에서 이벤트가 발생할 때
   * 이벤트 대상을 찾아서, 최상위인 window 객체부터 document, body 순으로 DOM 트리를 따라 내려갑니다. 이를 **캡처링 단계**라고 합니다. 이때 중간에 만나는 모든 캡처링 이벤트 리스너를 실행시킵니다.

   * 이벤트 대상을 찾아 캡처링이 끝나면 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행합니다. 이를 **이벤트 버블링** 단계라고 합니다. 


## DOM 종합 실습

```js
const button = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');

['Python', 'Java', 'JavaScript', 'C#', 'C/C++'].forEach(lang => {
  // AdjacentHTML보다 createElement가 경제적임
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  // btn.appendChild(document.createTextNode(lang));
  btn.textContent = lang;
  // li.appendChild(btn);
  // list.appendChild(li); 합치기 가능
  list.appendChild(li).appendChild(btn);
});


button.addEventListener('click', e => e.currentTarget.classList.toggle('on'));

list.addEventListener('click', (event) => {
  if (event.target.nodeName === "BUTTON") {
      btn.textContent = event.target.textContent;
      btn.classList.remove('on');
  }
});
```

## TDD
 * **Test Drive Development** : 테스트를 통한 기능의 구현
  * https://jasmine.github.io/
```js
new Promise(function(resolve, reject) {

    setTimeout(() => reject('error'), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result + ' : 잘 수행!'); // 1
    return result + 'one';
    //////////// then은 성공적으로 이행했을 때의 명령
  }).catch(function(result) { // (***)
  
    alert(result + ' : 애러 발생!'); 
    return result + 'two';
    //////////// catch는 에러가 발생할 때의 명령
  }).then(function(result) {
  
    alert(result + ' : 잘 수행!'); // 4
    return result + 'three';
  
  });
```

 * promise는 백그라운드 => 태스크큐 => 호출 스택 순으로 실행
 * 이때 호출 스택이 비어있어야 가져올 수 있음
 * 비동기 함수는 콜스택에 넣지 않고 Web API에 먼저 보낸 다음에, Web API가 태스크 큐에 보내고 이를 콜스택으로 보냄
