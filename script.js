const dino = document.querySelector('#dino')         //controlar o personagem
const quadrado = document.querySelector('#quadrado') //controlar o obstáculo

function pular(){   //testar se o personagem possui a classe animar
    if(dino.classList != 'animar'){
        dino.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout(function(){
        dino.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval( function(){   
    
    var topoDino = parseInt( 
        window.getComputedStyle(dino).getPropertyValue('top')
        )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )
    
    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoDino >= 130){   //testa se o dino e o cacto colidiram ou não
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)
