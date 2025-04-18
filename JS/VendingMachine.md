```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            text-align: center;
        }
    </style>
    <script>
        window.onload=()=>{
            // 동전 넣는 메서드
            insertCoin=(amount)=>{
                var inputCoin = document.getElementById("inputCoin");
                inputCoin.value=Number(inputCoin.value)+amount;
            }

            // 음료 추가 메서드
            addDrink=(drink)=>{
                var selectDrink=document.getElementById("output");
                selectDrink.innerHTML+=drink;
            }

            // 금액 차감 메서드
            remainder=(coin)=>{
                var outputCoin=document.getElementById("inputCoin");
                outputCoin.value=Number(outputCoin.value)-coin;
            }

            // 1000원 투입
            /*
            var coinButton1000 = document.getElementById("coin1000");
            coinButton1000.addEventListener("click", ()=>insertCoin(1000));
            /**/
            // -> 이케 한줄로 쓸 수도 있음
            document.getElementById("coin1000").addEventListener("click", ()=>insertCoin(1000));

            // 500원 투입
            document.getElementById("coin500").addEventListener("click", ()=>insertCoin(500));

            // 100원 투입
            document.getElementById("coin100").addEventListener("click", ()=>insertCoin(100));


            // 콜라
            var cola = `<img src="img/콜라.jpg" height="70px">`;
            document.getElementById("cola").addEventListener("click", ()=>{
                addDrink(cola);
                remainder(1200);
            });

            // 사이다
            var cider = `<img src="img/사이다.jpg" height="70px">`;
            document.getElementById("cider").addEventListener("click", ()=>{
                addDrink(cider);
                remainder(1100);
            });

            // 환타
            var  fanta = `<img src="img/환타.jpg" height="70px">`;
            document.getElementById("fanta").addEventListener("click", ()=>{
                addDrink(fanta);
                remainder(1000);
            });

            // 커피
            var black = `<img src="img/블랙.gif" height="70px">`;
            var blackButton = document.getElementsByClassName("black");
            // 모든 버튼에 이벤트 추가
            for(var i=0; i<blackButton.length; i++){
                blackButton[i].addEventListener("click", ()=>{
                    addDrink(black);
                    remainder(400);
                });
            }
            

            // 잔돈 반환
            var changeButton = document.getElementById("change");
            changeButton.addEventListener("click", ()=>{
                var change500 = document.getElementById("change500");
                var change100 = document.getElementById("change100");
                var inputCoin = document.getElementById("inputCoin");

                var change = Number(inputCoin.value);

                change500.value = parseInt(change/500);
                var remainder = parseInt(change%500);
                change100.value = parseInt(remainder/100);
                inputCoin.value=Number(0);
            });

        }
    </script>
</head>
<body>
    <table border="solid black 1px">
        <thead>
            <tr style="height:50px">
                <td colspan="4">자판기</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src="img/콜라.jpg" height="100px"><br>
                    <button id="cola">1200&#8361;</button>
                </td>
                <td>
                    <img src="img/사이다.jpg" height="100px"><br>
                    <button id="cider">1100&#8361;</button>
                </td>
                <td>
                    <img src="img/환타.jpg" height="100px"><br>
                    <button id="fanta">1000&#8361;</button>
                </td>
                <td>
                    <button id="coin1000">1000원</button><br>
                    <button id="coin500">500원</button><br>
                    <button id="coin100">100원</button><br>
                    <input type="text" id="inputCoin" value=0 style="width:50px">원
                </td>
            </tr>
            <tr>
                <td>
                    <img src="img/블랙.gif" height="100px"><br>
                    <button class="black">400&#8361;</button>
                </td>
                <td>
                    <img src="img/블랙.gif" height="100px"><br>
                    <button class="black">400&#8361;</button>
                </td>
                <td>
                    <img src="img/블랙.gif" height="100px"><br>
                    <button class="black">400&#8361;</button>
                </td>
                <td><button id="change">잔돈 반환</button></td>
            </tr>
            <tr>
                <td colspan="3">
                    <div id="output"></div>
                </td>
                <td>
                    500원 <input type="text" id="change500" value="0" style="width:20px">개<br>
                    100원 <input type="text" id="change100" value="0" style="width:20px">개
                </td>
            </tr>
        </tbody>
    </table>
    
</body>
</html>
```
