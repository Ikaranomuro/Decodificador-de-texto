function verificarTamanhoDaTela(){
    let body = document.getElementsByTagName('body')[0]
    let textAreaValue = document.getElementsByClassName("section__inputText")[0];


    if(body.offsetWidth <= 765){
        console.log("tela de celular")
        textAreaValue.setAttribute('cols', 20)
    } else{
        console.log("tela de outro navegador")
    }
}

verificarTamanhoDaTela()

window.addEventListener('resize', verificarTamanhoDaTela);


function criptografar() {
    
    let textAreaValue = document.getElementsByClassName("section__inputText")[0];
    let titleDissapear = document.getElementsByTagName("h2")[0];
    let paragrafhDissapear = document.getElementsByTagName("p")[0];
    let imagePersonDisspear = document.getElementsByClassName("aside__Person_image")[0];
    let textEncrypted = document.getElementsByClassName('text_encrypted')[0];
    let buttonCopy = document.getElementsByClassName("button_Copy")[0];
 



    if (textAreaValue.value == "") {
        textAreaValue.placeholder = 'Por favor, coloque uma mensagem!'
    } else {
        paragrafhDissapear.style.display = "none"
        titleDissapear.style.display = "none"
        imagePersonDisspear.style.display = "none"
        textEncrypted.textContent = `${textAreaValue.value}`
        buttonCopy.classList.toggle = "buttonAppear"
      

        textoConvertido = textAreaValue.value.replace(/e/g, (e) => {
            e = "enter"
            return e
        });
        // textoConvertido = textAreaValue.value.replace(/i/g , (i)=>{
        //     i = "imes"
        //     return i
        // });

        console.log(textoConvertido)


    }

}



// resultado = textAreaValue.value.split("")
// console.log(resultado)