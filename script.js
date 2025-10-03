// Sistema de navegação CuteLovely
// Dados dos gatos organizados em um objeto

const dadosGatos = {
  "gato-amarelo": {
    titulo: "Gato Amarelo",
    subtitulo: 'da família "jura que é gente"',
    profile: [
      { porcentagem: "80%", label: "brincadeiras" },
      { porcentagem: "15%", label: "charme" },
      { porcentagem: "5%", label: "destruição" },
    ],
    paragrafos: [
      {
        classe: "part1",
        texto:
          "O gato amarelo é pura alegria felina. Com seu pelo dourado que parece guardar um pedaço do sol, ele ilumina qualquer ambiente em que passa. É o tipo de gato que não se contenta em só existir: ele precisa brincar, correr, inventar moda e, claro, conquistar corações com seu jeito irreverente.",
      },
      {
        classe: "subtitle",
        texto:
          "Explorador oficial da casa em ação: ele precisa brincar, correr, inventar moda e, claro, conquistar corações 🐾✨",
      },
      {
        classe: "part2",
        texto:
          "Brincalhão por natureza, o amarelinho transforma qualquer objeto em diversão. Uma bolinha de papel vira troféu, a caixa de papelão se torna um castelo e até a sombra na parede pode render minutos de pura comédia. Sua energia é contagiante e dificilmente alguém consegue resistir à sua animação.",
      },
      {
        classe: "part3",
        texto:
          'Apesar da fama de bagunceiro, o gato amarelo também tem um lado carinhoso que aparece de surpresa. Depois de uma sessão de corridas pela casa, ele se aninha no colo como quem diz: "baguncei, mas agora quero seu carinho". Essa mistura de traquinagem e afeto faz dele um companheiro único.',
      },
    ],
    imagens: [
      {
        src: "img/laranja1.jpg",
        classe: "img1",
        alt: "gato filhote laranja em pé olhando para frente",
        posicao: 1,
      },
      {
        src: "img/laranja2.jpg",
        classe: "img2",
        alt: "gato filhote laranja deitado com um olhar curioso",
        posicao: 2,
      },
      {
        src: "img/laranja3.jpg",
        classe: "img3",
        alt: "gato filhote laranja deitado com um olhar curioso",
        posicao: 5,
      },
    ],
    frase: '"Se existe sol, eu durmo. Se não existe, eu invento confusão."',
    tags: [
      "<b>Família:</b> Felidae - mas acha que é comediante",
      "<b>Peso médio:</b> 3 a 6 kg de pura energia solar",
      "<b>Expectativa de vida:</b> 12 a 16 anos - ou mais, se não gastar todas as vidas nas travessuras",
    ],
    part4: [
      "No fundo, o gato amarelo é um verdadeiro raio de sol felino. Conviver com ele é ter a certeza de que cada dia terá um toque de diversão, seja com suas corridas inesperadas, pulos acrobáticos ou pequenas travessuras que sempre arrancam risadas.",
      "Um ronronar, uma patinha esticada ou um olhar curioso transformam uma tarde comum em um instante especial, mostrando que a vida com ele é feita de alegria.",
    ],
  },

  "gato-preto": {
    titulo: "Gato Preto",
    subtitulo: "o mistério em 4 patas",
    profile: [
      { porcentagem: "60%", label: "mistério" },
      { porcentagem: "30%", label: "carinho" },
      { porcentagem: "10%", label: "sumiço" },
    ],
    paragrafos: [
      {
        classe: "part1",
        texto:
          "O gato preto é pura elegância felina. Com seu pelo escuro como a noite, ele carrega um charme enigmático que fascina e encanta. Contrariando superstições antiquadas, é um dos companheiros mais leais e afetuosos que alguém pode ter.",
      },
      {
        classe: "subtitle",
        texto:
          "Com seu pelo escuro como a noite, ele carrega um charme enigmático que fascina e encanta 🐾✨",
      },
      {
        classe: "part2",
        texto:
          "Com olhos que brilham como pequenas lanternas na escuridão, o gato preto parece enxergar além do óbvio. Ele é aquele felino que surge silencioso, se instala no seu colo como se fosse dono do espaço e, quando você percebe, já se tornou parte essencial da sua rotina.",
      },
      {
        classe: "part3",
        texto:
          "Na personalidade, mistura independência com carinho calculado. Gosta de escolher o momento certo para receber atenção, e quando decide se aproximar, transforma qualquer gesto simples em algo especial. É companheiro, leal e sabe ser um guardião silencioso da casa.",
      },
    ],
    imagens: [
      {
        src: "img/preto1.jpg",
        classe: "img1",
        alt: "gato preto deitado olhando para frente",
        posicao: 1,
      },
      {
        src: "img/preto2.jpg",
        classe: "img2",
        alt: "olhar enigmático do gato preto",
        posicao: 2,
      },
      {
        src: "img/preto3.jpg",
        classe: "img3",
        alt: "gato preto deitado olhando curioso",
        posicao: 5,
      },
    ],
    frase: '"Não é azar cruzar meu caminho… é sorte ter minha companhia."',
    tags: [
      "<b>Família:</b> Felidae - mas parece vir de outra dimensão",
      "<b>Peso médio:</b> 3 a 6 kg de pura elegância sombria",
      "<b>Expectativa de vida:</b> 12 a 18 anos - fora as vidas extras, claro",
    ],
    part4: [
      "Mais do que um animal de estimação, o gato preto é um símbolo: representa sorte, proteção e até magia. Um amigo elegante que, com um simples olhar, consegue transmitir mistério, confiança e afeto ao mesmo tempo. Ter um gato preto é descobrir que a vida pode ser cheia de surpresas encantadoras, onde cada dia traz uma nova aventura ao lado desse felino fascinante.",
    ],
  },

  "gato-tricolor": {
    titulo: "Gato Tricolor",
    subtitulo: "arco-íris em forma de felino",
    profile: [
      { porcentagem: "50%", label: "exclusividade" },
      { porcentagem: "30%", label: "charme" },
      { porcentagem: "20%", label: "atitude" },
    ],
    paragrafos: [
      {
        classe: "part1",
        texto:
          "O gato de 3 cores é praticamente uma obra de arte que ganhou vida. Com manchas que misturam branco, preto e laranja em padrões únicos, nenhum tricolor é igual ao outro. Cada pelagem é como uma assinatura exclusiva da natureza, transformando-o em um verdadeiro quadro em movimento.",
      },
      {
        classe: "subtitle",
        texto:
          "Com manchas que misturam branco, preto e laranja em padrões únicos, nenhum tricolor é igual ao outro 🐾✨",
      },
      {
        classe: "part2",
        texto:
          "Cheio de personalidade, o tricolor costuma ser independente, decidido e, muitas vezes, com aquele jeitinho de “quem manda aqui sou eu”. Não à toa, muitos dizem que esses gatos carregam uma dose extra de atitude e inteligência. Eles sabem muito bem como conquistar carinho… ou como exigir espaço.",
      },
      {
        classe: "part3",
        texto:
          "Apesar da pose de autoridade, também têm momentos de extrema doçura. São gatos que adoram companhia, mas sempre no estilo deles: primeiro medem o ambiente, depois decidem se é hora de brincar, pedir colo ou simplesmente observar o mundo de cima de uma prateleira.",
      },
    ],
    imagens: [
      {
        src: "img/tricolor1.jpg",
        classe: "img1",
        alt: "gato tricolor deitado olhando para frente",
        posicao: 1,
      },
      {
        src: "img/tricolor2.jpg",
        classe: "img2",
        alt: "gato tricolor filhote olhando curioso",
        posicao: 2,
      },
      {
        src: "img/tricolor3.jpg",
        classe: "img3",
        alt: "gato tricolor deitado olhando enigmatico",
        posicao: 5,
      },
    ],
    frase: '"Ser comum? Jamais. Eu nasci para ser único."',
    tags: [
      "<b>Família:</b> Felidae - mas com DNA de artista",
      "<b>Peso médio:</b> 3 a 6 kg de estilo exclusivo",
      "<b>Expectativa de vida:</b> 12 a 16 anos",
    ],
    part4: [
      "Mais do que um animal de estimação, o gato preto é um símbolo: representa sorte, proteção e até magia. Um amigo elegante que, com um simples olhar, consegue transmitir mistério, confiança e afeto ao mesmo tempo. Ter um gato preto é descobrir que a vida pode ser cheia de surpresas encantadoras, onde cada dia traz uma nova aventura ao lado desse felino fascinante.",
    ],
  },

  "gato-cinza": {
    titulo: "Gato Cinza",
    subtitulo: "elegância da névoa felina",
    profile: [
      { porcentagem: "50%", label: "serenidade" },
      { porcentagem: "30%", label: "charme" },
      { porcentagem: "20%", label: "estratégia" },
    ],
    paragrafos: [
      {
        classe: "part1",
        texto:
          "O gato cinza é pura sofisticação felina. Com pelagem que lembra nuvens de tempestade ou a calmaria de uma manhã nublada, ele carrega um charme discreto e irresistível. É o tipo de gato que chama atenção sem precisar fazer alarde: sua presença já transmite calma e beleza natural.",
      },
      {
        classe: "subtitle",
        texto:
          "É o tipo de gato que chama atenção sem precisar fazer alarde 🐾✨",
      },
      {
        classe: "part2",
        texto:
          "Dono de uma postura elegante, costuma se mover como se estivesse sempre em câmera lenta — e mesmo quando apronta, faz isso com uma classe inigualável. É o gato que observa o mundo de forma silenciosa, planejando cada passo como um verdadeiro estrategista.",
      },
      {
        classe: "part3",
        texto:
          "Na convivência, o gato cinza mistura independência com um carinho surpreendente. Não é do tipo que implora por atenção, mas quando decide se aproximar, é para se aconchegar de um jeito que aquece qualquer coração. Seu olhar sereno e profundo transmite uma paz difícil de explicar.",
      },
    ],
    imagens: [
      {
        src: "img/cinza1.jpg",
        classe: "img1",
        alt: "gato cinza deitado olhando para frente",
        posicao: 1,
      },
      {
        src: "img/cinza2.jpg",
        classe: "img2",
        alt: "gato cinza filhote olhando curioso",
        posicao: 2,
      },
      {
        src: "img/cinza3.jpg",
        classe: "img3",
        alt: "gato cinza deitado olhando enigmatico",
        posicao: 5,
      },
    ],
    frase:
      '"Sou calma na forma de felino, mas tenho o charme de uma tempestade silenciosa."',
    tags: [
      "<b>Família:</b> Felidae - mas com DNA de artista",
      "<b>Peso médio:</b> 3 a 6 kg de estilo exclusivo",
      "<b>Expectativa de vida:</b> 12 a 16 anos",
    ],
    part4: [
      "Mais do que um animal de estimação, o gato cinza é um companheiro tranquilo, elegante e cheio de charme. Um verdadeiro príncipe da casa, que sabe equilibrar mistério e afeto na medida certa. Sua presença é um convite à serenidade, mostrando que a vida pode ser apreciada com calma e estilo.",
    ],
  },

  "gato-frajola": {
    titulo: "Gato Frajola",
    subtitulo: "palhaço de gravata natural",
    profile: [
      { porcentagem: "50%", label: "palhaçada" },
      { porcentagem: "30%", label: "elegância" },
      { porcentagem: "20%", label: "drama" },
    ],
    paragrafos: [
      {
        classe: "part1",
        texto:
          "O gato frajola é facilmente reconhecido pelo contraste marcante entre o preto e o branco, como se estivesse sempre usando um terno de gala. Essa aparência sofisticada, porém, esconde uma personalidade cheia de humor e travessuras, que conquista todos ao redor.",
      },
      {
        classe: "subtitle",
        texto:
          "Facilmente reconhecido pelo contraste marcante entre o preto e o branco, como se estivesse sempre usando um terno de gala🐾✨",
      },
      {
        classe: "part2",
        texto:
          "Apesar do visual de “gato elegante”, o frajola é um verdadeiro comediante. Gosta de brincar, explorar e até provocar seus humanos com pequenas travessuras calculadas. Sempre encontra um jeito de ser o centro das atenções, seja com suas poses engraçadas ou com miados cheios de atitude.",
      },
      {
        classe: "part3",
        texto:
          "Na convivência, ele costuma ser carinhoso e muito apegado à família. Adora companhia, mas também tem seu lado independente, aproveitando momentos de descanso com o ar de quem está refletindo sobre a vida. Entre corridas pela casa e cochilos estratégicos, consegue equilibrar bagunça e charme como poucos.",
      },
    ],
    imagens: [
      {
        src: "img/frajola1.jpg",
        classe: "img1",
        alt: "gato frajola deitado olhando para frente",
        posicao: 1,
      },
      {
        src: "img/frajola2.jpg",
        classe: "img2",
        alt: "gato frajola filhote olhando curioso",
        posicao: 2,
      },
      {
        src: "img/frajola3.jpg",
        classe: "img3",
        alt: "gato frajola deitado olhando enigmatico",
        posicao: 5,
      },
    ],
    frase:
      '"Posso estar de gala, mas minha especialidade é a bagunça com estilo."',
    tags: [
      "<b>Família:</b> Felidae - mas acha que é comediante",
      "<b>Peso médio:</b> 3 a 6 kg de charme preto e branco",
      "<b>Expectativa de vida:</b> 12 a 18 anos",
    ],
    part4: [
      "O gato frajola é, no fundo, a mistura perfeita entre elegância e comédia. Um felino que traz leveza, alegria e estilo, provando que classe e diversão podem caminhar lado a lado. Ter um gato frajola é garantir que cada dia será repleto de risadas, carinho e momentos inesquecíveis ao lado desse palhaço sofisticado de quatro patas.",
    ],
  },
};

// Função para gerar HTML do conteúdo
function gerarConteudoHTML(gatoId) {
  const gato = dadosGatos[gatoId];
  if (!gato) return "<p>Gato não encontrado.</p>";
  let html = "";

  // Título
  html += `
    <div class="title">
      <h1>${gato.titulo}</h1>
      <h2>${gato.subtitulo}</h2>
    </div>
  `;

  // Profile
  html += '<div class="profile">';
  gato.profile.forEach((item) => {
    html += `
      <div>
        <span class="number">${item.porcentagem}</span>
        <span class="emph">${item.label}</span>
      </div>
    `;
  });
  html += "</div>";

  // Parágrafos e imagens intercaladas
  gato.paragrafos.forEach((paragrafo, index) => {
    html += `<p class="${paragrafo.classe}">${paragrafo.texto}</p>`;

    const imagemPosicao = gato.imagens.find((img) => img.posicao === index + 1);
    if (imagemPosicao) {
      html += `<img src="${imagemPosicao.src}" class="${imagemPosicao.classe}" alt="${imagemPosicao.alt}">`;
    }
  });

  // Frase de destaque
  if (gato.frase) {
    html += `
      <blockquote class="phrase">
        <p>${gato.frase}</p>
      </blockquote>
    `;
  }

  // Tags
  if (gato.tags && gato.tags.length > 0) {
    html += '<ul class="tags">';
    gato.tags.forEach((tag) => {
      html += `<li>${tag}</li>`;
    });
    html += "</ul>";
  }

  // Part4
  if (gato.part4 && gato.part4.length > 0) {
    html += '<div class="part4">';
    gato.part4.forEach((texto) => {
      html += `<p>${texto}</p>`;
    });
    html += "</div>";
  }

  // Imagem final (posição 5)
  const imagemFinal = gato.imagens.find((img) => img.posicao === 5);
  if (imagemFinal) {
    html += `<img src="${imagemFinal.src}" class="${imagemFinal.classe}" alt="${imagemFinal.alt}">`;
  }

  return html;
}

// Função para carregar o conteúdo do gato selecionado
function mostrarGato(gatoId) {
  const main = document.querySelector("main.content");
  if (!main) return;

  main.style.opacity = "0";
  main.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    main.innerHTML = gerarConteudoHTML(gatoId);
    main.style.opacity = "1";

    if (window.innerWidth < 760) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 300);
}

// Inicializar sistema de navegação
function inicializarNav() {
  const linksIcones = document.querySelectorAll(".sidenav a");

  linksIcones.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Atualizar ícone ativo
      linksIcones.forEach((l) => l.classList.remove("ativo"));
      link.classList.add("ativo");

      // Mostrar conteúdo
      const gatoId = link.getAttribute("data-secao");
      mostrarGato(gatoId);

      // Atualizar URL
      history.pushState(null, "", `#${gatoId}`);
    });
  });

  const hash = window.location.hash.substring(1);

  if (hash && dadosGatos[hash]) {
    mostrarGato(hash);
    const linkAtivo = document.querySelector(`[data-secao="${hash}"]`);
    if (linkAtivo) linkAtivo.classList.add("ativo");
  } else {
    if (linksIcones.length > 0) {
      linksIcones[0].click();
    }
  }
}

// Iniciar quando o DOM carregar
document.addEventListener("DOMContentLoaded", inicializarNav);
