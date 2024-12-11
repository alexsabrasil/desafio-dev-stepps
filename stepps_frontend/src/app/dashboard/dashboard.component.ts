import { Component, OnInit } from '@angular/core';
import { IndicatorService } from '../services/indicator.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

interface Indicator {
  name: string;
  value: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  indicators: Indicator[] = [];
  username: string = '';
  chart: any;

  constructor(
    private indicatorService: IndicatorService,
    private authService: AuthService,
    private router: Router
  ) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.username = currentUser.username;
    }
  }

  ngOnInit() {
    this.loadIndicators();
  }

  loadIndicators() {
    this.indicatorService.getIndicators().subscribe({
      next: (data: Indicator[]) => {
        this.indicators = data;
        this.createChart();
      },
      error: (error) => {
        console.error('Erro ao carregar indicadores:', error);
        // Aqui você pode adicionar um tratamento de erro mais adequado
      }
    });
  }

  createChart() {
    const ctx = document.getElementById('indicatorChart') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.indicators.map(i => i.name),
        datasets: [{
          label: 'Valores',
          data: this.indicators.map(i => i.value),
          backgroundColor: this.indicators.map(i => i.color),
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}