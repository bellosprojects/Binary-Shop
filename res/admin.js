function cerrarsesion(){
    window.location.href="../index.html";
  }
  
  function mostrarproductos(){
    let lista = document.getElementById('productos');
    
    productos.forEach(product => {
      const div = document.createElement('div');
      div.className = "product";
      const h1 = document.createElement('h2');
        h1.textContent = product['nombre'];
        div.appendChild(h1);
        const img = document.createElement('img');
        img.src = product['imagen'];
        div.appendChild(img);
      const p = document.createElement('p');
        p.textContent = product['descripcion'];
        div.appendChild(p);
      const precio = document.createElement('p');
        precio.textContent = product['precio']+"$";
        div.appendChild(precio);
      const boton = document.createElement('button');
      boton.textContent = "Eliminar Producto";
      div.appendChild(boton);
      boton.addEventListener('click', function(event){
          eliminar(div);
      });
      lista.appendChild(div);
    });
  }
  
  mostrarproductos();
  
  var ProductDelete;
  
  function eliminar(producto){
    ProductDelete=producto;
    document.getElementById('eliminarproductos').style.display = "block";
  }
  
  const usuarios=[
    {'Nombre':'Patroclo','Apellido':'Dantes','rol':'Vendedor'},
    {'Nombre':'Eugenio','Apellido':'Sanchez','rol':'Cliente'},
    {'Nombre':'Mohamej','Apellido':'Buitres','rol':'Vendedor'},
    {'Nombre':'Ramona','Apellido':'Lisont','rol':'Cliente'},
    {'Nombre':'Soquete','Apellido':'Pulga','rol':'Cliente'},
    {'Nombre':'Tagrado','Apellido':'Mileses','rol':'Cliente'},
    {'Nombre':'Florenz','Apellido':'Villecal','rol':'Cliente'},
    {'Nombre':'Luisito','Apellido':'Comunica','rol':'Cliente'}
  ];
  
  function mostrarUsuarios(){
    let lista = document.getElementById('usuarios');
    usuarios.forEach(user => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = "imagenes/user.png";
      div.appendChild(img);
      const info = document.createElement('p');
      info.textContent = user['Nombre']+" "+user['Apellido'];
      div.appendChild(info);
      const rol = document.createElement('p');
      rol.textContent = user['rol'];
      div.appendChild(rol);
      const boton = document.createElement('button');
      boton.textContent = "Eliminar Usuario";
      div.appendChild(boton);
      boton.addEventListener('click', function(event){
          eliminar2(div);
      });
      lista.appendChild(div);
    });
  }
  
  mostrarUsuarios();
  
  var UserDelete;
  
  function eliminar2(usuario){
    UserDelete=usuario;
    document.getElementById('eliminarusuarios').style.display = "block";
  }
  
  function cancelar(id_){
    document.getElementById(id_).style.display = "none";
  }
  
  function confirmar(tipo){
      if(tipo=='usuario'){
        document.getElementById('usuarios').removeChild(UserDelete);
        cancelar('eliminarusuarios');
      }  
      else if(tipo=='producto'){
        document.getElementById('productos').removeChild(ProductDelete);
        cancelar('eliminarproductos');
      }  
  }
  
  function verproductos(){
    window.scrollTo(0, -100);
  }
  
  function veru(){
    let usuarios = document.getElementById('h2u');
    usuarios.scrollIntoView();
    window.scrollBy(0, -100);
  }
