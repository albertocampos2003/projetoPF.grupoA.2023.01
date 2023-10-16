const dino = document.querySelector('#dino')         //controlar o personagem
const quadrado = document.querySelector('#quadrado') //controlar o obstáculo
const dino2 = document.querySelector('#dino2')         //controlar o personagem
const quadrado2 = document.querySelector('#quadrado2')

const pular = () =>{   //testar se o personagem possui a classe animar
    if(dino.classList != 'animar'){
        dino.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout(() => {
        dino.classList.remove('animar')
    }, 500)
};

const testarColisao = setInterval(() => {   
    
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


const pular2 = () => {   //testar se o personagem possui a classe animar
    if(dino2.classList != 'animar2'){
        dino2.classList.add('animar2')  //se não tiver, adiciona
    }

    setTimeout(() => {
        dino2.classList.remove('animar2')
    }, 500)
}

const testarColisao2 = setInterval(() => {   
    
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

const tratarEventoKeyup = (event, callback) => {
    if (event.key === 'W' || event.key === 'w') { // Verificar se a tecla pressionada é "W" ou "w"
      callback();
    }
  }
  
  document.addEventListener('keyup', (event) => {
    tratarEventoKeyup(event, pular);
  });

const tratarEventoKeyup2 = (event, callback) => {
    if (event.key === ' ') { 
      callback();
    }
  }
 
  document.addEventListener('keyup', (event) => {
    tratarEventoKeyup2(event, pular2);
  });

let pontuacao = 0                                                              //inicializa a pontuação com 0

  const AdicionarPontuacao = () => {
      pontuacao++;                                                               // adiciona a pontuação em 1
      document.getElementById('pontuacao').innerText = 'Pontuaçao:'+pontuacao;
  }
  
  const pontuacaodino = setInterval(() => {
      const topoDino = parseInt(window.getComputedStyle(dino).getPropertyValue('top')
      )
  const EsquerdaQuadrado = parseInt(
      window.getComputedStyle(quadrado).getPropertyValue('left')
  )
      if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoDino < 130){       //testa se o cacto e o dino colidiram
          AdicionarPontuacao()
  
      }
  }, 10)


let pontuacao2 = 0                                                              //inicializa a pontuação com 0

  const AdicionarPontuacao2 = () => {
      pontuacao++;                                                               // adiciona a pontuação em 1
      document.getElementById('pontuacao').innerText = 'Pontuaçao:'+pontuacao;
  }
  
  const pontuacaodino2 = setInterval(() => {
      const topoDino2 = parseInt(window.getComputedStyle(dino2).getPropertyValue('top')
      )
  const EsquerdaQuadrado2 = parseInt(
      window.getComputedStyle(quadrado2).getPropertyValue('left')
  )
      if(EsquerdaQuadrado2 < 1000 && EsquerdaQuadrado2 > 950 && topoDino >= -70){       //testa se o cacto e o dino colidiram
          AdicionarPontuacao2()
  
      }
  }, 10) 
