// CREACION DE CARDS

const cardsContainer= document.querySelector('.cards-container');

const catalogoProductos = [];

catalogoProductos.push({
    imagen: '/img/camiseta.jpg',
    nombre: "Camiseta futbol",
    precio: 2000,
})

catalogoProductos.push({
    imagen: '/img/camiseta.jpg',
    nombre: "Pantalon",
    precio: 1000,
})

catalogoProductos.push({
    imagen: '/img/camiseta.jpg',
    nombre: "short",
    precio: 3000
})
catalogoProductos.push({
    imagen: '/img/camiseta.jpg',
    nombre: "vestido",
    precio: 500,
})


/* <div class="product-card">
<img src="" alt="">
<div class="product-info">
<div>
<p>Bike</p>
<p>$120,00</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
</figure>
</div>
</div> */

   for (producto of catalogoProductos) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProducto = document.createElement('img');
    imgProducto.setAttribute('src', producto.imagen);

    const productInfo = document.createElement('div');
    productCard.classList.add('product-info');

    const divSolito = document.createElement('div');

    const nombreProducto = document.createElement('p');
    nombreProducto.innerText = producto.nombre;

    const precioProducto = document.createElement('p');
    precioProducto.innerText = '$' + producto.precio;


    const infoFigure = document.createElement('figure');
    const imgCarro = document.createElement('img');
    imgCarro.setAttribute('src', '/img/bt_add_to_cart.svg');


    infoFigure.appendChild(imgCarro);

    divSolito.appendChild(nombreProducto);
    divSolito.appendChild(precioProducto);

    productInfo.appendChild(divSolito);
    productInfo.appendChild(infoFigure);
    
    productCard.appendChild(imgProducto);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);


} 



// PARA ORGANIZACION Y REUTILIZAR CODIGO

// function verProductos(arr){
//     for (producto of arr) {
//      const productCard = document.createElement('div');
//      productCard.classList.add('product-card');
 
//      const imgProducto = document.createElement('img');
//      imgProducto.setAttribute('src', producto.imagen);
 
//      const productInfo = document.createElement('div');
//      productCard.classList.add('product-info');
 
//      const divSolito = document.createElement('div');
 
//      const nombreProducto = document.createElement('p');
//      nombreProducto.innerText = producto.nombre;
 
//      const precioProducto = document.createElement('p');
//      precioProducto.innerText = '$' + producto.precio;
 
 
//      const infoFigure = document.createElement('figure');
//      const imgCarro = document.createElement('img');
//      imgCarro.setAttribute('src', '/img/bt_add_to_cart.svg');
 
 
//      infoFigure.appendChild(imgCarro);
 
//      divSolito.appendChild(nombreProducto);
//      divSolito.appendChild(precioProducto);
 
//      productInfo.appendChild(divSolito);
//      productInfo.appendChild(infoFigure);
     
//      productCard.appendChild(imgProducto);
//      productCard.appendChild(productInfo);
   
//      cardContainer.appendChild(productCard);
 
 
//  } 
 
//  }

// function verProductos(catalogoProductos);




