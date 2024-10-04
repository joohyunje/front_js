// async await
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이터를 "제목 : title" 내용으로 변경하여 출력하기

const getTitles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datas = await response.json();
    const titles = datas.map((datas) =>datas.title).slice(0,5);
    return titles;
}

getTitles()
    .then((result) => result.map((title) => `제목 : ${title}`))
    .then((result) => result.forEach((title) => {console.log(title)}))
    .catch((error) => console.error(error))