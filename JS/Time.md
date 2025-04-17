```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload=()=>{
            document.getElementById("btn1").addEventListener("click", ()=>{
                var input = document.getElementById("pDate").value; // 구입한 날짜
                var inputTime = new Date(input);
                inputTime.setMonth(inputTime.getMonth()+1);

                var now = new Date().getMonth(); // 현재 날짜
                var limit = inputTime.getMonth(); // 반품가능 마감 날짜(입력받은 날짜+1개월)
                // 현재 날짜가 마감 날짜보다 전이면 가능, 아니면 불가능
                (now<limit)?alert("반품 가능"):alert("반품 불가능");
            });

            document.getElementById("btn2").addEventListener("click", ()=>{
                var inputChange = Number(document.getElementById("change").value); // 시간당 요금
                var pDate1 = new Date(document.getElementById("pDate1").value); // 시작시간
                var pDate2 = new Date(document.getElementById("pDate2").value); // 종료시간

                var diff=pDate2.getTime()-pDate1.getTime(); // 종료시간-시작시간
                diff=diff/(1000*60*60); // 밀리단위니까 그거로 나누기
                inputChange*=diff; // 시간당요금*시간
                alert(inputChange);
            });
        }
    </script>
</head>
<body>
    <h3>반품 가능 여부</h3>
    <input type="date" id="pDate">
    <button id="btn1">click</button><br>

    <h3>PC방 요금 계산</h3>
    시간당 요금 <input type="text" id="change" value="1000"><br>
    시작 시간 <input type="datetime-local" id="pDate1"><br>
    종료 시간 <input type="datetime-local" id="pDate2"><br>
    <button id="btn2">click</button>
</body>
</html>
```
