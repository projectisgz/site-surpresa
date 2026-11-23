/* =====================================================================
   ✏️  PERSONALIZE AQUI — tudo que você precisa trocar está neste bloco
   ===================================================================== */
const CONFIG = {

  /* 1) NOME DELA e SEU NOME */
  nomeDela: "[NOME DELA]",
  seuNome:  "[SEU NOME]",

  /* 2) ABERTURA: frase em destaque, introdução e texto do botão */
  frase: "Entre tantas linhas da minha vida, você é a minha favorita.",
  intro: "Reuni aqui algumas lembranças, só para você. Pode vir devagar, sem pressa.",
  textoBotao: "Ver nossas lembranças",

  /* 3) GALERIA
     - src:  caminho da sua foto (ex.: "fotos/01.jpg"). Deixe "" para usar uma imagem de exemplo.
     - alt:  descrição da foto (para leitores de tela). Descreva o que aparece nela.
     - msg:  mensagem curta que aparece no verso quando a foto é virada.
     Para ter mais ou menos fotos, é só adicionar ou remover blocos { ... }. */
  tituloGaleria: "Nossas lembranças",
  dicaGaleria: "Toque na foto para virar e ler o que está escrito atrás.",
  fotos: [
    { src: "", alt: "Foto de exemplo 1: troque pela sua foto", msg: "Escreva aqui a mensagem da primeira foto." },
    { src: "", alt: "Foto de exemplo 2: troque pela sua foto", msg: "Escreva aqui a mensagem da segunda foto." },
    { src: "", alt: "Foto de exemplo 3: troque pela sua foto", msg: "Escreva aqui a mensagem da terceira foto." },
    { src: "", alt: "Foto de exemplo 4: troque pela sua foto", msg: "Escreva aqui a mensagem da quarta foto." }
  ],

  /* 4) CARTINHA: título, parágrafos (um texto por linha), despedida e assinatura */
  tituloCarta: "Para você, [NOME DELA]",   // [NOME DELA] é trocado automaticamente
  carta: [
    "Este é um texto de exemplo. Apague-o e escreva aqui, com as suas palavras, o que você quer dizer a ela.",
    "Cada linha desta lista vira um parágrafo da cartinha. Adicione ou remova linhas à vontade.",
    "Termine com o que está no seu coração."
  ],
  despedida: "Com todo o meu carinho,",
  assinatura: "[SEU NOME]",               // [SEU NOME] é trocado automaticamente

  /* 5) RODAPÉ (um detalhe discreto de TI; pode trocar ou deixar vazio "") */
  rodape: 'console.log("com carinho");'
};
/* ===================== FIM DA PERSONALIZAÇÃO ===================== */


/* --------- A partir daqui é o funcionamento do site (não precisa mexer) --------- */
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
