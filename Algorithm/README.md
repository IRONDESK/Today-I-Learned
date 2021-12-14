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
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()
```
## 3. 정렬
## 4. 페이지 교체 알고리즘
## 5. 트리와 그래프
## 6. 트리의 순회

# 실전 코딩테스트 풀이
## 1. 18년도
## 2. 19년도
## 3. 20년도
## 4. 21년도