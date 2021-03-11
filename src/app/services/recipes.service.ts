import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const hostPath =  environment.production ? "" : "http://127.0.0.1:8080";

@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(`${hostPath}/api/recipes/`);
  }
}