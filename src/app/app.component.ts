import { Component, OnInit } from '@angular/core';
import * as Echo from 'laravel-echo';

declare var google:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data : any;
  map : any;
  lat : number = 9.0820;
  long : number = 8.6753;
  marker : any;
  lineCoordinates = [];

  ngOnInit() {

    this.subscribe();
    this.launchMap(this.lat, this.long);

  }


  subscribe(){
    var echo = new Echo({
      broadcaster: 'pusher',
      key: 'YOUR_PUSHER_KEY'
    });
    echo.channel('location')
      .listen('SendLocation', (e)=>{
         this.data = e.location;
          console.log(this.data);
          this.updateMap(this.data);
      });
  }

  launchMap(lat, lng){
    var nigeria= {lat: lat, lng: lng};
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: nigeria
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      animation:"bounce",
    });
    this.lineCoordinates.push(new google.maps.LatLng(this.lat, this.long));
  }

  updateMap(data){
    this.lat = parseFloat(data.lat);
    this.long = parseFloat(data.long);

    this.map.setCenter({lat:this.lat, lng:this.long, alt:0});
    this.marker.setPosition({lat:this.lat, lng:this.long, alt:0});

    this.lineCoordinates.push(new google.maps.LatLng(this.lat, this.long));

    var lineCoordinatesPath = new google.maps.Polyline({
      path: this.lineCoordinates,
      geodesic: true,
      map: this.map,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

  }

}
