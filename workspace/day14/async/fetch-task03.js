// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력

// const getComments = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const datas = await response.json();
//     return datas;
// }

// getComments()
//     .then((datas) => datas.map((data) => data.email))
//     .then((emails) => emails.slice(0,10))
//     .then((emails) => emails.map((email) => email.split("@")[0]))
//     .then((emails) => emails.forEach((email) => {console.log(email)}))
//     .catch((error) => console.error(error))

// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거구로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json();
    return datas;
}

getUsers()
    .then((datas) => datas.map((data) => data.name))
    .then((datas) => datas.map((data) => {
        // let result = "";
        // for(let i = 0; i< data.length;i++){
        //     result += data.charAt(data.length - i -1);
        // }
        // return result
        return data.split("").reverse().join("")
    }))
    .then(console.log) // 참조형
    .catch((error) => console.error(error))



