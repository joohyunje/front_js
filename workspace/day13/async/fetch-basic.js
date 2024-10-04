// https://jsonplaceholder.typicode.com/posts

// get 요청
// fetch(backendUrl)
// fetch(backendUrl, ortion)

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((result)=> console.log(result))

// https://jsonplaceholder.typicode.com/albums
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
        if(!response.ok){
            throw new Error(`response Error : ${response.status}`)
        }
        // .json() response 객체를 -> onject객체로 바꿔서 데이터를 리턴해주는 메서드
        return response.json();
    })
    .then((result) => result.map((album) => album.title))
    .then((titles) => console.log(titles))
    .catch((error) => {
        console.log(error);
    })
