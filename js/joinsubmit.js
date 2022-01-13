function checkForm() {
    function msgalert() {
        alert('회원 정보를 빠짐 없이 입력해주세요.');
    }

    if (memfrm.memid.value.length == 0) {
        msgalert();
        memfrm.memid.focus();
        return ;
    }
    if (memfrm.mempw.value.length == 0) {
        msgalert();
        memfrm.mempw.focus();
        return ;
    }
    if (memfrm.memname.value.length == 0) {
        msgalert();
        memfrm.passname.focus();
        return ;
    }
    if (memfrm.membday.selectedIndex == 0) {
        msgalert();
        memfrm.membday.focus();
        return ;
    }
    if (memfrm.email.value.length == 0) {
        msgalert();
        memfrm.email.focus();
        return ;
    }
    if (memfrm.gender[0].checked == false
            && memfrm.gender[1].checked == false) {
        msgalert();
        return ;
    }
    if (memfrm.mailing[0].checked == false
            && memfrm.mailing[1].checked == false) {
        msgalert();
        return ;
    }
    if (memfrm.job.selectedIndex == 0) {
        msgalert();
        memfrm.job.focus();
        return ;
    }
    if (memfrm.hobby[0].checked == false 
            && memfrm.hobby[1].checked == false 
            && memefrm.hobby[2].checked == false
            && memefrm.hobby[3].checked == false
            && memefrm.hobby[4].checked == false) {
        msgalert();
        memfrm.hobby.focus();
        return ;
    }
    if (memfrm.txt.value.length == 0) {
        msgalert();
        memfrm.txt.focus();
        return ;
    }
    memfrm.submit();
}
