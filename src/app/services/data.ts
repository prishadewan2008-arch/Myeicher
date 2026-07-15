// data.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// 1. Define your data structure
export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 2. Inject HttpClient using the modern inject() function
  // private http = inject(HttpClient); 
  // private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  // // 3. Create a method that returns an Observable
  // getPosts(): Observable<Post[]> {
  //   console.log(this.http.get<Post[]>(this.apiUrl), "API response");
  //   return this.http.get<Post[]>(this.apiUrl);
  // }

  constructor() {}

  private data = [
  {
    "id": "fleet-tracking",
    "title": "Fleet Tracking",
    "items": [
      { "name": "Track", "route": "/track" },
      { "name": "Location Sharing", "route": "/location-sharing" }
    ]
  },
  {
    "id": "my-organisation",
    "title": "My Organization",
    "items": [
      { "name": "My Fleet", "route": "/my-fleet" },
      { "name": "Manage Team", "route": "/manage-team" },
      { "name": "My Site", "route": "/my-site" },
      { "name": "My POI", "route": "/my-poi" },
      { "name": "My Routes", "route": "/my-routes" },
      { "name": "My Documents", "route": "/my-documents" },
      { "name": "Manage Groups", "route": "/manage-groups" }
    ]
  },
  {
    "id": "uptime-management",
    "title": "Uptime Management",
    "items": [
      { "name": "Fleet Health", "route": "/fleet-health" },
      { "name": "Uptime Management", "route": "/uptime-management" }
    ]
  },
  {
    "id": "fleet-monitoring",
    "title": "Fleet Monitoring",
    "items": [
      { "name": "My Dashboard", "route": "/dashboard" },
      { "name": "Fleet Insights", "route": "/fleet-insights" },
      { "name": "Performance Comparison", "route": "/performance-comparison" },
      { "name": "Hotspot Zone", "route": "/hotspot-zone" }
    ]
  },
  {
    "id": "alerts",
    "title": "Alerts",
    "items": [
      { "name": "My Alerts", "route": "/alerts" },
      { "name": "Alert Dashboard", "route": "/alert-dashboard" }
    ]
  },
  {
    "id": "fuel-management",
    "title": "Fuel Management",
    "items": [
      { "name": "Fuel Refill & Drain", "route": "/fuel-refill-drain" },
      { "name": "Fuel Graph", "route": "/fuel-graph" },
      { "name": "Charging Summary", "route": "/charging-summary" },
      { "name": "Charge & Discharge Graph", "route": "/charge-discharge-graph" },
      { "name": "Charging Station Locator", "route": "/charging-station-locator" }
    ]
  },
  {
    "id": "trip-management",
    "title": "Trip Management",
    "badge": "Beta",
    "items": [
      { "name": "Route & Trip Insights", "route": "/route-trip-insights" },
      { "name": "Hub Route Report", "route": "/hub-route-report" },
      { "name": "Location Geofence", "route": "/location-geofence" },
      { "name": "Route Geofence", "route": "/route-geofence" }
    ]
  },
  {
    "id": "reports",
    "title": "Reports",
    "items": [
      { "name": "Monthly Report", "route": "/monthly-report" },
      { "name": "Tipper Report", "route": "/tipper-report" },
      { "name": "Reports", "route": "/reports" }
    ]
  },
  {
    "id": "smart-solutions",
    "title": "Smart Solutions",
    "items": [
      { "name": "API Service", "route": "/api-service" },
      { "name": "VLTD & AIS 140 Certification", "route": "/vltd-ais140" },
      { "name": "VLTD Certificate", "route": "/vltd-certificate" },
      { "name": "DSMS", "route": "/dsms" },
      { "name": "Vehicle Immobilizer", "route": "/vehicle-immobilizer" },
      { "name": "Digital Lock", "route": "/digital-lock" },
      { "name": "Cargo Monitoring", "route": "/cargo-monitoring" }
    ]
  }
]

getMenu(): Observable<any[]> {
  return of(this.data);

}
}
