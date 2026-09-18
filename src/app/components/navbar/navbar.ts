import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,     // <--- ESSENCIAL!
  imports: [
    CommonModule,
    RouterLink,         // <--- Adicione aqui
    RouterLinkActive    // <--- Adicione aqui (opcional, mas recomendado)
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  collapsed = true;

  @Output() menuSelecionado = new EventEmitter<string>();

  menuAtual: string = 'developer';

  selecionarMenu(menu: string) {
    this.menuAtual = menu;
    this.menuSelecionado.emit(menu);
  }

}
