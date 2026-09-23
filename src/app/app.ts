import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { NavCrypto } from './components/nav-crypto/nav-crypto';
import { NavCoins } from './components/nav-coins/nav-coins';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavCrypto, Footer, NavCoins, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'APP_CRYPTO';
}
