console.log('mostrar o document' , document);
console.log(document.querySelector('.botao-trailer'));

const botaoTrailerMario = document.querySelector('.botao-trailer'); 
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector('.modal');
const video = document.getElementById("video");
const linkVideoTrailer = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailerMario.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideoTrailer);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});






