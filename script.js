/* RESPONSIVIDADE PARA O TEXTAREA*/
function verificarTamanhoDaTela() {
    let body = document.getElementsByTagName('body')[0];
    let textAreaValue = document.getElementsByClassName("section__inputText")[0];

    if (body.offsetWidth <= 765) {
        textAreaValue.setAttribute('cols', 20);
        textAreaValue.setAttribute('maxlength', 100);
        
    }
}

verificarTamanhoDaTela();

window.addEventListener('resize', verificarTamanhoDaTela);

/*CRIANDO A LÓGICA DE CRIPTOGRAFAR E DESCRIPTOGRAFAR*/


function criptografar() {

    let textArea = document.getElementsByClassName("section__inputText")[0];
    let textAreaValue = textArea.value
    let titleDissapear = document.getElementsByTagName("h2")[0];
    let paragrafhDissapear = document.getElementsByTagName("p")[0];
    let imagePersonDisspear = document.getElementsByClassName("aside__Person_image")[0];
    let textEncrypted = document.getElementsByClassName('text_encrypted')[0];
    let buttonCopy = document.getElementsByClassName("button_Copy")[0];

    if (textAreaValue == "") {
        textArea.value = 'Por favor, coloque uma mensagem!';
    } else {
        paragrafhDissapear.style.display = "none";
        titleDissapear.style.display = "none";
        imagePersonDisspear.style.display = "none";
        buttonCopy.style.display = "block";
        textoCriptografado = textAreaValue.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textEncrypted.textContent = `${textoCriptografado}`;
        textArea.value = "" 
    }

}


function descriptografar() {
    let textArea = document.getElementsByClassName("section__inputText")[0];
    let paragrafhDissapear = document.getElementsByTagName("p")[0];
    let textEncrypted = document.getElementsByClassName('text_encrypted')[0];
 
    if(textEncrypted.textContent == ""){
        console.log("Está vázio");
        paragrafhDissapear.textContent = "Por favor, criptografe um texto, para depois descriptografar";
    } else{
        let textEncryptedValue = textEncrypted.textContent;
        textoDescriptografado = textEncryptedValue.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        console.log(textoDescriptografado);
        textArea.value = textoDescriptografado;
    }
}

function copyText(){
    let textEncrypted = document.getElementsByClassName('text_encrypted')[0];
    let textEncryptedCopy = textEncrypted.textContent;
    navigator.clipboard.writeText(textEncryptedCopy)
    textEncrypted.textContent = ""
}   