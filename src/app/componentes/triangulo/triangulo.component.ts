import { Component } from '@angular/core'
@Component({
  selector: 'triangulo-component',
  templateUrl: 'triangulo.component.html'
})

export class TrianguloComponent{
  base : number;
  altura : number;
  resultado : string;
  calcular() : string {
    let area = Number(base) * Number(altura) / 2;
    resultado = 'A área é: ' +area;
  }
}
