//fetch("./productos.json")
//.then((response) => {
  // console.log(response);
 // if (!response.ok) {
  //  throw new Error(`${response.status}`);
  //}
  //return response.json();
//})
//.then((productos) => {
 // const section = document.querySelector("section");
  //section.innerHTML = "";
  productos.forEach((productos) => {
    const html = `
          <article>
              <h2>${productos.title}</h2>
              <p>${productos.body}</p>
              <img src="${productos.image}" alt="${productos.title}">
          </article>
      `;
    section.innerHTML += html;
  });
})
.catch((error) => {
  console.log(error);
});

  
 
