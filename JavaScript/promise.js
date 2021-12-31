// callback functon hell을 탈출하기 위해 고안된 문법 

function sayHello () {
    return new Promise((resolve, reject) => {
        // 성공하면 resolve, 실패하면 reject
        // const hello = "Hello hello!";
        // resolve(hello);
        resolve("hello");
    })
}

// sayHello().then((resolvedData) => {
//     console.log(resolvedData)
// });

// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }).then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData
//     }).then((resolvedData) => {
//         console.log(resolvedData)
//     })
//     .catch((error)=> {
//         console.log(error);
//     });

// 예를 들어 회원가입 시, 아이디부터 개인정보의 유효성을 순차대로 검사하는데 유용

async function test() {
    const hello1 = await sayHello();
    // async와 await을 쓰는 이유?
    // promise는 비동기로 실행되므로, 순서대로(동기적으로) 실행되도록 await을 넣어야 함.
    console.log(hello1);
}
test();