var contador=0;

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
        precio.textContent = "Precio: "+product['precio']+"$";
        div.appendChild(precio);
      const cantidad = document.createElement('p');
        cantidad.textContent = Number(product['cantidad']);
      cantidad.className = "cantidad";
        div.appendChild(cantidad);
      const boton = document.createElement('button');
      boton.textContent = "Agregar al carrito";
      div.appendChild(boton);
      boton.addEventListener('click', function(event){
        if(cantidad.textContent>0){
            cantidad.textContent-=1;
          agregar(h1.textContent, p.textContent, precio.textContent, cantidad);
        }
        else{
          alert("Este producto no se encuentra disponible");
        }
      });
      const boton2 = document.createElement('button');
      boton2.textContent = "Comprar";
      div.appendChild(boton2);
      boton2.addEventListener('click', function(event){
        fin2(cantidad);
      });
      lista.appendChild(div);
    });
  }
  
  mostrarproductos();
  
  function agregar(nombre, descripcion, precio, cantidad){
    let car = document.getElementById('carrito');
    const div = document.createElement('div');
    div.className = "car-product";
    const h1 = document.createElement('h4');
    h1.textContent = nombre;
    div.appendChild(h1);
    const p = document.createElement('p');
    p.textContent = nombre;
    div.appendChild(p);
    const precio_ = document.createElement('p');
    precio_.textContent = precio;
    div.appendChild(precio_);
    const boton = document.createElement('button');
    boton.textContent = "Eliminar";
    boton.addEventListener('click', function(event){
        eliminar(div);
        cantidad.textContent++;
      });
    div.appendChild(boton);
    car.appendChild(div);
    contador++;
    document.getElementById('vercarrito').textContent = `Ver Carrito (${contador})`;
    document.getElementById('car-c').textContent = `Carrito (${contador}):`;
  }
  
  function eliminar(div_){
    let car = document.getElementById('carrito');
    car.removeChild(div_);
    contador--;
    if(contador!=0){
      document.getElementById('car-c').textContent = `Carrito (${contador}):`;
    }
    else{
      document.getElementById('car-c').textContent = "Carrito: ";
    }
  }
  
  function home(){
    window.location.href = "../index.html";
  }
  var iscar = false;
  function vercarrito(){
    if(!iscar){
      document.getElementById('carro').style.display = "block";
       let car = document.getElementById('carrito');
      car.scrollIntoView();
        document.getElementById('vercarrito').textContent = "Cerrar carrito";
      iscar=true;
    }
    else{
      document.getElementById('carro').style.display = "none";
      document.getElementById('vercarrito').textContent = `Ver Carrito (${contador})`;
      iscar=false;
    }
  }
  
  var isonly = false;
  var cantonly;
  
  function fin2(cantidad){
    document.getElementById('formulario').style.display = "block";
    isonly=true;
    cantonly=cantidad;
  }
  
  function finalizar(){
    if(document.getElementById('carrito').querySelectorAll('div').length === 0){
      alert("No hay productos agregados al carrito");
    }
    else{
      document.getElementById('formulario').style.display = "block";
    }
  }
  
  function confirmar(){
    alert("Compra realizada exitosamente!");
    if(isonly){
      cantonly.textContent-=1;
      document.getElementById('formulario').style.display = "none";
      isonly=false;
    }
    else{
        location.reload();
    }
  }
  
  function cancelar(){
    document.getElementById('formulario').style.display = "none";
  }