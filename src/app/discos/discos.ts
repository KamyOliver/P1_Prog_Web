import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-discos',
  styleUrl: './discos.css',
  templateUrl: './discos.html',
})
export class Discos implements OnInit {

  static produtos: Produto[] = [

    // ==========================================
    // GRUNGE - ALICE IN CHAINS
    // ==========================================

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


    // ==========================================
    // GRUNGE - NIRVANA
    // ==========================================

    {
      codigo: '002-01',
      genero: 'Grunge',
      banda: 'Nirvana',
      album: 'Nevermind',
      valor: 330.00,
      estado: 'VG',
      estoque: 2
    },

    {
      codigo: '002-02',
      genero: 'Grunge',
      banda: 'Nirvana',
      album: 'In Utero',
      valor: 330.00,
      estado: 'NM',
      estoque: 3
    },

    {
      codigo: '002-03',
      genero: 'Grunge',
      banda: 'Nirvana',
      album: 'MTV Unplugged',
      valor: 350.00,
      estado: 'Good',
      estoque: 5
    },

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


    // ==========================================
    // GRUNGE - SOUNDGARDEN
    // ==========================================

    {
      codigo: '003-01',
      genero: 'Grunge',
      banda: 'Soundgarden',
      album: 'Badmotorfinger',
      valor: 300.00,
      estado: 'VG',
      estoque: 5
    },

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


    // ==========================================
    // GRUNGE - STONE TEMPLE PILOTS
    // ==========================================

    {
      codigo: '003-03',
      genero: 'Grunge',
      banda: 'Stone Temple Pilots',
      album: 'Purple',
      valor: 430.00,
      estado: 'Mint',
      estoque: 3
    },

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


    // ==========================================
    // ROCK - THE BEATLES
    // ==========================================

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

    {
      codigo: '004-02',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'Let It Be',
      valor: 300.00,
      estado: 'Mint',
      estoque: 3
    },

    {
      codigo: '004-03',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'Abbey Road',
      valor: 330.00,
      estado: 'Good',
      estoque: 4
    },

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

    {
      codigo: '004-06',
      genero: 'Rock',
      banda: 'The Beatles',
      album: 'Rubber Soul',
      valor: 300.00,
      estado: 'NM',
      estoque: 4
    },

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


    // ==========================================
    // ROCK - LED ZEPPELIN
    // ==========================================

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
    },

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


    // ==========================================
    // ROCK - PINK FLOYD
    // ==========================================

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


    // ==========================================
    // RAP - RACIONAIS
    // ==========================================

    {
      codigo: '007-01',
      genero: 'Rap',
      banda: 'Racionais',
      album: 'Box: Nada Como um Dia',
      valor: 1000.00,
      estado: 'NM',
      estoque: 3
    },

    {
      codigo: '007-02',
      genero: 'Rap',
      banda: 'Racionais',
      album: 'Sobrevivendo no Inferno',
      valor: 650.00,
      estado: 'NM',
      estoque: 7
    },

    {
      codigo: '007-03',
      genero: 'Rap',
      banda: 'Racionais',
      album: 'Raio X do Brasil',
      valor: 320.00,
      estado: 'NM',
      estoque: 2
    },


    // ==========================================
    // MPB - MARCOS VALLE
    // ==========================================

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

    {
      codigo: '008-02',
      genero: 'MPB',
      banda: 'Marcos Valle',
      album: 'Marcos Valle',
      valor: 220.00,
      estado: 'NM',
      estoque: 7
    },


    // ==========================================
    // MPB - MILTON NASCIMENTO
    // ==========================================

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

    {
      codigo: '009-02',
      genero: 'MPB',
      banda: 'Milton Nascimento',
      album: 'Clube da Esquina 2',
      valor: 350.00,
      estado: 'NM',
      estoque: 4
    }

  ];

  produtos = Discos.produtos;

  // ==========================================
  // FILTROS
  // ==========================================

  categoriasSelecionadas: string[] = [];
  artistasSelecionados: string[] = [];

  categoriasAplicadas: string[] = [];
  artistasAplicados: string[] = [];

  artistasPorCategoria: { [key: string]: string[] } = {
    Grunge: [
      'Alice in Chains',
      'Nirvana',
      'Soundgarden',
      'Stone Temple Pilots'
    ],
    Rock: [
      'The Beatles',
      'Led Zeppelin',
      'Pink Floyd'
    ],
    Rap: [
      'Racionais'
    ],
    MPB: [
      'Marcos Valle',
      'Milton Nascimento'
    ]
  };

  paginaAtual = 1;
  itensPorPagina = 9;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 480) {
        this.itensPorPagina = 4;
      }
    }
  }

  // ==========================================
  // SELECIONAR GÊNERO
  // ==========================================

  selecionarCategoria(categoria: string, evento: Event) {
    const checkbox = evento.target as HTMLInputElement;

    if (checkbox.checked) {
      this.categoriasSelecionadas.push(categoria);
    } else {
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(
        item => item !== categoria
      );

      this.artistasSelecionados = this.artistasSelecionados.filter(
        artista => this.artistasDisponiveis.includes(artista)
      );
    }
  }

  // ==========================================
  // SELECIONAR ARTISTA
  // ==========================================

  selecionarArtista(artista: string, evento: Event) {
    const checkbox = evento.target as HTMLInputElement;

    if (checkbox.checked) {
      this.artistasSelecionados.push(artista);
    } else {
      this.artistasSelecionados = this.artistasSelecionados.filter(
        item => item !== artista
      );
    }
  }

  // ==========================================
  // ARTISTAS DISPONÍVEIS
  // ==========================================

  get artistasDisponiveis(): string[] {
    let artistas: string[] = [];

    for (const categoria of this.categoriasSelecionadas) {
      artistas.push(...(this.artistasPorCategoria[categoria] || []));
    }

    return [...new Set(artistas)];
  }

  // ==========================================
  // APLICAR FILTROS
  // ==========================================

  aplicarFiltros() {
    this.categoriasAplicadas = [...this.categoriasSelecionadas];
    this.artistasAplicados = [...this.artistasSelecionados];
    this.paginaAtual = 1;
  }

  // ==========================================
  // PRODUTOS FILTRADOS
  // ==========================================

  get produtosFiltrados() {
    return this.produtos.filter(produto => {
      const categoriaCorreta =
        this.categoriasAplicadas.length === 0 ||
        this.categoriasAplicadas.includes(produto.genero);

      const artistaCorreto =
        this.artistasAplicados.length === 0 ||
        this.artistasAplicados.includes(produto.banda);

      return categoriaCorreta && artistaCorreto;
    });
  }

  // ==========================================
  // LIMPAR FILTROS
  // ==========================================

  limparFiltros() {
    this.categoriasSelecionadas = [];
    this.artistasSelecionados = [];

    this.categoriasAplicadas = [];
    this.artistasAplicados = [];

    this.paginaAtual = 1;

    const checkboxes = document.querySelectorAll(
      '.caixa-filtros input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  // ==========================================
  // PRODUTOS DA PÁGINA ATUAL
  // ==========================================

  get produtosPaginados() {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;

    return this.produtosFiltrados.slice(inicio, fim);
  }

  // ==========================================
  // QUANTIDADE TOTAL DE PÁGINAS
  // ==========================================

  get totalPaginas() {
    return Math.ceil(this.produtosFiltrados.length / this.itensPorPagina);
  }

  // ==========================================
  // PÁGINAS DO COMPUTADOR
  // ==========================================

  get paginas() {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  // ==========================================
  // PÁGINAS DO CELULAR
  // ==========================================

  get paginasMobile() {
    const quantidadeVisivel = 4;

    if (this.totalPaginas <= quantidadeVisivel) {
      return this.paginas;
    }

    let inicio = this.paginaAtual - 2;

    if (inicio < 1) {
      inicio = 1;
    }

    if (inicio + quantidadeVisivel - 1 > this.totalPaginas) {
      inicio = this.totalPaginas - quantidadeVisivel + 1;
    }

    return Array.from({ length: quantidadeVisivel }, (_, i) => inicio + i);
  }

  // ==========================================
  // TROCA DE PÁGINA
  // ==========================================

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
    }
  }

  // ==========================================
  // ADICIONAR PRODUTO À CESTA
  // ==========================================

  comprar(produto: Produto) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let cesta: ItemCesta[] = [];
    const json = localStorage.getItem('cesta');

    if (json != null) {
      try {
        cesta = JSON.parse(json);
      } catch {
        cesta = [];
      }
    }

    const itemExistente = cesta.find(
      item => item.produto.codigo === produto.codigo
    );

    const valorUnitario = (produto.desconto && produto.desconto > 0 && produto.valorDesconto !== undefined)
      ? produto.valorDesconto
      : produto.valor;

    if (itemExistente) {
      if (itemExistente.quantidade < produto.estoque) {
        itemExistente.quantidade++;
        itemExistente.valorTotal = itemExistente.quantidade * valorUnitario;
      }
    } else {
      const novoItem = new ItemCesta();
      novoItem.produto = produto;
      novoItem.quantidade = 1;
      novoItem.valorTotal = valorUnitario;

      cesta.push(novoItem);
    }

    localStorage.setItem('cesta', JSON.stringify(cesta));

    // Redireciona direto para a página da cesta
    this.router.navigate(['/cesta']);
  }
}