import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-promocoes',
  styleUrl: './promocoes.css',
  templateUrl: './promocoes.html',
})

/* Colocando imagens dos discos na página de promoções e detalhes */
export class Promocoes implements OnInit {

 static produtos: Produto[] = [

    // Pink Floyd - Animals
    {
      codigo: '006-03',
      genero: 'Rock',
      banda: 'Pink Floyd',
      album: 'Animals',
      valor: 400.00,
      desconto: 10,
      valorDesconto: 360.00,
      estado: 'Mint',
      estoque: 2
    },

    // Alice in Chains - Dirt
    {
      codigo: '001-01',
      genero: 'Grunge',
      banda: 'Alice in Chains',
      album: 'Dirt',
      valor: 350.00,
      desconto: 10,
      valorDesconto: 315.00,
      estado: 'Mint',
      estoque: 2
    },

    // Marcos Valle - Previsão do Tempo
    {
      codigo: '008-01',
      genero: 'MPB',
      banda: 'Marcos Valle',
      album: 'Previsão do Tempo',
      valor: 180.00,
      desconto: 15,
      valorDesconto: 153.00,
      estado: 'NM',
      estoque: 5
    },

    // The Beatles - Sgt. Pepper's
    {
      codigo: '004-05',
      genero: 'Rock',
      banda: 'The Beatles',
      album: "Sgt. Pepper's",
      valor: 340.00,
      desconto: 5,
      valorDesconto: 323.00,
      estado: 'Mint',
      estoque: 5
    },

    // Nirvana - Incesticide
    {
      codigo: '002-05',
      genero: 'Grunge',
      banda: 'Nirvana',
      album: 'Incesticide',
      valor: 430.00,
      desconto: 15,
      valorDesconto: 365.50,
      estado: 'NM',
      estoque: 8
    },

    // Led Zeppelin - Physical Graffiti
    {
      codigo: '005-01',
      genero: 'Rock',
      banda: 'Led Zeppelin',
      album: 'Physical Graffiti',
      valor: 450.00,
      desconto: 15,
      valorDesconto: 382.50,
      estado: 'Good',
      estoque: 7
    },

    // Alice in Chains - Facelift
    {
      codigo: '001-03',
      genero: 'Grunge',
      banda: 'Alice in Chains',
      album: 'Facelift',
      valor: 430.00,
      desconto: 15,
      valorDesconto: 365.50,
      estado: 'Good',
      estoque: 6
    },

    // Pink Floyd - The Dark Side of the Moon
    {
      codigo: '006-01',
      genero: 'Rock',
      banda: 'Pink Floyd',
      album: 'The Dark Side of the Moon',
      valor: 390.00,
      desconto: 5,
      valorDesconto: 370.50,
      estado: 'Good',
      estoque: 3
    },

    // The Beatles - Revolver
    {
      codigo: '004-01',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'Revolver',
      valor: 300.00,
      desconto: 10,
      valorDesconto: 270.00,
      estado: 'VG',
      estoque: 1
    },

    // Stone Temple Pilots - Core
    {
      codigo: '003-04',
      genero: 'Grunge',
      banda: 'Stone Temple Pilots',
      album: 'Core',
      valor: 480.00,
      desconto: 13,
      valorDesconto: 417.60,
      estado: 'Good',
      estoque: 2
    },

    // Pink Floyd - Atom Heart Mother
    {
      codigo: '006-05',
      genero: 'Rock',
      banda: 'Pink Floyd',
      album: 'Atom Heart Mother',
      valor: 350.00,
      desconto: 10,
      valorDesconto: 315.00,
      estado: 'NM',
      estoque: 5
    },

    // Alice in Chains - Jar Of Flies
    {
      codigo: '001-02',
      genero: 'Grunge',
      banda: 'Alice in Chains',
      album: 'Jar Of Flies',
      valor: 300.00,
      desconto: 10,
      valorDesconto: 270.00,
      estado: 'Good',
      estoque: 4
    },

    // Led Zeppelin - Led Zeppelin IV
    {
      codigo: '005-04',
      genero: 'Rock',
      banda: 'Led Zeppelin',
      album: 'Led Zeppelin IV',
      valor: 400.00,
      desconto: 5,
      valorDesconto: 380.00,
      estado: 'NM',
      estoque: 2
    },

    // Milton Nascimento - Clube da Esquina 1
    {
      codigo: '009-01',
      genero: 'MPB',
      banda: 'Milton Nascimento',
      album: 'Clube da Esquina 1',
      valor: 1200.00,
      desconto: 10,
      valorDesconto: 1080.00,
      estado: 'NM',
      estoque: 3
    },

    // Pink Floyd - Wish You Were Here
    {
      codigo: '006-02',
      genero: 'Rock',
      banda: 'Pink Floyd',
      album: 'Wish You Were Here',
      valor: 380.00,
      desconto: 10,
      valorDesconto: 342.00,
      estado: 'NM',
      estoque: 4
    },

    // The Beatles - Help
    {
      codigo: '004-07',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'Help',
      valor: 330.00,
      desconto: 10,
      valorDesconto: 297.00,
      estado: 'Good',
      estoque: 3
    },

    // Soundgarden - Superunknown
    {
      codigo: '003-02',
      genero: 'Grunge',
      banda: 'Soundgarden',
      album: 'Superunknown',
      valor: 440.00,
      desconto: 10,
      valorDesconto: 396.00,
      estado: 'Good',
      estoque: 4
    },

    // Led Zeppelin - Houses of the Holy
    {
      codigo: '005-02',
      genero: 'Rock',
      banda: 'Led Zeppelin',
      album: 'Houses of the Holy',
      valor: 370.00,
      desconto: 5,
      valorDesconto: 351.50,
      estado: 'NM',
      estoque: 3
    },

    // Alice in Chains - Alice in Chains
    {
      codigo: '001-04',
      genero: 'Grunge',
      banda: 'Alice in Chains',
      album: 'Alice in Chains',
      valor: 350.00,
      desconto: 15,
      valorDesconto: 297.50,
      estado: 'Mint',
      estoque: 8
    },

    // Pink Floyd - Meddle
    {
      codigo: '006-04',
      genero: 'Rock',
      banda: 'Pink Floyd',
      album: 'Meddle',
      valor: 400.00,
      desconto: 10,
      valorDesconto: 360.00,
      estado: 'Good',
      estoque: 7
    },

    // The Beatles - The Beatles (White Album)
    {
      codigo: '004-04',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'The Beatles (White Album)',
      valor: 520.00,
      desconto: 5,
      valorDesconto: 494.00,
      estado: 'NM',
      estoque: 2
    },

    // Nirvana - Bleach
    {
      codigo: '002-04',
      genero: 'Grunge',
      banda: 'Nirvana',
      album: 'Bleach',
      valor: 350.00,
      desconto: 10,
      valorDesconto: 315.00,
      estado: 'NM',
      estoque: 7
    },

    // Led Zeppelin - Presence
    {
      codigo: '005-03',
      genero: 'Rock',
      banda: 'Led Zeppelin',
      album: 'Presence',
      valor: 350.00,
      desconto: 5,
      valorDesconto: 332.50,
      estado: 'Mint',
      estoque: 5
    }

  ];
  produtos = Promocoes.produtos;

// =====================================
// FILTROS
// =====================================

// Categorias e artistas selecionados
categoriasSelecionadas: string[] = [];
artistasSelecionados: string[] = [];

// Filtros aplicados quando clicar no botão FILTRAR
categoriasAplicadas: string[] = [];
artistasAplicados: string[] = [];

// Artistas de cada categoria
artistasPorCategoria: { [key: string]: string[] } = {

  Grunge: [
    'Alice in Chains',
    'Nirvana',
    'Soundgarden',
    'Stone Temple Pilots'
  ],

  Rock: [
    'Pink Floyd',
    'Led Zeppelin',
    'The Beatles'
  ],

  MPB: [
    'Marcos Valle',
    'Milton Nascimento'
  ],

  Rap: [
    'Racionais MCs'
  ]

};


// =====================================
// SELECIONAR CATEGORIA
// =====================================

selecionarCategoria(categoria: string, evento: Event) {

  const checkbox = evento.target as HTMLInputElement;

  if (checkbox.checked) {

    this.categoriasSelecionadas.push(categoria);

  } else {

    this.categoriasSelecionadas =
      this.categoriasSelecionadas.filter(
        item => item !== categoria
      );

  }

}


// =====================================
// SELECIONAR ARTISTA
// =====================================

selecionarArtista(artista: string, evento: Event) {

  const checkbox = evento.target as HTMLInputElement;

  if (checkbox.checked) {

    this.artistasSelecionados.push(artista);

  } else {

    this.artistasSelecionados =
      this.artistasSelecionados.filter(
        item => item !== artista
      );

  }

}
// =====================================
// LIMPAR FILTROS
// =====================================

limparFiltros() {

  // Limpa categorias e artistas selecionados

  this.categoriasSelecionadas = [];
  this.artistasSelecionados = [];


  // Limpa os filtros aplicados

  this.categoriasAplicadas = [];
  this.artistasAplicados = [];


  // Volta para a primeira página

  this.paginaAtual = 1;


  // Desmarca visualmente todos os checkboxes

  const checkboxes = document.querySelectorAll(
    '.caixa-filtros input[type="checkbox"]'
  );

  checkboxes.forEach((checkbox) => {

    (checkbox as HTMLInputElement).checked = false;

  });

}


// =====================================
// MOSTRAR ARTISTAS DAS CATEGORIAS
// =====================================

get artistasDisponiveis(): string[] {

  let artistas: string[] = [];

  for (const categoria of this.categoriasSelecionadas) {

    artistas.push(
      ...(this.artistasPorCategoria[categoria] || [])
    );

  }

  return [...new Set(artistas)];

}


// =====================================
// PAGINAÇÃO
// =====================================

paginaAtual = 1;

itensPorPagina = 9;


// Detecta se está no navegador

constructor(
  @Inject(PLATFORM_ID) private platformId: Object
) {}


ngOnInit() {

  if (isPlatformBrowser(this.platformId)) {

    if (window.innerWidth <= 480) {
      this.itensPorPagina = 4;
    }

  }

}


// =====================================
// PRODUTOS DA PÁGINA ATUAL
// =====================================

get produtosPaginados() {

  const inicio =
    (this.paginaAtual - 1) * this.itensPorPagina;

  const fim =
    inicio + this.itensPorPagina;

  return this.produtosFiltrados.slice(
    inicio,
    fim
  );

}


// =====================================
// QUANTIDADE TOTAL DE PÁGINAS
// =====================================

get totalPaginas() {

  return Math.ceil(
    this.produtosFiltrados.length /
    this.itensPorPagina
  );

}


// =====================================
// PÁGINAS DO COMPUTADOR
// =====================================

get paginas() {

  return Array.from(
    { length: this.totalPaginas },
    (_, i) => i + 1
  );

}


// =====================================
// PÁGINAS DO CELULAR
// =====================================

get paginasMobile() {

  const quantidadeVisivel = 4;

  if (this.totalPaginas <= quantidadeVisivel) {
    return this.paginas;
  }

  let inicio = this.paginaAtual - 2;

  if (inicio < 1) {
    inicio = 1;
  }

  if (
    inicio + quantidadeVisivel - 1 >
    this.totalPaginas
  ) {

    inicio =
      this.totalPaginas -
      quantidadeVisivel +
      1;

  }

  return Array.from(
    { length: quantidadeVisivel },
    (_, i) => inicio + i
  );

}


// =====================================
// TROCA DE PÁGINA
// =====================================

mudarPagina(pagina: number) {

  if (
    pagina >= 1 &&
    pagina <= this.totalPaginas
  ) {

    this.paginaAtual = pagina;

  }

}


// =====================================
// APLICAR FILTROS
// =====================================

aplicarFiltros() {

  this.categoriasAplicadas = [
    ...this.categoriasSelecionadas
  ];

  this.artistasAplicados = [
    ...this.artistasSelecionados
  ];

  // Volta para a primeira página

  this.paginaAtual = 1;

}


// =====================================
// PRODUTOS FILTRADOS
// =====================================

get produtosFiltrados() {

  return this.produtos.filter(produto => {

    // Verifica a categoria

    const categoriaCorreta =
      this.categoriasAplicadas.length === 0 ||
      this.categoriasAplicadas.includes(produto.genero);


    // Verifica o artista

    const artistaCorreto =
      this.artistasAplicados.length === 0 ||
      this.artistasAplicados.includes(produto.banda);


    return categoriaCorreta && artistaCorreto;

  });

}

}