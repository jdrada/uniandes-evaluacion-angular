import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css'],
})
export class ListarCafeComponent implements OnInit {
  cafes: Cafe[] = [];
  totalOrigen: number = 0;
  totalBlend: number = 0;

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(
      (data: Cafe[]) => {
        this.cafes = data;
        this.calculateTotals();
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  private calculateTotals(): void {
    this.totalOrigen = this.cafes.filter(
      (cafe) => cafe.tipo === 'Café de Origen'
    ).length;
    this.totalBlend = this.cafes.filter((cafe) => cafe.tipo === 'Blend').length;
  }
}
