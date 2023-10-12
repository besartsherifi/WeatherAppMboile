import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from 'src/models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherData?: WeatherData;

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(environment.XRapidKeyHeaderName, environment.XRapidKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }

  setWeatherData(data: WeatherData): void {
    this.weatherData = data;
  }

  getStoredWeatherData(): WeatherData | undefined {
    return this.weatherData;
  }
}
