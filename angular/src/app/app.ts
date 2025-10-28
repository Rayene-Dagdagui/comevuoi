import { Component } from '@angular/core';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Studente } from './studente/studente';
import { Pagina3 } from './pagina3/pagina3';
@Component({
selector: 'app-root',
imports: [Pagina1,Pagina2, Studente, Pagina3, RouterOutlet,RouterLink,],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
}