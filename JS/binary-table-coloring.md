```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // 2차원 배열 정의(1: 색칠, 0: 빈 셀), 11x10
        var tableArray = [
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1]
        ];

        // y, x만큼 html table td를 만듦
        // 빈 테이블 틀을 문자열로 만듦
        madeTable=(y,x)=>{
            var str="";
            str+="<table border=1 width=300 height=300>";
            
            // y행 만큼 반복하면서 <tr> 추가(테이블 행)
            for(var i=0; i<y; i++){
                str+="<tr>"; // 행 시작

                // x열 만큼 반복하면서 <td>(셀) 만듦
                for(var j=0; j<x; j++){
                    // 각 셀에 고유 id 부여(e.g. id=y2x3-> 2행 3열)
                    str+=`<td id=y${i}x${j}>`; 
                    str+="</td>"
                }
                str+="</tr>";
            }
            str+="</table>";
            return str; // html 테이블을 문자열로 만들어 반환
        };

        
        // 배열의 행(y), 열(x) 크기 가져옴
        drawArray=(arr)=>{
            var y=arr.length; // 행의 개수 -> 11
            var x=arr[0].length; // 0번 행의 열 개수 -> 10

            // 이중 반복문으로 배열 순회
            for(var i=0; i<y; i++){
                for(var j=0; j<x; j++){
                    // 값이 1인 셀을 찾아 해당 <td>의 id를 이용해 색 지정
                    if(arr[i][j]==1){
                        document.getElementById("y"+i+"x"+j).setAttribute("bgcolor", "skyblue");
                    }
                }
            }
        };

        // 페이지 출력
        window.onload=()=>{
            document.body.innerHTML=madeTable(tableArray.length, tableArray[0].length)
            drawArray(tableArray);
        };
    </script>
</head>
<body>
</body>
</html>
```
