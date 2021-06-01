const edades=[];
let usuarioUno;
let usuarioDos;
let usuarioTres;

const mayorEdad = () =>{
    usuarioUno=document.getElementById("domTextElement").value;
    usuarioUno >=18 ? alert(`usuario uno Eres mayor de edad`) : alert("No eres mayor de edad, usuario uno");
    usuarioDos=document.getElementById("domTextElement1").value;
    usuarioDos >=18 ? alert(`usuario dos Eres mayor de edad`) : alert("No eres mayor de edad, usuario dos")
    usuarioTres=document.getElementById("domTextElement2").value;
    usuarioTres >=18 ? alert(`usuario tres Eres mayor de edad`) : alert("No eres mayor de edad, usuario tres")

    edades.push(usuarioUno, usuarioDos, usuarioTres);
        
    document.getElementById("valueInput").innerHTML=`Las edades son ${edades}`;
    let resultado=Math.max(...edades);

    document.getElementById("resultado").innerHTML=`la mayor edad es ${resultado}`;


     
}


/*
const valorEdad = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    console.log(inputValue);


    if (inputValue>18){
        alert("Eres mayor de 18 años")
        edades.push(inputValue)
    }else{
        alert("No eres mayor de 18 años")
        edades.push(inputValue)
    }

    document.getElementById("valueInput").innerHTML=edades;
    return edades;

  }*/





