/*JS*/
function login(event){
    event.preventDefault();
    var nick=document.getElementById('nick').value;
    var pass=document.getElementById('pass').value;
    var rol=document.getElementById('rol').value;
    if(rol=="cliente"){
      if(nick=="seller456" && pass=="Intro123"){
        window.location.href = "res/cliente.html";
      }
      else{
        alert("Datos incorrectos");
      }
    }
    else if(rol=="vendedor"){
      if(nick=="dancabello" && pass=="J5*asdRD.s"){
        window.location.href = "res/introvendedor.html";
      }
      else{
        alert("Datos incorrectos");
      }
    }
    else if(rol=="admin"){
      if(nick=="root" && pass=="dochouse"){
        window.location.href = "res/introadmin.html";
      }
      else{
        alert("Datos incorrectos");
      }
    }
  }
  
  function view(){
    const rv=document.getElementById('registro-view');
    rv.scrollIntoView();
  }
  
  function registro(event){
    event.preventDefault();
    for(let i=0; i<9; i++){
        var ids = "input"+toString(i);
        if(document.getElementById(ids).value==null){
            alert("Por favor, complete todos los campos");
            return;
        }
    }
    alert("Usuario registrado exitosamente!");
  }