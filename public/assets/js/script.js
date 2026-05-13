const dados = {
  lugares: [
    {
      id: 1,
      nome: "Paris",
      descricao: "Capital francesa famosa por arte, gastronomia e arquitetura icônica.",
      conteudo: "Paris oferece museus de classe mundial, boulevards arborizados e cafés charmosos. Ideal para quem busca história, cultura e experiências gastronômicas únicas a cada esquina.",
      pais: "França",
      destaque: true,
      data: "2026-03-30",
      imagem_principal: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
      atracoes: [
        { id: 1, nome: "Torre Eiffel", descricao: "Monumento símbolo de Paris com mirantes panorâmicos.", imagem: "https://tse2.mm.bing.net/th/id/OIP.w2RRL0Fu48d4nAAh8yCDhgHaLc?cb=thfvnext&w=474&h=379&c=7&p=0" },
        { id: 2, nome: "Museu do Louvre", descricao: "Maior museu de arte do mundo, lar da Mona Lisa.", imagem: "https://images.openai.com/static-rsc-4/Gd-OJm_y0u5af3PQoeUooCxnTbqwRieNOf-SBI4aTRGnivygsFWQOxW1rTXJK58ngw4eG82aO_cTqptKaGgbWgo9A90GcT0b50Z8i2rh2KpHYUkEvVKY_LK0E7Uhwap3efKZWkvsT4SpolbhDuHBcDqnD97IuTVsglNsWAg7BmY?purpose=inline" },
        { id: 3, nome: "Catedral de Notre-Dame", descricao: "Obra-prima gótica às margens do Sena.", imagem: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=600&q=80" }
      ]
    },
    {
      id: 2,
      nome: "Kyoto",
      descricao: "Antiga capital do Japão, reconhecida por templos, jardins e tradições.",
      conteudo: "Kyoto preserva santuários xintoístas, templos budistas e bairros históricos. Visita imperdível para contemplar a florada das cerejeiras e a culinária kaiseki em ambiente sereno.",
      pais: "Japão",
      destaque: false,
      data: "2026-03-28",
      imagem_principal: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
      atracoes: [
        { id: 1, nome: "Fushimi Inari Taisha", descricao: "Santuário famoso por milhares de portais torii.", imagem: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
        { id: 2, nome: "Kinkaku-ji (Pavilhão Dourado)", descricao: "Templo zen coberto com folhas de ouro em um lago sereno.", imagem: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80" },
        { id: 3, nome: "Arashiyama", descricao: "Distrito cênico com o icônico bosque de bambus.", imagem: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" }
      ]
    },
    {
      id: 3,
      nome: "Rio de Janeiro",
      descricao: "Cidade maravilhosa com praias, morros e ritmo contagiante.",
      conteudo: "Entre o mar e a mata, o Rio combina belezas naturais, patrimônio histórico e vida cultural vibrante. Ideal para quem busca sol, trilhas urbanas e muita música ao vivo.",
      pais: "Brasil",
      destaque: true,
      data: "2026-03-27",
      imagem_principal: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80",
      atracoes: [
        { id: 1, nome: "Cristo Redentor", descricao: "Estátua no topo do Corcovado com vista panorâmica da cidade.", imagem: "https://tse3.mm.bing.net/th/id/OIP.RoAeZMlhtl0Zy--EcKOJWQHaFj?r=0&w=474&h=379&c=7&p=0" },
        { id: 2, nome: "Pão de Açúcar", descricao: "Complexo de morros com bondinho e mirantes sobre a baía.", imagem: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80" },
        { id: 3, nome: "Jardim Botânico", descricao: "Reserva com espécies nativas e alamedas de palmeiras imperiais.", imagem: "https://images.openai.com/static-rsc-4/1CzlXGqWY7YYneXbp7w-Yjjwwa7YpmWJ6zaLARKHv6SK4G0_2WO4yEhMz-WTluE_ZA1k3F0Ch6n4_YW8BpQtsU5TMGjAaKw1wLF5A7v8CPdz0yWcYiv02Kzz94DIfNig1v6glHNq_Me49ZRr_luYl9fAx3hkf7--WHsShLRWOtAYpmU6_9Eru9Q7fy9fa2WW?purpose=inline" }
      ]
    },
    {
      id: 4,
      nome: "Cidade do Cabo",
      descricao: "Destino costeiro com montanhas dramáticas e vinícolas próximas.",
      conteudo: "Mistura natureza exuberante, praias deslumbrantes, cultura plural e gastronomia de alta qualidade. A Table Mountain domina a paisagem e o Cape Point oferece trilhas e vistas oceânicas únicas.",
      pais: "África do Sul",
      destaque: false,
      data: "2026-03-25",
      imagem_principal: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
      atracoes: [
        { id: 1, nome: "Table Mountain", descricao: "Montanha icônica com trilhas e teleférico.", imagem: "https://images.openai.com/static-rsc-4/5EWLkiQPX8_GtHFdYMU6U_xK-5OqlbRz3nAPxIdqyjZ-iIalkB_HasnGaozM69-xbywAy01qgPBbfJgtOWpFq1rPKP9ejhlU5gQq4rSAWUpirzmJF6W39INTwD8Sz4e0Bo4xQ46SpAc-nJZ7I-chGhGvy10GNBc-jwgmlnbJwt-PX7Fl29S4eoq5aK-TTh6A?purpose=fullsize" },
        { id: 2, nome: "V&A Waterfront", descricao: "Área portuária com lojas, restaurantes e aquário.", imagem: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=600&q=80" },
        { id: 3, nome: "Boulders Beach", descricao: "Praia famosa pela colônia de pinguins-africanos.", imagem: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80" }
      ]
    },
    {
      id: 5,
      nome: "Barcelona",
      descricao: "Cidade mediterrânea vibrante, marcada pelas obras de Gaudí.",
      conteudo: "Barcelona combina praias urbanas, gastronomia catalã e arquitetura modernista surpreendente. Um destino que encanta tanto amantes de arte quanto de vida noturna intensa.",
      pais: "Espanha",
      destaque: true,
      data: "2026-03-22",
      imagem_principal: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
      atracoes: [
        { id: 1, nome: "Sagrada Família", descricao: "Basílica inacabada, obra-prima de Antoni Gaudí.", imagem: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80" },
        { id: 2, nome: "Parque Güell", descricao: "Parque com mosaicos coloridos e vistas da cidade.", imagem: "https://images.openai.com/static-rsc-4/VsRP8mNfOatGlLncQXzb6YUrMkJuxuQ4Ryg_7Fm1ZnU52MfLmcJXr-r9pVx5nu64yOHZJIpyEVj-MfEB9VWxPOGFC5-vGn2BIMRrn35aMTjP076O9c6r7wGp_RwpGV7kkdq00JDaKO6EewPWEcXpx_er0_gPnVlI3F0vzmlpApp4NElA-hvpQrGcxKa0D77R?purpose=fullsize" },
        { id: 3, nome: "Casa Batlló", descricao: "Edifício modernista com fachada ondulante e interiores criativos.", imagem: "https://images.openai.com/static-rsc-4/VwcVzemv6Kn8VwKNbdNnCxDM89b_71BRc0gN5GAPRud62gk7XmPOs-MRMdR-1SF9FVhwwO9Xoiotqe-LVrlg125vT2VMenJK9yvflrg6Ncdfa91hA89_OchPUYEjXgu_-mbZ3Wb4CKekyjYbY47cCOPo3LFokuKeIKM06S6u5BA?purpose=inline" }
      ]
    },
    {
          id: 6,
      nome: "Rio Grande do Sul",
      descricao: "Estado brasileiro marcado por tradições gaúchas, serras, vinícolas e paisagens naturais encantadoras.",
      conteudo: "O Rio Grande do Sul combina cultura tradicional, gastronomia típica e destinos naturais impressionantes. Entre serras, cânions, praias e cidades históricas, o estado oferece experiências únicas para quem busca aventura, clima acolhedor e forte identidade cultural.",
      pais: "Brasil",
      destaque: true,
      data: "2026-03-22",
      imagem_principal: "https://images.openai.com/static-rsc-4/DD3chf0Kdpn5EHqtoGiXLP2tF-Wpmv4AKI4-vhQJ_PkK-KHEG83LHuyRgb-ERxzeRk3Ml1FBi30c-S5mdaiGYQv15jIo5n1atflf--BZ6u85ppt8Sqfk9ta5CYCzg20FgamThYxk1PaLVNdaLCZRvD6zJL0Le8AMYKHhN06o6vx4fvKNPSEKq1Wqxrx1ifKd?purpose=fullsize",
      atracoes: [
        { id: 1, nome: "Gramado", descricao: "Charmosa cidade da Serra Gaúcha conhecida pelo clima europeu, ruas floridas e gastronomia sofisticada. Gramado encanta visitantes com atrações temáticas, chocolates artesanais e eventos famosos como o Natal Luz.", imagem: "https://images.openai.com/static-rsc-4/cMA4QvQFBklPCCHBqf-8ATjEmwfp34DXHCsb8rn6VGJA1_5i26zes8un9hEys_EPlthZagnmVAr7oa3-sGw_djjT0IOhQ93_RISknBmYHy5yfroyV_7ziNTOwmJqDplF0fh65od42k7DQKNQy0sJ8cB1y1poxtHW8QLuISjJ8Z8?purpose=inline" },
        { id: 2, nome: "Canela", descricao: "Destino cercado por natureza exuberante e belas paisagens da Serra Gaúcha. Canela é famosa por suas cachoeiras, parques ecológicos e pela imponente Catedral de Pedra, oferecendo tranquilidade e aventura aos visitantes.", imagem: "https://images.openai.com/static-rsc-4/s50kknVSMcuqyB1Oez59oW9hWkNUt1Blr_gEsFYmZw41k-GTnTsZuxy-znkxTqTNzcjWa9tDN5r3Xujy16Hojc1-TnYS0X8Gdzon4aPD0Ip7JyL0PcZwXIEKiDW0qWCDM4pJ2Dbb09UKkLWlaX2FRNfFB2K9mpdegz6AZv1QO2a-MLu3n12neUtYq-D7gAWZ?purpose=inline" },
        { id: 3, nome: "Bento Gonçalves", descricao: "Capital brasileira do vinho, Bento Gonçalves reúne vinícolas tradicionais, cultura italiana e paisagens encantadoras. O destino é ideal para quem busca experiências gastronômicas, passeios rurais e turismo enológico.", imagem: "https://images.openai.com/static-rsc-4/h5S7pzR6ajBLZE2n6EjnyyZT0tsbmHCHs0Bhjj-svR1WSH7UWtKtpoKn0afF_neG_ytpIP2iH8L9Y6yngkGf6mlal1fmU5LqAn_jEvY0tDujIlaj0yF4K6RjTQ8Wl558CGQG9ggsioyibsqhBXhCEX-op3k6UnnzgAbRT6GcQGQ?purpose=inline" }
      ]
    }
  ]
};

//Helpers
function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function goToDetail(id) {
  window.location.href = `detalhe.html?id=${id}`;
}

//Carousel + Cards

function buildHomePage() {
  const inner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");
  const grid = document.getElementById("cardGrid");

  if (!inner || !grid) return;

  const destaques = dados.lugares.filter(l => l.destaque);

  //Carousel
  destaques.forEach((lugar, i) => {
    const ind = document.createElement("button");
    ind.type = "button";
    ind.setAttribute("data-bs-target", "#carouselDestaques");
    ind.setAttribute("data-bs-slide-to", i);
    ind.setAttribute("aria-label", `Slide ${i + 1}`);
    if (i === 0) { ind.classList.add("active"); ind.setAttribute("aria-current", "true"); }
    indicators.appendChild(ind);

    //Slide
    const item = document.createElement("div");
    item.className = `carousel-item${i === 0 ? " active" : ""}`;
    item.innerHTML = `
      <div class="carousel-item-custom" onclick="goToDetail(${lugar.id})">
        <img src="${lugar.imagem_principal}" alt="${lugar.nome}" loading="${i === 0 ? 'eager' : 'lazy'}">
        <div class="carousel-overlay"></div>
        <div class="carousel-caption-custom">
          <p class="carousel-country">✦ ${lugar.pais}</p>
          <h2 class="carousel-title">${lugar.nome}</h2>
          <p class="carousel-desc">${lugar.descricao}</p>
          <button class="carousel-cta" onclick="event.stopPropagation(); goToDetail(${lugar.id})">
            Explorar destino →
          </button>
        </div>
      </div>
    `;
    inner.appendChild(item);
  });

  //All Cards
  dados.lugares.forEach(lugar => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <a href="detalhe.html?id=${lugar.id}" class="dest-card">
        <div class="dest-card-img">
          <img src="${lugar.imagem_principal}" alt="${lugar.nome}" loading="lazy">
          ${lugar.destaque ? '<span class="dest-card-badge">Destaque</span>' : ''}
        </div>
        <div class="dest-card-body">
          <p class="dest-card-country">${lugar.pais}</p>
          <h3 class="dest-card-name">${lugar.nome}</h3>
          <p class="dest-card-desc">${lugar.descricao}</p>
        </div>
        <div class="dest-card-footer">
          <span class="dest-card-date">${formatDate(lugar.data)}</span>
          <span class="dest-card-arrow">→</span>
        </div>
      </a>
    `;
    grid.appendChild(col);
  });
}

//DETAIL PAGE

function buildDetailPage() {
  const container = document.getElementById("detalheContainer");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const lugar = dados.lugares.find(l => l.id === id);

  if (!lugar) {
    container.innerHTML = `
      <div class="text-center py-5">
        <h2 style="font-family:var(--font-display); color:var(--gold)">Destino não encontrado</h2>
        <p style="color:var(--muted)" class="mt-2">O destino solicitado não existe na nossa base de dados.</p>
        <a href="index.html" style="color:var(--gold)">← Voltar para a lista</a>
      </div>
    `;
    return;
  }

  //Update page title
  document.title = `BMG Transportes — ${lugar.nome}`;

  container.innerHTML = `
    <!-- Hero da página de detalhe -->
    <div class="detail-hero">
      <img src="${lugar.imagem_principal}" alt="${lugar.nome}">
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-meta">
        <p class="detail-country">✦ ${lugar.pais}</p>
        <h1 class="detail-title">${lugar.nome}</h1>
        ${lugar.destaque ? '<span class="detail-badge">Destaque</span>' : ''}
      </div>
    </div>

    <!-- Informações Gerais (5 chips de info) -->
    <div class="section-label mb-3">
      <span>✦ Informações Gerais</span>
    </div>

    <div class="info-grid">
      <div class="info-chip">
        <p class="info-chip-label">País</p>
        <p class="info-chip-value">🌍 ${lugar.pais}</p>
      </div>
      <div class="info-chip">
        <p class="info-chip-label">Publicado em</p>
        <p class="info-chip-value">📅 ${formatDate(lugar.data)}</p>
      </div>
      <div class="info-chip">
        <p class="info-chip-label">Status</p>
        <p class="info-chip-value">${lugar.destaque ? '⭐ Destaque' : '📍 Regular'}</p>
      </div>
      <div class="info-chip">
        <p class="info-chip-label">Atrações</p>
        <p class="info-chip-value">🗺️ ${lugar.atracoes.length} locais</p>
      </div>
      <div class="info-chip">
        <p class="info-chip-label">Continente</p>
        <p class="info-chip-value">${getContinente(lugar.pais)}</p>
      </div>
    </div>

    <!-- Conteúdo descritivo -->
    <div class="detail-content-block">
      <h2 class="detail-content-title">Sobre ${lugar.nome}</h2>
      <p class="detail-content-text">${lugar.conteudo}</p>
    </div>

    <!-- Atrações (entidade secundária) -->
    <div class="atracoes-section">
      <div class="section-label">
        <span>✦ Atrações do Destino</span>
      </div>
      <div class="row g-4 mt-1">
        ${lugar.atracoes.map(a => `
          <div class="col-12 col-sm-6 col-md-4">
            <div class="atracao-card">
              <div class="atracao-img">
                <img src="${a.imagem}" alt="${a.nome}" loading="lazy">
              </div>
              <div class="atracao-body">
                <h4 class="atracao-name">${a.nome}</h4>
                <p class="atracao-desc">${a.descricao}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="text-center mt-5 mb-5">
      <a href="index.html" class="carousel-cta text-decoration-none" style="display:inline-flex">
        ← Explorar outros destinos
      </a>
    </div>
  `;
}

function getContinente(pais) {
  const mapa = {
    "França": "🇪🇺 Europa",
    "Japão": "🌏 Ásia",
    "Brasil": "🌎 América do Sul",
    "África do Sul": "🌍 África",
    "Espanha": "🇪🇺 Europa"
  };
  return mapa[pais] || "🌐 Internacional";
}

//INIT — detecta a página e chama a função correta

(function init() {
  const page = window.location.pathname;
  if (page.includes("detalhe")) {
    buildDetailPage();
  } else {
    buildHomePage();
  }
})();