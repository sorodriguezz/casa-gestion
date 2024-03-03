import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private url = 'http://192.168.100.49:3001/api'

  constructor(private httpClient: HttpClient) { }

  public getCategorias() {
    return this.httpClient.get(`${this.url}/categoria`);
  }

  public getProductos() {
    return this.httpClient.get(`${this.url}/producto`);
  }

  public getUbicaciones() {
    return this.httpClient.get(`${this.url}/ubicacion`);
  }

  public getInstanciasProducto() {
    return this.httpClient.get(`${this.url}/instancia-producto`);
  }
}
