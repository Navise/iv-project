var x = document.getElementById('passinfo')
function validator()
{
    var pw = document.getElementById("password").value;
    var N  = document.getElementById("Name").value;
    console.log(N);
    console.log(pw);

    if(N == "")
    {
        document.getElementById('passinfo').innerHTML = " 🙄 User name field is empty ";
        document.getElementById('passinfo').style.color = "pink";
        document.getElementById('passinfo').style.textShadow= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" ;
    }else if(pw == ""){
        document.getElementById('passinfo').innerHTML = " 🚫 password must not be empty";
        document.getElementById('passinfo').style.color  = "red";
        document.getElementById('passinfo').style.textShadow= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" ;
    }else if(pw.length < 8)
    {
        document.getElementById('passinfo').innerHTML = " 🟡 It has less than 8 characters!";
        document.getElementById('passinfo').style.color = "yellow";
        document.getElementById('passinfo').style.textShadow= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" ;
    }else{
        document.getElementById('passinfo').innerHTML = " ❌ No User in the Data Base sign Up";
        document.getElementById('passinfo').style.color = "red";
        document.getElementById('passinfo').style.textShadow= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" ;
        
    }
}