globalThis.$temp; // 전역변수

function confirm(){
    let flag = false;
    const $input = $("#input");
    const $tds = $("tbody tr td:first-child");

    if(globalThis.$temp){
        globalThis.$temp.closest("tr").css("background-color", "white")
        globalThis.$temp.text(globalThis.$temp.text().replaceAll("★", ""))
    }

    $tds.each((i,td) => {
        const $td = $(td);
        if($td.text() === $input.val()){
            flag = true;
            $td.text("★" + $td.text());
            globalThis.$temp = $td;
            $td.closest("tr").css("background-color", "crimson")
        }
    })

    if(!flag){
        alert("다시 입력해주세요!");
    }
    $input.val("");
}