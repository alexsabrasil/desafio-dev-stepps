import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Indicator {
  name: string;
  value: number;
  icon: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  private apiUrl = 'http://localhost:8000/api/indicators';

  constructor(private http: HttpClient) { }

  getIndicators(): Observable<Indicator[]> {
    return this.http.get<Indicator[]>(this.apiUrl);
  }
}