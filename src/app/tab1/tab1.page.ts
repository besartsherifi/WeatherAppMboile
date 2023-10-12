import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/services/weather.service';
import { WeatherData } from 'src/models/weather.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  weatherData?: WeatherData;
  searchQuery = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const cityName = this.route.snapshot?.paramMap.get('cityName');
    if (cityName) {
      this.getWeatherData(cityName);
    } else {
      this.getWeatherData('Skopje');
    }
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/tabs/tab3', { cityName: this.searchQuery }]);
    }
  }
}
