import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Crypto } from '../../services/crypto';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-nav-crypto',
  standalone: true,     // <--- ESSENCIAL!
  imports: [
    CommonModule,
    CurrencyPipe,
    DecimalPipe,
    RouterLink,         // <--- Adicione aqui
    RouterLinkActive    // <--- Adicione aqui (opcional, mas recomendado)
  ],
  templateUrl: './nav-crypto.html',
  styleUrl: './nav-crypto.css',
})
export class NavCrypto implements OnInit {

  constructor(public cryptoService: Crypto) {}

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
    this.cryptoService.carregarCriptosTotal();  
  }
}