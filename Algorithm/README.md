## 측정 방법
### 시간 복잡도
 * 얼마나 오랜 시간이 걸렸는가

### 계산 복잡도
 * 얼마나 많은 계산 과정이 있는가

#### Big O 표기법
 * O(n) : 필요한 계산 횟수가 입력 크기 n과 비례할 때
 * O(1) : 필요한 계산 횟수가 입력 크기 n와 무관할 때

### 공간 복잡도

## 코딩테스트
### 플랫폼
 * 프로그래머스 (카카오)
 * 구름EDU (네이버)
### 언어 선택
 * 속도 중심 : C++, 풀이 중심 : Python
 * Cheat sheet와 빈 A4 용지 미리 준비해야 함
### 라이브러리 예외처리
 * 예외 조건을 반드시 따져야 함
 ```js
 //  예시) 두 수의 합을 구하는 함수를 구현하시오.

 // 오답
 function add(x,y) {
     return x + y
 }
 // x와 y에 들어올 값에 예외처리를 해야 함.
 // 예컨대 파라미터에 문자가 들어올 경우 반환하지 않은 조치.
 ```

### 코딩테스트 코딩 속도 올리기
* 빈 배열 만들기
```js
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x
// [비어있음 x 2, undefined, null, 비어있음 x 6]
x.length = 20;
x

// Array(100).fill().map((..., i) = > i + 1)
Array(100).fill(1).map((value, index) => value + index);
'.'.repeat(10); // '..........'
'.'.repeat(10).split('.'); /// ['', '', '', '', '', '', '', '', '', '', ''] (11개)
Array.from('abc'); // ['a', 'b', 'c']

```
 * 문제) 1부터 100까지 8이 들어가는 숫자 갯수
```js
(Array(100).fill(1).map((value, index) => value + index)+''); // Array를 문자열로 바꿈 (+'')
(Array(100).fill(1).map((value, index) => value + index)+'').split('8').length - 1; // 8을 기준으로 split 해서 반환된 Array의 길이의 1을 뺀 값
```
 * 문제) Array 값의 차이의 최솟값 찾기
```js
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();

// 방법1
for (let i = 0; i < s.length-1; i++) {
    console.log(s[i+1], s[i])
    console.log(s[i+1] - s[i])
}

// 방법2
for (let i = 1; i < s.length; i++) {
    console.log(s[i], s[i-1])
    console.log(s[i] - s[i-1])
    arr.push(s[i] - s[i-1])
}
```
```js
// arr.indexOf(5)
// let result = arr.indexOf(Math.min.apply(null, arr));
// Math.min(...arr)

// 같은 코드
// 둘의 차이의 최솟값의 index값 찾기
let result = arr.indexOf(Math.min(...arr));
let result = arr.indexOf(Math.min.apply(null, arr));

console.log(s[result], s[result+1]);
```


# 기본 자료구조 및 알고리즘
## 1. 스택과 큐
```js
class Stack {
    constructor(){
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index=this.arr.length-1) {
        // index가 입력이 안되었을 때
        // index가 입력이 되었을 때
        if (index === this.arr.length-1){
            return this.arr.pop();
        }
        let result = this.arr.splice(index, 1);
        return result
    }
}


let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.pop();
console.log(s); // Stack {arr: [10, 20]}
```
## 2. 연결리스트(linked list)
 * https://visualgo.net/ko/list
```js
const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        // this d = data; 비효율적
        this.현재노드 = undefined;
        this.데이터수 = 0;
    }
    get fullData(){
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`)
    }
    length() {
        return this.데이터수;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }
    
    toString(){
        // return 'hello world';
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data},`
            순회용현재노드 = 순회용현재노드.next;
        }
        return s.slice(0, -1);
    }

    insert(index, data){
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data);
        // 2줄의 코드

        새로운노드.next = 순회용현재노드.next
        순회용현재노드.next = 새로운노드;
        this.데이터수 += 1
    }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.insert(3,11)
```
```js
JSON.parse('[1,2,3,4,5]')
```

## 3. 정렬
 * 선택정렬, 삽입정렬은 난이도가 낮고 인터넷 검색 내용으로 쉽게 접근 가능
 * 병합정렬, 퀵정렬은 비교적 까다로움. 주요 IT 기업 코딩테스트에서 출제되는 방식
### 선택정렬
```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬한배열 = [];

let 길이 = 입력값.length;

for (let i = 0; i < 길이; i++) {
    // 초보자들이 많이 하는 실수
    // for, while 등 반복문에선 공통되는 리소스를 최소화해야 한다.
    // Math.min(...입력값)를 변수에 담아 리소스 낭비를 방지하자.
    let MINVALUE = Math.min(...입력값);
    // 정렬한배열.push(Math.min(...입력값));
    정렬한배열.push(MINVALUE);
    // 입력값.splice(입력값.indexOf(Math.min(...입력값)), 1)
    입력값.splice(입력값.indexOf(MINVALUE), 1)
}
```
### 삽입정렬
 * 자기가 들어갈 위치를 찾아감. ``O(n**2)``
```js
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
    console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
}
```

### 병합정렬
 * **분할정렬**, mergesort, 분할정복
   * 쪼갤 수 없을 때까지 반으로 나눈 후 차례로 정렬
 * 가장 빠른 정렬 방식
 * 어레이를 1개 혹은 0개까지 분할하여 값 비교 후 더 작은 값을 새로운 어레이에 push하여 정복하는 과정을 반복하여 정렬하는 방법입니다. 

#### 원리
```js
// 최초값
[180, 173, 145, 165, 170, 45, 175, 171]

// 분할시작
[180, 173, 145, 165], [170, 45, 175, 171]
[180, 173], [145, 165], [170, 45], [175, 171]
[180], [173], [145], [165], [170], [45], [175], [171]
// 분할완료
// 정복시작
// 0번째 요소끼리 차례로 비교
// [180], [173] 중 작은 [173]이 먼저 들어감
[173, 180], [145], [165], [170], [45], [175], [171]
// [173], [145] 중 작은 [145]가 먼저 들어감
[145, 173, 180], [165], [170], [45], [175], [171]
// [145], [165] 중 작은 [145]가 먼저 들어감
[145]
// [173], [165] 중 작은 [165]가 먼저 들어감
[173, 180], [165], [170], [45], [175], [171]
[145, 165, 173, 180], [170], [45], [175], [171]
[145, 165, 170, 173, 180], [45], [175], [171]
[45, 145, 165, 170, 173, 180], [175], [171]
[45, 145, 165, 170, 173, 175, 180], [171]
[45, 145, 165, 170, 171, 173, 175, 180]
// 정복완료
```
#### 태그
```js
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

//STEP 1
function 병합정렬(입력배열) {
    let 입력배열길이 = 입력배열.length;
    if (입력배열길이 <= 1) {
        return 입력배열
    }
    let 중간값 = parseInt(입력배열길이/2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값)); // [5, 10, 66, 77]
    let 그룹둘 = 병합정렬(입력배열.slice(중간값)); // [54, 32, 11, 15]
}

//STEP2
function 병합정렬(입력배열) {
    let 입력배열길이 = 입력배열.length;
    let 결과값 = [];
    if (입력배열길이 <= 1) {
        return 입력배열
    }
    let 중간값 = parseInt(입력배열길이/2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값)); // [5, 10, 66, 77]
    let 그룹둘 = 병합정렬(입력배열.slice(중간값)); // [54, 32, 11, 15]

    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if (그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    while (그룹하나.length != 0) {
        결과값.push(그룹하나.shift());
    }

    while (그룹둘.length != 0) {
        결과값.push(그룹둘.shift());
    }
    return 결과값;
}
```

### 퀵정렬
 * 특정한 값(피봇값)을 기준으로 작은값은 앞으로 , 큰 값인 데이터는 뒤로 가도록하여 작은 값을 갖는 데이터와 큰 값을 갖는 데이터를  분할하여 정복하는 법을 말합니다. 

```js
 // 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15], [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    const 피벗값 = [입력배열.shift()]; //기준점
    const 그룹하나 = [];
    const 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }

    console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`);

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));

}

console.log(퀵정렬(입력값));
```

## 4. 페이지 교체 알고리즘
 * 3번 문제  https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
```js
[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”] 1회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”, “Pangyo”] 2회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”, “Pangyo”, “Seoul”] 3회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Pangyo”, “Seoul”, “NewYork”] 4회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Seoul”, “NewYork”, “LA”] 5회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“NewYork”, “LA”, “Seoul”] 6회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“NewYork”, “Seoul”, “LA”] 7회차

hit - 1
miss - 5
```
## 5. 트리와 그래프
## 6. 트리의 순회

# 실전 코딩테스트 풀이
## 1. 18년도
## 2. 19년도
## 3. 20년도
## 4. 21년도