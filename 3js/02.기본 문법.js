//function 함수명(매개변수,.....){}
function testType(){
    box1 = document.queryselector('.box1')
    box1.innerHTML = "<h3>타입 테스트</h3>";

    // 문자열
    let name ='미정';
    // 숫자
    let age = 22;
    let height = 151;
    // 논리 값
    let check = false;
    // 배일
    let hobbies = ['축구', '농구', '야구'];
    //객체
    let user = {
        name: '미정',
        age:22,
        height:151,
        id:'dotori3',
        hobbies:['피아노','독서']
    }
    // 두 개의 수를 입력 받아서 두 수의 합을 반환하는 함수
    // 익명 함수(이름이 없는 함수)
    let fnTest = function(num1, num2){
        return num1+num2;
    }

    // 박스에 변수의 타입을 출력해 봅시다.
    box1.innerHTML = "<h3>타입 테스트</h3>";
    // 변수의 값을 출력하고 싶을 때는 변수 이름을 사용합니다.
    // 문자열과 변수를 연결할 때에는 + 연산자가 이용됩니다. 
    // box1.innerHTML += "name : " +name + ", type : " + typeof(name);
  
    // ''(백팃)기호를 이용하여 변수를 출력하는 방법 ${변수명, 표현식}
    // 템플릿리터럴 : 문자열 내에서 변수나 표현식을 쉽게 삽입하는 방법
    // 변수를 쉽게 출력하기 위한 방법
    
    //자바스크립트는 변수의 리터럴 (값 그 자체를 의미)을 확인 후 타입이 결정된다.
    var text = `name : ${name}, type : ${typeof(name)} <br>`;
    text += `age: ${age}, type : ${typeof(age)} <br>`;
    text += `height: ${height}, type : ${typeof(height)} <br>`;
    text += `check: ${check}, type : ${typeof(check)} <br>`;
    text += `hobbies: ${hobbies}, type : ${typeof(hobbies)} <br>`;
    text += `user: ${user}, type : ${typeof(user)} <br>`;
    text += `fnTest: ${fnTest}, type : ${typeof(fnTest)} <br>`;
    

    box1.innerHTML += text; 

    box1.innerHTML += text;
}

// 콘솔 창에서 함수를 실행하는 방법
// 함수의 이름을 불러줍니다!!
// 함수를 실행하기 위해서는 이름 뒤에 ()를 붙여 주어야 해요!!
function print(){
    // 변수 선언 및 초기화
    // 왼쪽의 값을 오른쪽 변수에 저장(대입)
    var a = '안녕';

    //왼쪽의 값을 오른쪽 변수의 값에 연결해서 저장
    a += '하세요'

    // 변수에 값을 출력하는 방법
    // alert(a) // 메세지 창 출력
    // console.log(a) //콘솔 창 출력

    var id = 'dotori';

    // 콘솔 창에 당신의 id는 (변수 id의 값)입니다.
    //문자열과 변수를 함께 출력하는 방법
    var msg = '콘솔 창에 당신의 id는 ' +id+ ' 입니다.'

    console.log(msg);
    // 더하기 연산자를 이용해서 출력하는 방법
    console.log('콘솔 창에 당신의 id는 ' + id + ' 입니다');
    // 백팃 기호와 ${}를 이용해서 출력하는 방법
    console.log('콘솔 창에 당신의 id는 ${id} 입니다');

    // 클래스 값이 box1인 요소를 선택해서 값을 입력해 봅시다
    // (id)님 환영합니다.
    var box1 = document.querySelector('.box1');
    box1.innerHTML = '${id}님 환영합니다.';

}

function print1(){
    var name = '미정';
    // id가 box2인 요소에
    // (name)님 환영합니다.
    // 라고 출력하세요.
    var box2 = document.querySelector('#box2');

    box2.innerHTML = name + '님 환영합니다.';
}

function plusTest(){
    // 연산자
    // 사칙 연산 : +,-,*,/
    // 나머지 연산자 : %
    console.log('10+2' , 10+2);// 더하기
    console.log('10-2' , 10-2);// 빼기
    console.log('10*2' , 10*2);// 곱하기 *
    console.log('10/2' , 10/2);// 나누기 /
    console.log('10%2' , 10%2);// 10을 2로 나눈 나머지 값
    if( 10 %2 == 0){
        console.log('짝수!');
    } else {
        console.log('홀수!');

    }

    //증감 연산자: ++, --
    // 값을 1씩 증가시켜 주거나 감소시켜 줍니다.
    // 변수의 앞에 위치하는지 뒤에 위치하는지에 따라 조금 달라요!!
    var age = 20%
    // 'age++' : 문자열 출력
    // age++ : 변수의 연산 결과
    console.log('age++', age++); // 값이 출력되고 1 증가됨 = 문장이 실행되고 값이 증가
    console.log('age', age);
    console.log('++age', ++age); // 1 증가되곡 값이 출력됨 = 값이 증가되고 문장이 실행
    console.log('age', age);

    // ★ 문자열과 숫자의 연산
    // 더하기 연산자는 연산의 기능과 더불어 문자열을 연결해주는 기능
    // 문자와 숫자의 더하기 연산의 결과 문자열의 연결이 이루어진다
    // ''로 감싸면 안에 숫자가 들어 있어도 문자!!
    let test1 = 7 + 7; // 14
    let test2 = '7' + 7; // '77' = 문자와 숫자의 더하기 연산으로 두 값이 연결되어 출력
    let test3 = 7 + '7'; // '77'
    let test4 = 7 + 7 + '7'; // '147'
    let test5 = 7 + '7' + 7; // '777'
    let test6 = '7' + (7 + 7); // '714'

    // 문자와 그의 연산자
    // 숫자로 형변환 후 연산됨
    // 형 변환 : 다른 타입으로 변환 해주는 것
    //          문자를 숫자로 변환
    //          숫자를 문자로 변환
    // 연산 전에 문자를 숫자로 형변환 후 연산을 실행
    let test7 = 7 * '7'; // 49
    let test8 = '7' - 3; // 4
    let test9 = '4' / 2; // 2
    let test10 = 4 % '2'; // 0
    let test11 = '3' * '7'; // 21
    // 연산을 하기 위해 숫자로 형변환 하려고 하는데
    // 문자 값이 들어있는 경우 NaN(숫자가 아님 - 형변환 불가)
    let test12 = '3' * 'a'; // NaN : Not a Number의 약자 - 문자를 숫자로 형변환 하려고 할 때 발생하는 오류

    let area = document.getElementById('box3');

    area.innerHTML = '"==" 연산자 테스트<br><br>'; area.innerHTML += `7 == 7 : ${7 == 7} <br>`; area.innerHTML += `'7' == 7 : ${'7' == 7} <br>`; area.innerHTML += `'7' == '7' : ${'7' == '7'} <br>`; area.innerHTML += `'7' != '7' : ${'7' != 7} <br>`; area.innerHTML += `'7' != '7' : ${7 != '7'} <br><br>`; area.innerHTML = '"===" 연산자 테스트<br><br>'; area.innerHTML += `7 === 7 : ${7 === 7} <br>`; area.innerHTML += `'7' === 7 : ${'7' === 7} <br>`; area.innerHTML += `'7' !== '7' : ${'7' !== 7} <br>`; area.innerHTML += `'7' !== '7' : ${'7' !== '7'} <br>`;


}

function opTest(){
    var box4 = document.querySelector('#box4');

    box4.innerHTML = '"==" 연산자 테스트<br><br>';
    box4.innerHTML += `7 == 7 : ${7 == 7} <br>`;
    box4.innerHTML += `'7' == 7 : ${'7' == 7} <br>`;
    box4.innerHTML += `'7' == '7' : ${'7' == '7'} <br>`;
    // : 부정 연산자
    // == 같은지 학인 (같으면 true)
    // !== 다른지 확인 (다르면 true)
    box4.innerHTML += `'7' != '7' : ${'7' != 7} <br>`;
    box4.innerHTML += `'7' != '7' : ${7 != '7'} <br><br>`;
    
    box4.innerHTML += '"===" 연산자 테스트<br><br>';
    box4.innerHTML += `7 === 7 : ${7 === 7} <br>`;
    box4.innerHTML += `'7' === 7 : ${'7' === 7} <br>`;
    box4.innerHTML += `'7' !== '7' : ${'7' !== 7} <br>`;
    box4.innerHTML += `'7' !== '7' : ${'7' !== '7'} <br>`; 


    box4.innerHTML += '연산자 테스트';
}

function iftest(){
    var text = document.querySelector('#box5').innerHTML;

    if(text == '조건문'){
        document.querySelector('#box5').innerHTML = '조건문 테스트'
    }
    else{
        document.querySelector('#box5').innerHTML = '조건문 테스트'
    }

}


function forTest(){
    // 반복문 1~10
    // for(초기값, 조건문, 증감값){} : 특정 조건이 충족될 때까지 코드 블록을 반복해서 실행
    // 초기값 : i는 0으로 초기화
    // 조건문 : i는 10보다 작을 때가지
    //           조건을 만족할 때 코드 블럭을 실행
    //          조건을 만족하지 않는 경우 코드 블럭은 종료됨
    // 증감값 : 변수 값을 증가, 감소시켜 줍니다
    // 초기값 -> 조건문 -> 코드 블럭 실행 -> 증감값
    for(var i=0; i < 10; i++)
    // for(var i=0; i < 10; i++)
    // 1~10까지 출력되도록
    // i++, i-- : i값이 변경됨
        console.log("i : ". i+1);

    //1~10까지 출력되도록
    // i++, i==
    for(var i=0; i<10; i++){
        console.log("i : ",i);
        
    }


    // 지정된 조건식이 참일 때까지 코드 블럭을 반복 실행
    // while(조건문){}
    var j=0;
    while(j<5){
        console.log('j=' , j);
        // j값이 변경되지 않으면 반복문을 탈출할 수가 없어서
        // 무한 반복에 빠지게 됩니다.
        // 문장 내부에 증감식을 갖는 경우가 많다
        j++;
    }

}
   
