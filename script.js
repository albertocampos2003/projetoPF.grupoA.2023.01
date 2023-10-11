const dino = document.querySelector('#dino')         //controlar o personagem
const quadrado = document.querySelector('#quadrado') //controlar o obstáculo
const dino2 = document.querySelector('#dino2')         //controlar o personagem
const quadrado2 = document.querySelector('#quadrado2')

const pular = () =>{   //testar se o personagem possui a classe animar
    if(dino.classList != 'animar'){
        dino.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout( function(){
        dino.classList.remove('animar')
    }, 500)
};

const testarColisao = setInterval( function(){   
    
    const topoDino = parseInt( 
        window.getComputedStyle(dino).getPropertyValue('top')
        )
    const EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )
    
    if(EsquerdaQuadrado < 50 && EsquerdaQuadrado > 0 && topoDino >= 150){   //testa se o dino e o cacto colidiram ou não
                                                                           //fiz a adequação para os novos tamannhos do dino e do quadrado
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
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
    if(EsquerdaQuadrado2 < 1000 && EsquerdaQuadrado2 > 950 && topoDino2 >= -70){   //mudança feita para adequar a função ao css
                                                                                 //adequação para os novos tamannhos do dino e do quadrado
        quadrado2.style.animation = 'none'
        quadrado2.style.display = 'none'
    }
    

}, 10)

function tratarEventoKeyup(event, callback) {
    if (event.key === 'W' || event.key === 'w') { // Verificar se a tecla pressionada é "W" ou "w"
      callback();
    }
  }
  
  document.addEventListener('keyup', function (event) {
    tratarEventoKeyup(event, pular);
  });

function tratarEventoKeyup2(event, callback) {
    if (event.key === ' ') { 
      callback();
    }
  }
 
  document.addEventListener('keyup', function (event) {
    tratarEventoKeyup2(event, pular2);
  });

