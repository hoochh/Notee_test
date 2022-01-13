function loginTest() {
    let id = document.getElementById('userid').value;
    
    let pw = document.getElementById('userpw').value;

    if (id == "" || pw == "") {
        alert("아이디와 비밀번호를 확인해주세요.");
    }
}

// 버튼을 눌러도 실행되지 않는 이유?? getElement's'ById 오타