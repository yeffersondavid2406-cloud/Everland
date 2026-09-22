 function filtrar(categoria) {
            let productos = document.querySelectorAll(".producto");
            let contador = 0;
            let botones = document.querySelectorAll('.categorias button');
            
            // Quitar clase activo de todos los botones
            botones.forEach(btn => btn.classList.remove('activo'));
            
            // Activar el botón clickeado
            event.target.classList.add('activo');
            
            // Filtrar productos
            productos.forEach(producto => {
                if (categoria === "todos") {
                    producto.style.display = "block";
                    contador++;
                } else if (producto.classList.contains(categoria)) {
                    producto.style.display = "block";
                    contador++;
                } else {
                    producto.style.display = "none";
                }
            });
            
            // Actualizar contador
            document.getElementById('productos-visibles').textContent = contador;
        }