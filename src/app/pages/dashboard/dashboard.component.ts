import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Crypto } from '../../services/crypto';
import { CurrencyPipe, DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
]
})

export class DashboardComponent implements OnInit {

  bitcoin: any;
  ethereum: any;
  xrp: any;
  solana: any;

  constructor(private cryptoService: Crypto) {}

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

/******************************************************************************************/
/* Método: ngOnInit()                                                                     */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Metodo que é executado após a inicialização do componente.                  */
/******************************************************************************************/
  ngOnInit(): void {
    this.cryptoService.getJSONData();
    this.cryptoService.carregarCriptosUnity('btc');
  }

// /******************************************************************************************/
// /* Método: getJSONData()                                                                  */
// /* ---------------------------------------------------------------------------------------*/
// /* Descrição: Recebe dados de criptomoedas no formato JSON.                               */
// /******************************************************************************************/
//   getJSONData(): void {
//     this.cryptoService.getPrices().subscribe({
//       next: (dados) => {
//         console.log(dados);
//       },

//       error: (erro) => {
//         console.error('Erro ao buscar criptomoedas:', erro);
//       }
//     });
//   }

// /******************************************************************************************/
// /* Método: carregarCriptos()                                                              */
// /* ---------------------------------------------------------------------------------------*/
// /* Descrição: Carrega os dados das criptomoedas.                                          */
// /******************************************************************************************/
//   carregarCriptos(): void {

//     this.cryptoService.getPrices().subscribe({
//       next: (dados) => {

//         this.bitcoin = dados.bitcoin;
//         this.ethereum = dados.ethereum;
//         this.xrp = dados.ripple;
//         this.solana = dados.solana;

//       },

//       error: (erro) => {
//         console.error('Erro ao carregar criptomoedas', erro);
//       }
//     });
//   }

}
