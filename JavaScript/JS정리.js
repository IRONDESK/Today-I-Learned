
// 모던자바스크립트 예제 (살짝 수정)
// 모던자바스크립트 예제
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

  ////////////////////////////////

  // 모던자바스크립트 예제
let p = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 10000); // (*)
  
  }); ////////////// 10초 후에 성공함 
  console.log('hello world');////// (잡일) p랑 별개로 찍힘
  let p2 = p.then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  });////////// p 가 성공(10초 경과)하면 then, resolve의 값이 p.then(f (result))의 result값으로 들어간다. 
  console.log('hello world2');////// (잡일) p랑 별개로 찍힘
  let p3 = p2.then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  });
  console.log('hello world3');////// (잡일) p랑 별개로 찍힘
  let p4 = p3.then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });

  /////////////////////////////
  // 모던자바스크립트 예제 (살짝 수정)
new Promise(function(resolve, reject) {

    setTimeout(() => reject('error'), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result + ' : 잘 수행!'); // 1
    return result + 'one';
    //////////// then은 이행했을 때의 명령
  }).catch(function(result) { // (***)
  
    alert(result + ' : 애러 발생!'); 
    return result + 'two';
    //////////// catch는 에러가 발생할 때의 명령
  }).then(function(result) {
  
    alert(result + ' : 잘 수행!'); // 4
    return result + 'three';
  
  });

  finally는 이행(resolve), 거부(reject) 상관없이 무조건실행
  then은 성공적을 실행했을때 실행하는 것~


  //////////////////

  // 1차 접종 퍼센트를 구해주세요!
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
.then(function(response) {
    console.log(1);
    return response.json();
})
.then(function(json) {
    console.log(2);
    console.log(json);
    return json
})
.then(function(json) {
    console.log(3);
    console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
    return
})


//////////////////////
// readme
// wiki
// 리눅스 커맨드라인!! 익히기!! 26번 장표!!
// 커밋☆☆☆ 이슈트래커 연동, 버전관리

// 1. 커밋은 '작업의 단위' 별로 작성하고 의미를 주는 게 좋다. 그래서 크기가 작을 수록 좋은 커밋이다.
// 2. README 는 일단 쓰면 좋다. 대략적인 내용만 쓰고 상세한 건 WIKI에 관리하자
// 3. 파일 여러개 뭉텅이로 건드리는 건 상관 없는데, + 1472 줄인데 'XXX 작업' 이라고 로그 찍혀있으면 당신은 그 날 사망한다 

// ko.javascript.info
// 과제 풀어보기
// 5.9/5.10