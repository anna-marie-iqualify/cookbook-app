import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get('/api/recipes/');
  }
}