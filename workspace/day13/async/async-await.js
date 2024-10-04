// async await (ES8)
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json();
    return datas;
}

getUsers().then((result) => console.log(result));
// console.log(getUsers());