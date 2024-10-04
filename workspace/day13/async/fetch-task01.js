// https://jsonplaceholder.typicode.com/users
// 1. 데이터 요청해서 콘솔에 users 출력하기
// 2. users에 name만 콘솔에 출력하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if(!response.ok){
            throw new Error(`response Error : ${response.status}`)
        }
        return response.json();
    })
    .then((result) => result.map(({name}) => name))
    .then((name) => console.log(name))
    .catch((error) => {
        console.log(error);
    })