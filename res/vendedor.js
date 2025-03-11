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
        precio.textContent = "Precio: "+product['precio']+"$";
        div.appendChild(precio);
      lista.appendChild(div);
    });
  }
  
  mostrarproductos();
  
  function agregar(){
    document.getElementById('formulario').style.display = "block";
  }
  
  function cancelar(){
    document.getElementById('formulario').style.display = "none";
  }
  
  function confirmar(event){
    event.preventDefault();
    alert("Producto publicado exitosamente");
    document.getElementById('formulario').style.display = "none";
  }

  var ishistorial = false;
  function historial(){
    if(!ishistorial){
      document.getElementById('historial').style.display = "flex";
      ishistorial=true;
    }
    else{
      document.getElementById('historial').style.display = "none";
      ishistorial=false;
    }
  }

  function cerrarhistorial(){
    document.getElementById('historial').style.display = "none";
    ishistorial=false;
  }