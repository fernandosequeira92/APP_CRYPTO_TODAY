import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Crypto {

  //Receber a URL do CoinGecko
  private readonly apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

  constructor(private http: HttpClient) {}

  //Recebe is preços das criptomoedas em BRL e a variação de 24h
  getPrices(): Observable<any> {

    const params = {
      ids: 'bitcoin,ethereum,ripple,solana',
      vs_currencies: 'brl',
      include_24hr_change: 'true'
    };

    return this.http.get(this.apiUrl, { params });
  }
}