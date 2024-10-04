// 옵셔널 체이닝(Optional Chaining)
const movie = {
    name : "오펜하이머",
    detail : {
        price : "50000",
        date : "20230920"
    }
}

const movie2 = {
    name : "마블",
    detail : {
        price : "100000"
    }
}

function printMoviePrice(movie){
    console.log(movie.detail.price);
}

printMoviePrice(movie)
printMoviePrice(movie2)

function printMovieDate(movie){
    // return movie && movie.detail && movie.detail.date;\
    return movie?.detail?.date;
}

console.log(printMovieDate(movie))
console.log(printMovieDate(movie2))

console.log(movie?.detail?.date);

