import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Crypto {

  //Variáveis para armazenar as informações das criptomoedas
  array_bitcoin: any;
  array_ethereum: any;
  array_xrp: any;
  array_solana: any;  
  array_hyper: any;
  array_xlm: any;
  array_trump: any;

  //Variáveis para armazenar valores totais das criptomoedas
  total_bitcoin: any;
  total_ethereum: any;
  total_xrp: any;
  total_solana: any;  
  total_hyper: any;
  total_xlm: any;
  total_trump: any;

  //Cotação das Moedas
  cto_dolar: any;
  cto_euro: any;

  //Receber a URL do CoinGecko
  private readonly apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

  constructor(private http: HttpClient) {}

/******************************************************************************************/
/* Método: getPrices()                                                                    */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Recebe os preços das criptomoedas em BRL e a variação de 24h                */
/******************************************************************************************/
  getPrices(): Observable<any> {

    const params = {
      ids: 'bitcoin,ethereum,ripple,solana,hyperliquid,stellar,official-trump',
      vs_currencies: 'brl',
      include_24hr_change: 'true'
    };

    // const headers = new HttpHeaders({
    //   'x-cg-demo-api-key': 'SUA_CHAVE_AQUI'
    // });

    return this.http.get(this.apiUrl, {
      params,
      // headers
    });
    
  }

/******************************************************************************************/
/* Método: getJSONData()                                                                  */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Recebe dados de criptomoedas no formato JSON.                               */
/******************************************************************************************/
  getJSONData(): void {
    this.getPrices().subscribe({
      next: (dados) => {
        console.log(dados);
      },

      error: (erro) => {
        console.error('Erro ao buscar criptomoedas:', erro);
      }
    });
  }

/******************************************************************************************/
/* Método: carregarCriptosTotal()                                                              */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Carrega os dados totais das criptomoedas.                                   */
/******************************************************************************************/
  carregarCriptosTotal(): void {

    this.getPrices().subscribe({
      next: (dados) => {

        //Puxa os dados das criptomoedas e armazena nas variáveis (arrays)
            this.total_bitcoin = dados.bitcoin;
            this.total_ethereum = dados.ethereum;
            this.total_xrp = dados.ripple;
            this.total_solana = dados.solana;
            this.total_hyper = dados.hyperliquid;
            this.total_xlm = dados.stellar;
            this.array_trump = dados['official-trump'];
        },

      error: (erro) => {
        console.error('Erro ao carregar criptomoedas', erro);
      } //Fim Erro

    });//Fim Subscribe
  }// Fim metodo carregarCriptosTotal

/******************************************************************************************/
/* Método: carregarCriptosUnity()                                                              */
/* ---------------------------------------------------------------------------------------*/
/* Descrição: Carrega os dados das criptomoedas, um por vez.                              */
/******************************************************************************************/
  carregarCriptosUnity( nome: string): void {

    this.getPrices().subscribe({
      next: (dados) => {

        //Puxa os dados das criptomoedas e armazena nas variáveis (arrays)
        switch (nome) {
          case 'btc':
            this.array_bitcoin = dados.bitcoin;
            break;
          case 'eth':
            this.array_ethereum = dados.ethereum;
            break;
          case "xrp":
            this.array_xrp = dados.ripple;
            break;
          case "sol":
            this.array_solana = dados.solana;
            break;
          case "hyper":
            this.array_hyper = dados.hyperliquid;
            break;
          case "xlm":
            this.array_xlm = dados.stellar;
            break;
          case "trump":
            this.array_trump = dados['official-trump'];
            break;
        } // Fim Case

      }, // Fim Next

      error: (erro) => {
        console.error('Erro ao carregar criptomoedas', erro);
      } //Fim Erro

    });//Fim Subscribe

  }// Fim metodo carregarCriptosUnity

/******************************************************************************************/
/* FIM DA CLASSE                                                                          */
/* ---------------------------------------------------------------------------------------*/
}