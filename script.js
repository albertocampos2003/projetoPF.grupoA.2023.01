const dino = document.querySelector('#dino')         //cria uma constante para o dino
const obstaculo = document.querySelector('#obstaculo') //cria uma constante para o obstaculo
const dino2 = document.querySelector('#dino2')         //cria uma constante para o dino2
const obstaculo2 = document.querySelector('#obstaculo2') //cria uma constante para o obstaculo2

const pular = () =>{   //função para implementar o pulo do dino
    if(dino.classList != 'animar'){   //testar se o personagem possui a classe animar
        dino.classList.add('animar')  //se não tiver, adiciona
    }

    setTimeout(() => {
        dino.classList.remove('animar')
    }, 500)
};

const testarColisao = setInterval(() => {   //função para testar a colisão do dino com o obstaculo
    
    const topoDino = parseInt(     //verifica a posição do dino levando em consideração o top do css
        window.getComputedStyle(dino).getPropertyValue('top')   
        )
    const Esquerdaobstaculo = parseInt(   //verifica a posição do obstaculo levando em conta o left do css
        window.getComputedStyle(obstaculo).getPropertyValue('left')
       )
    
    if(Esquerdaobstaculo < 50 && Esquerdaobstaculo > 0 && topoDino >= 150){   //testa se o dino e o cacto colidiram ou não
                                                                           //fiz a adequação para os novos tamannhos do dino e do obstaculo
        obstaculo.style.animation = 'none'
        obstaculo.style.display = 'none'   //remove o obstaculo da tela caso a colisão ocorra
    }
    
}, 10)


const pular2 = () => {   //função para implementar o pulo do dino
    if(dino2.classList != 'animar2'){   //testar se o personagem possui a classe animar
        dino2.classList.add('animar2')  //se não tiver, adiciona
    }

    setTimeout(() => {
        dino2.classList.remove('animar2')
    }, 500)
}

const testarColisao2 = setInterval(() => {    //função para testar a colisão do dino2 com o obstaculo2
    
    const topoDino2 = parseInt(   //verifica a posição do dino2 levando em consideração o top do css
        window.getComputedStyle(dino2).getPropertyValue('top')
        )
    const Esquerdaobstaculo2 = parseInt(   //verifica a posição do obstaculo levando em conta o left do css
        window.getComputedStyle(obstaculo2).getPropertyValue('left')
       )
                                                                                 //testa se o dino e o cacto colidiram ou não
    if(Esquerdaobstaculo2 < 1000 && Esquerdaobstaculo2 > 950 && topoDino2 >= -100){   //mudança feita para adequar a função ao css
                                                                                 //adequação para os novos tamannhos do dino e do obstaculo
        obstaculo2.style.animation = 'none'
        obstaculo2.style.display = 'none'   //remove o obstaculo2 da tela caso a colisão ocorra
    }
    

}, 10)

const tratarEventoKeyup = (event, callback) => {   //função para implementar o pulo apenas na tecla w
    if (event.key === 'W' || event.key === 'w') { // Verificar se a tecla pressionada é "W" ou "w"
      callback();
    }
  }
  
  document.addEventListener('keyup', (event) => {
    tratarEventoKeyup(event, pular);
  });

const tratarEventoKeyup2 = (event, callback) => {  //função para implementar o pulo apenas na tecla espaco
    if (event.key === ' ') {   // Verificar se a tecla pressionada é o espaço
      callback();
    }
  }
 
  document.addEventListener('keyup', (event) => {
    tratarEventoKeyup2(event, pular2);
  });

let pontuacao = 0   //inicializa a pontuação com 0, foi deixado o let pois a pontuação é naturalmente uma variavel

  const AdicionarPontuacao = () => {  //função que aumenta a pontuação
      pontuacao++;    // adiciona a pontuação em 1
      document.getElementById('pontuacao').innerText = 'Pontuação:'+pontuacao;
  }
  
  const pontuacaodino = setInterval(() => { // função que testa se o dino e o obstaculo se colidiram, caso não, aumenta a pontuação
      const topoDino = parseInt(window.getComputedStyle(dino).getPropertyValue('top')
      )
      const Esquerdaobstaculo = parseInt(
      window.getComputedStyle(obstaculo).getPropertyValue('left')
      )
      if(Esquerdaobstaculo < 20 && Esquerdaobstaculo > 0 && topoDino < 130){       //testa se o cacto e o dino colidiram
          AdicionarPontuacao()
  
      }
  }, 10)


let pontuacao2 = 0    //inicializa a pontuação com 0, foi deixado o let pois a pontuação é naturalmente uma variavel

  const AdicionarPontuacao2 = () => {  //função que aumenta a pontuação2
      pontuacao2++;    // adiciona a pontuação em 1
      document.getElementById('pontuacao2').innerText = 'Pontuação2:'+pontuacao2;
  }
  
  const pontuacaodino2 = setInterval(() => { // função que testa se o dino2 e o obstaculo2 se colidiram, caso não, aumenta a pontuação
      const topoDino2 = parseInt(window.getComputedStyle(dino2).getPropertyValue('top')
      );
      const Esquerdaobstaculo2 = parseInt(
          window.getComputedStyle(obstaculo2).getPropertyValue('left')
      );
      if(Esquerdaobstaculo2 < 1000 && Esquerdaobstaculo2 > 950 && topoDino2 < -70){       //testa se o cacto e o dino colidiram
          AdicionarPontuacao2();
      }
  }, 10);
  
