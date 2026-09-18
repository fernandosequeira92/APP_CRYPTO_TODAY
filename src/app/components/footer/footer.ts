import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,     // <--- ESSENCIAL!
  imports: [
    CommonModule,
    RouterLink,         // <--- Adicione aqui
    RouterLinkActive    // <--- Adicione aqui (opcional, mas recomendado)
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  collapsed = true;
}
