import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from "./animal/animal";
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl;
  }

  getAnimalList(): Observable<Animal[]> {
    return this.http.get<any[]>(this.apiUrl + 'farm');
  }

  addAnimal(name: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.apiUrl + 'farm/', JSON.stringify(name), httpOptions);
  }

  deleteAnimal(animal: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete(this.apiUrl + 'farm/' + animal, httpOptions);
  }
}
