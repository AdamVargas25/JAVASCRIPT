function validainputs(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let ingreso=document.getElementById("login");
    let emailval=email.value.trim();
    let passewordval=password.value.trim();
    let passewordok="a12345";
    //
    var errorf=0
    if (emailval==""){
        ocErrorform(email,"por favor ingrese su email");
        errorf=1;
    }else if (!valEmail(emailval)){
        ocErrorform(email,"Email no valido");
        errorf=1;
    }else{
        exitosform(email);
    }
    //
    if (passewordval===""){
    ocErrorform(password,"por favor ingrese su contraseña");
    errorf=1;
    }else if (passewordval!=passewordok){
        ocErrorform(password,"contraseña no valida");
        errorf=1;
    }else{
        exitosform(password);
    }
    // 
    if (errorf==0){
        ingreso.addEventListener("click",function(){
            swal("ACCESO PERMITIDO !!", "Click OK para continuar", "success");
        })
    }
    return false;
    // función para validar errores en formularios
    function ocErrorform (input, message){
        let formControl=input.parentElement;
        let small=formControl.querySelector("small");
        formControl.className="form-control error";
        small.innerText =message; 
     }
     // función para ingreso exitoso en formularios
     function exitosform (input){
         let formControl=input.parentElement;
             formControl.className="form-control success";
         }
     function valEmail(email){
     return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
     }
    }