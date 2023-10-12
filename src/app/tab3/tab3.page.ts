import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { WeatherService } from 'src/services/weather.service';
import { WeatherData } from 'src/models/weather.models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  weatherData?: WeatherData;
  searchQuery: string = '';
  cardDataList: WeatherData[] = [];
  alertButtons: any;

  constructor(
    private weatherService: WeatherService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.cardDataList = this.getStoredWeatherData();
  }

  async openWeatherDetailsAlert(cityName: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Want to view more information?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        },
        {
          text: 'View',
          handler: () => {
            this.openWeatherDetails(cityName);
          }
        }
      ]
    });

    await alert.present();
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        if (this.weatherData) {
          this.storeWeatherData(this.weatherData);
        }
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim() !== '') {
      const cityName = this.searchQuery;
      this.getWeatherData(cityName);
      this.searchQuery = '';
    }
  }

  deleteCardData(cardData: WeatherData): void {
    const index = this.cardDataList.indexOf(cardData);
    if (index !== -1) {
      this.cardDataList.splice(index, 1);
      localStorage.setItem('weatherData', JSON.stringify(this.cardDataList));
    }
  }

  storeWeatherData(data: WeatherData): void {
    const key = data.location.name;
    const existingDataIndex = this.cardDataList.findIndex(item => item.location.name === key);
    if (existingDataIndex !== -1) {
      this.cardDataList[existingDataIndex] = data;
    } else {
      this.cardDataList.push(data);
    }
    localStorage.setItem('weatherData', JSON.stringify(this.cardDataList));
  }

  getStoredWeatherData(): WeatherData[] {
    const storedData = localStorage.getItem('weatherData');
    return storedData ? JSON.parse(storedData) : [];
  }

  openWeatherDetails(cityName: string): void {
    this.navCtrl.navigateForward(['/tabs/tab1', { cityName }]);
  }
}
