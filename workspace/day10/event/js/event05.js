// input
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
console.log(inputs);

// font-size를 25px로 키우기
// border의 스타일을 벼경하기, solid 2px green
// width 200px
// height 20px

// 단, inputs[0] 방번호로 들고오지 않는다.
// inputs 반복문을 사용해서 변경하기



inputs.forEach((input) => {
    input.style.fontSize = "25px";
    input.style.border = "solid 2px green";
    input.style.width = "200px";
    input.style.height = "40px";

    input.addEventListener("blur", (e) => {
        console.log(e.target.value)
    })
})

button.addEventListener("click", (e)=>{
    inputs.forEach((input)=>{
        console.log(input.value);
    })
})

