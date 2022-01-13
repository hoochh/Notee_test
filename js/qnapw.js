function qnapw(){
    password=prompt('비밀번호를 입력해주세요. (pw:1234)'); 

    if(password==='1234') {
        location.href="qna.html" 
    } else {
        alert('올바른 비밀번호를 입력해주세요.') 
    }
}