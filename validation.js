
function formvalidation() {

    let isvalid = true;

    // name validation
    const name = document.getElementById("name").value;
    if(name == "") {
        let nameerror = document.getElementById('nameerror').innerHTML = 'Enter a valid name';
        isvalid = false;
    } else if(name.trim()=== name.length()>8){
        let nameerror1 = document.getElementById('nameerror').innerText='must be 8 character'
    }else{
        let nameerror = document.getElementById('nameerror').innerHTML = '';
    }

    // email validation  
    const email = document.getElementById("email").value;
    if(email == "") {
        document.getElementById('emailerror').innerText = 'Enter a valid email:';
        isvalid = false;
    } else {
        document.getElementById('emailerror').innerHTML = '';
    }

    // password validation
    const password = document.getElementById("password").value;
    if(password == "") {
        document.getElementById('passworderror').innerHTML = 'Enter a valid password:';
        isvalid = false;
    } else {
        document.getElementById('passworderror').innerHTML = '';
    }

    // confirm password validation
    const cpassword = document.getElementById("cpassword").value;
    if(cpassword == "") {
        document.getElementById('cpassworderror').innerHTML = 'Enter a valid password:';
        isvalid = false;
    } else if(cpassword != password) {
        document.getElementById('cpassworderror').innerHTML = 'Password does not match:';
        isvalid = false;
    } else {
        document.getElementById('cpassworderror').innerHTML = '';
    }

    return isvalid;
}