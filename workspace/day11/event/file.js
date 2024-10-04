const file = require("fs");

const user = new Object();
user.name = "주현제";
user.email = "12341234";
user.password = "1234";

const userJSON = JSON.stringify(user);

// file.writeFile("경로", "내용", "인코딩", "콜백함수")
// file.writeFile("user.json", userJSON, "utf-8", (err, content) => {
//     if(err){
//         console.error(err)
//     }else{
//         console.log("출력 성공")
//     }
// })

let user2;
// file.readFile("경로", "인코딩", "콜백함수")
// file.readFile("userJSON", "utf-8", (error, content) => {
//     user = JSON.parse(content);
// })

user2 = JSON.parse(file.readFileSync("user.json", "utf-8"));

console.log(user);