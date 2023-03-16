const input$$ = document.querySelectorAll("input");
const button$$ = document.querySelectorAll("button");


const getDatos = async () => {

    try {

      const respuesta = await fetch(https://api.nationalize.io?name=${input$$.value});
      const res = await respuesta.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  button$$.addEventListener('click', getDatos);