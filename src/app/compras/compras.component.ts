import { Component, OnInit } from '@angular/core';
import { ComprasService } from './compras.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit {
  public productos = [];
  public categorias = [];
  public ubicaciones = [];
  public instanciaProductos = [];

  constructor(
    private comprasService: ComprasService
  ) // private messageService: MessageService,
  // private confirmationService: ConfirmationService
  {}

  ngOnInit(): void {
    this.comprasService.getInstanciasProducto().subscribe({
      next: (producto: any) => {
        this.instanciaProductos = producto;
      },
    });
  }
}
