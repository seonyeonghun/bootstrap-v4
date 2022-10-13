$(function(){
    // 닫기 버튼 누르면 다시 나타나지 않게 변경한다.
    $("#close_banner").click(function(){
        $("#banner").addClass("d-none");
    })

    // cart 버튼 누르면, 주문상품의 상품명, 수량, 가격을 업데이트한다.
    // 그리고 나서 결제창으로 이동할것인지 확인한다.
    $("#cart").click(function(){
        // 서버 전송을 목적으로 데이터를 생성
        var order = {
            buyItem: "라움 2인 그릇 6P",
            buyCount: 1,
            buyPrice: 39500
        }
        // .prompt() : 사용자에게 입력창을 띄우는 내장객체 메소드 [오래된 메소드] ==> form을 사용해서 처리!
        // .confirm() : 확인 true, 취소 false로 의사선택창을 띄움
        var userChoice = confirm("장바구니에 담았습니다, 결제창으로 이동하시겠습니까?");
        userChoice ? location.href="/payment" : null; // 삼항조건연산자
                    // 라우팅 : 서버가 클라이언트에게 요청하는 결과를 주는 과정
    })

    // 전체메뉴 누르면 모든 메뉴를 펼쳐놓는다.

    // 캐러셀 기능을 커스터마이징한다.
})