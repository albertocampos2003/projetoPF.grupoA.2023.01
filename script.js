const dino = document.querySelector('#dino')         //controlar o personagem
const quadrado = document.querySelector('#quadrado') //controlar o obstáculo
const dino2 = document.querySelector('#dino2')         //controlar o personagem
const quadrado2 = document.querySelector('#quadrado2')

function pular(){   //testar se o personagem possui a classe animar
    if(dino.classList != 'animar'){
        dino.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout(function(){
        dino.classList.remove('animar')
    }, 500)
}

const testarColisao = setInterval( function(){   
    
    const topoDino = parseInt( 
        window.getComputedStyle(dino).getPropertyValue('top')
        )
    const EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )
    
    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoDino >= 130){   //testa se o dino e o cacto colidiram ou não
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)

function pular2(){   //testar se o personagem possui a classe animar
    if(dino2.classList != 'animar2'){
        dino2.classList.add('animar2')  //se não tiver, adiciona
    }

    setTimeout(function(){
        dino2.classList.remove('animar2')
    }, 500)
}

const testarColisao2 = setInterval( function(){   
    
    const topoDino2 = parseInt( 
        window.getComputedStyle(dino2).getPropertyValue('top')
        )
    const EsquerdaQuadrado2 = parseInt(
        window.getComputedStyle(quadrado2).getPropertyValue('left')
       )
                                                                                 //testa se o dino e o cacto colidiram ou não
    if(EsquerdaQuadrado2< 500 && EsquerdaQuadrado2 > 460 && topoDino2 >= -70){   //mudança feita para adequar a função ao css
        quadrado2.style.animation = 'none'
        quadrado2.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)

document.addEventListener("keydown", function (event) {
    pular2();
});
