let form=document.querySelector("form");
let h3=document.querySelector(".abs");

form.addEventListener("submit",function(event){
    let user=document.querySelector(".in-1");
    let pass=document.querySelector(".pass");
    if(user.value=="alex" && pass.value=="as"){
        this.innerHTML=this.action="simon.html";
    }
    else{
        alert("Invalid Credential");
    }
});