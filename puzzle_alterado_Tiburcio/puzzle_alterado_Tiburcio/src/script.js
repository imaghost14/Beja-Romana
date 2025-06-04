document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navButtons = document.querySelectorAll("nav button, .puzzleLink");
  
  const puzzleTimers = {};  // Para guardar a função de parar o timer de cada puzzle


  navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.dataset.target || "homeSection";
      sections.forEach(sec => sec.style.display = "none");
      document.getElementById(targetId).style.display = "block";
    });
  });

   const puzzles = [
  {
    gridId: "puzzleGrid1",
    image: "https://imgur.com/gallery/templo-romano-3y25Y9t#hr0EtNR", 
    text: `O Templo Romano, em Beja, um templo do século I, é um dos maiores templos romanos da Península Ibérica. Foi descoberto em 1939 durante a construção do reservatório de água da cidade, mas foi apenas escavado em 2009 quando se reuniram condições para realizar os trabalhos.
      A estrutura tem cerca de 30 metros de comprimento e 19,4 metros de altura, sendo rodeada por um tanque com 4,5 metros de largura. A sua imponência e localização indicam que se tratava de um espaço de grande importância religiosa e social na antiga Pax Júlia. Sendo que este templo era utilizado para rituais e cerimônias em honra a deuses romanos, refletindo a influência da cultura romana na região, e era localizado na Praça da República, onde também se situava o fórum romano, o templo funcionava como um ponto de encontro para a comunidade, integrando aspectos sociais e políticos da vida na antiga Beja.
      As escavações foram estendidas, o que fez com que a arqueóloga responsável pelas escavações e os alunos do Instituto de Arqueologia da Universidade de Coimbra se aperceberam da imponência do templo romano.
      A Câmara de Beja pensa em comprar e demolir o edifício da antiga tipografia do Diário do Alentejo, que se encontra em cima da parte mais interessante do templo, para que todo o edifício fique descoberto e se desvende o templo imperial.`
    },
  {
    gridId: "puzzleGrid2",
    image: "https://imgur.com/gallery/domus-OKQ95Y6#Esn0T6C", 
    text: `Domus, era o nome dado às residências urbanas das famílias romanas mais ricas. Estas habitações geralmente eram térreas ou com no máximo dois andares, e possuía uma planta retangular com poucas aberturas externas para garantir privacidade, tendo como fonte de iluminação e ventilação o átrio e o peristilo, os dois espaços centrais da casa. 
Na entrada havia um vestíbulo antes da porta principal, seguido por um corredor que levava ao átrio, onde era o centro da vida familiar. Neste átrio ficava o implúvio, uma cisterna que recolhia água da chuva captada pelo complúvio, uma abertura no teto. Também no átrio era onde se encontrava o larário, um altar para os deuses domésticos (Lares e Penates), e também as alae, que eram nichos onde estavam expostas as imagens dos seus antepassados. Os pequenos quartos onde dormiam, conhecidos como cubicula, ficavam ao redor do átrio.
O tablínio, localizado no fundo do átrio, era o escritório do pater familias, usado para negócios e recepção de clientes, este escritório fazia a ligação entre o átrio e o peristilo, um pátio ajardinado rodeado de colunas, que se tornou o centro da casa com o tempo. Nesse peristilo estava o triclínio, uma sala de jantar usada para banquetes, e a culina, a cozinha geralmente reservada aos escravos. Algumas domus mais luxuosas incluíam ainda salas de lazer, como a biblioteca, a diaeta, um pequeno pavilhão para entreter convidados, e o solário, um espaço ao ar livre para banhos de sol.
A partir do século I, as domus começaram a incluir um balneum, a versão privada das termas romanas, com espaços como o apoditério, vestiário; o tepidário, sala de água morna; o caldário, piscina de água quente; e o frigidário, piscina de água fria.
Além das áreas residenciais, muitas domus possuíam tabernae, pequenas lojas voltadas para a rua, que podiam ser alugadas como comércios ou oficinas. Algumas também tinham um segundo piso, usado pelos comerciantes como moradia.
No início, as casas romanas eram simples, inspiradas nas cabanas etruscas, com apenas um átrio onde se cozinhava, comia e dormia. Com o tempo, adotaram influências gregas, incorporando o peristilo e espaços mais sofisticados para lazer e convívio social. Durante o Alto Império, as domus tornaram-se mais luxuosas, com grandes jardins, fontes, estátuas e decoração refinada, como na Casa de Amor e Psique, em Óstia.`
  },
  {
    gridId: "puzzleGrid3",
    image: "https://imgur.com/gallery/termas-XkW7CA8#3DcElLM", 
    text: `As termas romanas eram complexos públicos de banhos que desempenhavam um papel central na vida social e cultural do Império Romano. Por norma, eram constituídas por quatro partes essenciais: o Frigidarium; o Tepidarium; o Caldarium e o Laconium. Dentro das termas onde havia o banho, propriamente dito, estavam associados compartimentos com mosaicos, ornados por estátuas e painéis. As termas estavam cheias de bibliotecas, locais para comer, salas onde declamavam teóricos e poetas, estádios para corridas, jardins, ginásios, etc.
Para além de ser um elemento bom para a higiene, também funcionavam como espaços de lazer, exercício e convivência, acessíveis a cidadãos de todas as classes. Com inspiração nos banhos gregos, as teras romanas evoluíram para estruturas monumentais e sofisticadas, com aquecimento avançado e diversas salas especializadas. 
O percurso tradicional dentro das termas incluía várias etapas. Primeiro, os visitantes passavam pelo apoditério, o vestiário onde deixavam as suas roupas. Em seguida, iam ao tepidário, uma sala morna que preparava o corpo para o calor mais intenso do caldário, onde havia piscinas de água quente e vapor aquecido pelo hipocausto, um sistema inovador de aquecimento sob o piso. Após o banho quente, os banhistas iam ao frigidário, onde se refrescavam em uma piscina de água fria. Algumas termas possuíam também o lacônio, uma câmara seca extremamente quente, semelhante a uma sauna, e o natatório, uma grande piscina ao ar livre para natação e lazer.
Além das áreas de banho, as termas eram verdadeiros centros de convivência, contando com palestras para exercícios físicos e desporto como luta e corrida, bibliotecas e salas de leitura para atividades culturais, jardins e pátios para descanso e socialização, e até lojas e tabernas que vendiam comida, bebidas e produtos de higiene. O funcionamento dessas estruturas era possível graças ao hipocausto, um sistema em que fornos subterrâneos aqueciam o ar, que circulava sob o piso e subia pelas paredes ocas, mantendo as salas à temperatura ideal. A água quente era fornecida por caldeirões de bronze instalados sobre os fornos. O acesso às termas era barato ou até gratuito, tornando-as populares entre todas as camadas da sociedade. Homens e mulheres frequentavam as termas, às vezes em horários distintos ou em alas separadas.`
  }
];

  puzzles.forEach(({ gridId, image, text }, index) => {
    const grid = document.getElementById(gridId);
    const size = 3;
    const total = size * size;
    const pieces = [];

    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / size);
      const col = i % size;

      const piece = document.createElement("div");
      piece.classList.add("puzzle-piece");
      piece.dataset.correctIndex = i;

      piece.style.backgroundImage = `url('${image}')`;
      piece.style.backgroundSize = '300% 300%';
      piece.style.backgroundPosition = `${col * -100 / (size - 1)}% ${row * -100 / (size - 1)}%`;
      piece.style.width = `${280 / size}%`;
      piece.style.height = `${280 / size}%`;

      pieces.push(piece);
    }

    shuffleArray(pieces);

    pieces.forEach((piece, idx) => {
      piece.dataset.currentIndex = idx;
      grid.appendChild(piece);
    });

    let selected = null;

    // Inicia o temporizador e obtém a função para pará-lo quando necessário
    puzzleTimers[gridId] = startPuzzleTimer(grid, text);


    grid.addEventListener("click", (e) => {
      if (!e.target.classList.contains("puzzle-piece")) return;

      if (!selected) {
        selected = e.target;
        selected.classList.add("selected");
      } else if (selected === e.target) {
        selected.classList.remove("selected");
        selected = null;
      } else {
        swapPieces(selected, e.target);
        selected.classList.remove("selected");
        selected = null;

        if (isPuzzleSolved(grid)) {
          console.log('Puzzle completo detectado!');
          stopTimer();  // Para o timer e mostra o texto
        }
      }
    });
  });

  function swapPieces(a, b) {
    const tempCurrentIndex = a.dataset.currentIndex;
    a.dataset.currentIndex = b.dataset.currentIndex;
    b.dataset.currentIndex = tempCurrentIndex;

    // Troca visuais
    const tempBg = a.style.backgroundPosition;
    a.style.backgroundPosition = b.style.backgroundPosition;
    b.style.backgroundPosition = tempBg;
  }

  function isPuzzleSolved(grid) {
    const pieces = [...grid.children];
    return pieces.every((piece) => {
      const correct = parseInt(piece.dataset.correctIndex) === parseInt(piece.dataset.currentIndex);
      piece.classList.toggle('in-place', correct);
      return correct;
    });
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  function shufflePuzzle(grid) {
  const pieces = [...grid.children];
  shuffleArray(pieces);
  pieces.forEach((piece, idx) => {
    piece.dataset.currentIndex = idx;
    grid.appendChild(piece);
  });
}


  // Função para iniciar o temporizador e mostrar o texto depois de 30 segundos ou ao resolver o puzzle
  function startPuzzleTimer(grid, text) {
    let timeLeft = 30;

    // Cria o elemento do temporizador e insere antes do grid
    const timerDisplay = document.createElement('div');
    timerDisplay.classList.add('timer');
    timerDisplay.textContent = `Tempo restante: ${timeLeft} segundos`;
    grid.parentElement.insertBefore(timerDisplay, grid);

    // Cria o container do texto informativo (invisível no começo)
    const infoText = document.createElement('div');
    infoText.classList.add('info-text');
    infoText.textContent = text;
    infoText.style.display = 'none';
    grid.parentElement.appendChild(infoText);

    const timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Tempo restante: ${timeLeft} segundos`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.style.display = 'none';
        grid.style.display = 'none';
        infoText.style.display = 'block';
      }
    }, 1000);

    // Retorna função para parar o timer (quando puzzle for resolvido)
    return () => {
      clearInterval(timerInterval);
      timerDisplay.style.display = 'none';
      grid.style.display = 'none';
      infoText.style.display = 'block';
    };
  }
});
