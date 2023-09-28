const dino = document.querySelector('#dino')         //controlar o personagem
const quadrado = document.querySelector('#quadrado') //controlar o obstáculo

function pular(){   //testar se o personagem possui a classe animar
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}