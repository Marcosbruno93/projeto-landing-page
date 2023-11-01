/*
 *Quando clicar na seta avnçar temos que esconder todas imagens e motras a proxima imagem 

   *A imagem atual começa em 0 porque e a primeira
      imagem de todas , assim que for clicado no avançar eu preciso adicionar +1 ao contador de imagens para podeer saber que agora eu vou mostar a segunda imagem

      *Esconder todas as imagens pegar todas as imagens usando o DOM e remover a classe mostrar 
       
        *Mostrar a proxima imagem
          pegar todas as i magens , descobrir qual e a próxima , e colocae a classe mostrar nela 
*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  const totalDeImagens = imagensPainel.length -1
  if(imagemAtual === totalDeImagens){
    return

  }
  imagemAtual++;

  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  imagensPainel[imagemAtual].classList.add("mostrar");
});



setaVoltar.addEventListener("click", function () {

    if(imagemAtual === 0 ) {
      console.log('não tem como voltar');
    return
  }
  
  imagemAtual--;

  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  imagensPainel[imagemAtual].classList.add("mostrar");
});
