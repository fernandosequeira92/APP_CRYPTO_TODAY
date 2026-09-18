import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Crypto } from '../../services/crypto';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,     // <--- ESSENCIAL!
  imports: [
    CommonModule,
    CurrencyPipe,
    DecimalPipe,
    RouterLink,         // <--- Adicione aqui
    RouterLinkActive    // <--- Adicione aqui (opcional, mas recomendado)
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar implements OnInit{

  bitcoin: any;
  ethereum: any;
  xrp: any;
  solana: any;

  constructor(private cryptoService: Crypto) {}

  collapsed = true;

  @Output() menuSelecionado = new EventEmitter<string>();

  menuAtual: string = 'developer';

  selecionarMenu(menu: string) {
    this.menuAtual = menu;
    this.menuSelecionado.emit(menu);
  }


/******************************************************************************************/
/* Método: ngOnInit()                                                                     */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Metodo que é executado após a inicialização do componente.                  */
/******************************************************************************************/
  ngOnInit(): void {
    this.carregarCriptos();
  }

/******************************************************************************************/
/* Método: getJSONData()                                                                  */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Recebe dados de criptomoedas no formato JSON.                               */
/******************************************************************************************/
  getJSONData(): void {
    this.cryptoService.getPrices().subscribe({
      next: (dados) => {
        console.log(dados);
      },

      error: (erro) => {
        console.error('Erro ao buscar criptomoedas:', erro);
      }
    });
  }

/******************************************************************************************/
/* Método: carregarCriptos()                                                              */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Carrega os dados das criptomoedas.                                          */
/******************************************************************************************/
  carregarCriptos(): void {

    this.cryptoService.getPrices().subscribe({
      next: (dados) => {

        this.bitcoin = dados.bitcoin;
        this.ethereum = dados.ethereum;
        this.xrp = dados.ripple;
        this.solana = dados.solana;

      },

      error: (erro) => {
        console.error('Erro ao carregar criptomoedas', erro);
      }
    });
  }

}