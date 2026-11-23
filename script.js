
const CONFIG = {

  
  nomeDela: "[Gigica]",
  seuNome:  "[Igor OZ]",

  
  frase: "Com amor e carinho, para a mulher da minha vida.",
  intro: "Reuni aqui algumas lembranças, só para você. Pode vir devagar, sem pressa.",
  textoBotao: "Ver nossas lembranças",

  
  tituloGaleria: "Nossas lembranças",
  dicaGaleria: "Toque na foto para virar e ler o que está escrito atrás.",
  fotos: [
    { src: "fotos/01.jpeg",alt: "Nossa primeira foto oficial", msg: "Essa foto foi uma das que deram origem a nossa hostória e até hoje lembro da múscia, (ela que me acompanha...)" },
    { src: "fotos/02.jpeg",alt: "Nosso primeiro ano novo juntos", msg: "Meu primeiro ano novo passando ao seu lado,e posso te assegurar que foi muito especial, eu amo tanto como você está linda nessa foto..."},
    { src: "fotos/03.jpeg",alt: "Nossa primeira viagem juntos", msg: "Foi um carnaval maravilhoso, cheio de risas amores, beijos e abraços, passar com você seu niver e o carnaval foi tão especial." },
    { src: "fotos/04.jpeg",alt: "Sua formatura", msg: "Você estava tão bela que meus olhos brilham só de lembrar,esse dia foi um marco para vermos a mulher maravilhosa que você é, por fora e por dentro."},
    { src: "fotos/05.jpeg",alt: "A grande viagem", msg: "Poder viver o sonho de sair do Brasil ao seu lado foi gratificante, e ver quantas portas você abriu para mim é ainda mais especial, não consigo nem escrever sobre essa nossa viagem..."},
    { src: "fotos/06.jpeg",alt: ".....", msg:"Como eu amo essa foto, MDS. Seu sorriso, seu cabelo, seu olhar, você é incrível <3"},

  ],

  /* 4) CARTINHA: título, parágrafos (um texto por linha), despedida e assinatura */
  tituloCarta: "Para você, Gigica",
  carta: [
    "Preparei esta pequena lembrança para você, como uma forma de relembrarmos um pouco de tudo o que construímos até aqui e, principalmente, de tudo o que ainda temos pela frente.",
    "Ainda temos tantas coisas para viver, tantos planos para realizar e, claro, nossa tão esperada viagem para a Irlanda. Mas, quando paro para pensar em tudo o que já vivemos, são tantas lembranças especiais que fica até difícil escolher por onde começar.",
    "Como esquecer aquele dia em que passamos inteiro na Disney de Paris, aproveitando, brincando e vivendo cada momento juntos? Foi um dia maravilhoso, daqueles que ficam guardados para sempre. E, sinceramente, eu não poderia ter escolhido uma pessoa melhor para compartilhar esses momentos.",
    "Como esquecer aquele dia em que passamos inteiro na Disney de Paris, aproveitando, brincando e vivendo cada momento juntos? Foi um dia maravilhoso, daqueles que ficam guardados para sempre. E, sinceramente, eu não poderia ter escolhido uma pessoa melhor para compartilhar esses momentos",
    "Você é a pessoa que me acolhe, que esteve ao meu lado nos momentos em que estive mais frágil, nas dificuldades e nas situações em que mais precisei de apoio. Como esquecer todas as vezes em que você foi comigo visitar minha mãe, mesmo cansada, mesmo não gostando de pegar ônibus? Ainda assim, você estava lá, porque sabia o quanto aquilo era importante para mim.",
    "No dia em que caí de moto, você também esteve ao meu lado. E não foi apenas nessa situação, mas em tantas outras em que precisei de um abraço, de apoio ou simplesmente de alguém que estivesse comigo. Você sempre me impulsionou a ser melhor, sempre torceu por mim e sempre demonstrou querer o meu bem. Eu não poderia desejar alguém melhor ao meu lado.",
    "Gi, eu te amo! Amo tanto que, às vezes, posso acabar parecendo rude. E sei que, em alguns momentos, realmente sou. Mas quero que você saiba que nunca existe a intenção de te machucar ou de fazer você se sentir menos amada. Estou longe de ser perfeito, mas meu sentimento por você é enorme. Você é minha paixão, meu amor e a mulher da minha vida.",
    "Fico muito animado quando penso em tudo o que ainda vamos viver. Ao mesmo tempo, sou muito feliz e grato por tudo o que já vivemos, pelas conquistas que tivemos, pelas coisas que construímos juntos e até pelas batalhas que enfrentamos. Cada uma dessas experiências faz parte da nossa história e torna tudo ainda mais especial.",
    "Espero que você nunca tenha dúvidas de que estou aqui para você. Para o que precisar, nos momentos bons, nos difíceis e em tudo o que ainda vier pela frente. Quero continuar sendo seu parceiro, seu apoio e alguém com quem você sempre possa contar.",
    "Foi por isso que resolvi preparar esta singela homenagem, usando algo que nós dois gostamos tanto: a tecnologia. Inclusive, algo pelo qual você também foi responsável por me incentivar. Acho bonito pensar que até nisso você faz parte da minha história e das coisas que estou construindo.",
    "Existem tantas coisas que eu poderia falar sobre você que, se colocasse todas em palavras, provavelmente este texto ficaria enorme. São sentimentos e pensamentos que talvez você nem imagine que eu tenha, porque nem sempre consigo me expressar da melhor maneira. Mas tento, à minha forma, demonstrar pelo menos um pouquinho de tudo o que sinto.",
    
    "Você é minha princesa, meu amor, e eu quero ser o seu sol, iluminar seus dias e estar ao seu lado por toda a vida.",

  ],
  despedida: "Com todo o meu carinho,",
  assinatura: "Igor Oz",        

  
  rodape: 'Eu te amo Princesa!'
};



const $ = id => document.getElementById(id);
const sub = s => s.replaceAll("[NOME DELA]", CONFIG.nomeDela).replaceAll("[SEU NOME]", CONFIG.seuNome);

document.title = "Para " + CONFIG.nomeDela;
$("frase").textContent = CONFIG.frase;
$("intro").textContent = CONFIG.intro;
$("btn-galeria").textContent = CONFIG.textoBotao;
$("t-galeria").textContent = CONFIG.tituloGaleria;
$("dica").textContent = CONFIG.dicaGaleria;
$("t-carta").textContent = sub(CONFIG.tituloCarta);
CONFIG.carta.forEach(t => { const p = document.createElement("p"); p.textContent = sub(t); $("corpo-carta").appendChild(p); });
$("despedida").textContent = CONFIG.despedida;
$("assinatura").textContent = sub(CONFIG.assinatura);
$("rodape").textContent = CONFIG.rodape;

/* Imagem de exemplo (SVG) usada quando "src" está vazio */
function exemplo(n){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EBCFCF"/><stop offset="1" stop-color="#C4838D"/></linearGradient></defs>
  <rect width="400" height="480" fill="url(#g)"/>
  <path d="M200 300c-60-42-90-74-90-110 0-28 22-48 48-48 18 0 34 10 42 26 8-16 24-26 42-26 26 0 48 20 48 48 0 36-30 68-90 110z" fill="#FBF3E6" opacity=".85"/>
  <text x="200" y="385" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#5C1F33">Foto de exemplo ${n}</text>
  <text x="200" y="418" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="19" fill="#5C1F33">troque pela sua</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* Monta os slides */
const track = $("track"), total = CONFIG.fotos.length;
const slides = CONFIG.fotos.map((f, i) => {
  const s = document.createElement("div");
  s.className = "slide"; s.setAttribute("role", "group");
  s.setAttribute("aria-roledescription", "slide");
  s.setAttribute("aria-label", `Foto ${i + 1} de ${total}`);
  s.innerHTML = `<button type="button" class="card" aria-pressed="false">
    <span class="inner">
      <span class="face front"><img alt=""><span class="tap">toque para virar</span></span>
      <span class="face back" aria-hidden="true"><span class="msg"></span></span>
    </span></button>`;
  const img = s.querySelector("img");
  img.src = f.src || exemplo(i + 1);
  img.alt = f.alt || "";
  img.onerror = () => { img.onerror = null; img.src = exemplo(i + 1); };
  s.querySelector(".msg").textContent = f.msg;
  track.appendChild(s);
  return s;
});

let atual = 0, moveu = false;
function virar(card, ligado){
  card.classList.toggle("flipped", ligado);
  card.setAttribute("aria-pressed", ligado);
  card.querySelector(".front").setAttribute("aria-hidden", ligado);
  card.querySelector(".back").setAttribute("aria-hidden", !ligado);
  card.setAttribute("aria-label", ligado ? "Mensagem aberta. Ativar para ver a foto" : "Foto. Ativar para ler a mensagem do verso");
}
function ir(n){
  atual = Math.max(0, Math.min(total - 1, n));
  track.style.transform = `translateX(-${atual * 100}%)`;
  slides.forEach((s, i) => {
    const card = s.querySelector(".card");
    s.inert = i !== atual;
    if (i !== atual) virar(card, false);
  });
  $("counter").textContent = String(atual + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  $("prev").disabled = atual === 0;
  $("next").disabled = atual === total - 1;
}
slides.forEach(s => {
  const card = s.querySelector(".card");
  virar(card, false);
  card.addEventListener("click", () => { if (!moveu) virar(card, !card.classList.contains("flipped")); });
});
$("prev").onclick = () => ir(atual - 1);
$("next").onclick = () => ir(atual + 1);

/* Teclado: setas esquerda/direita quando a galeria está na tela */
let galeriaVisivel = false;
new IntersectionObserver(e => galeriaVisivel = e[0].isIntersecting, { threshold: .35 }).observe($("galeria"));
document.addEventListener("keydown", e => {
  if (!galeriaVisivel || e.altKey || e.ctrlKey || e.metaKey) return;
  if (e.key === "ArrowRight") { ir(atual + 1); e.preventDefault(); }
  if (e.key === "ArrowLeft")  { ir(atual - 1); e.preventDefault(); }
});

/* Toque / arrastar */
let x0 = null;
const vp = $("viewport");
vp.addEventListener("pointerdown", e => { x0 = e.clientX; moveu = false; });
vp.addEventListener("pointerup", e => {
  if (x0 === null) return;
  const dx = e.clientX - x0; x0 = null;
  if (Math.abs(dx) > 45) { moveu = true; ir(atual + (dx < 0 ? 1 : -1)); setTimeout(() => moveu = false, 60); }
});
vp.addEventListener("pointercancel", () => x0 = null);

ir(0);
