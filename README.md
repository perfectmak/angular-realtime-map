# Angular Realtime Map
This project displays a map with a marker and the position of the marker gets updated when a pusher event is received. This is the frontend part to the [laravel-realtime-map](https://github.com/perfectmak/laravel-realtime-map) project. It also has an accompanying tutorial that can be found [here](https://pusher.com/tutorials/realtime-map-laravel/).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You would need the following softwares installed on your local machine:

- Node.js: Download Node.js and NPM [here](https://nodejs.org/en/download/)
- Angular CLI: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### 1: Update Pusher Credentials
Change the value of the `PUSHER_API_KEY` in `src/app/app.component.ts` to your Pusher projects credentials.

### 2: Install dependencies
Run `npm install` to install a Node dependencies.

### 2: Start Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### 3: Test the Application
You would need to ensure that the backend server for this application is running. See [here](https://github.com/perfectmak/laravel-realtime-map) for instructions to setup.
In order to see the marker move on the map, you will need to send `App\Events\SendLocation` events to the location channel. The easiest way to do this is by using the event creator on the [Pusher Debug Console](https://dashboard.pusher.com/). Here is a sample data format that can be used to trigger an update:

```JSON
{
  "location": {
    "lat": "9.084999999999999",
    "long": "8.678299999999998"
  }
}
```

Alternatively, location updates can also be triggered by sending web requests to the Laravel application. Here is an Angular function that can be used to send location update requests:

```js
sendLocation(lat: string, long: string) {
  const serverUrl = 'http://localhost:8000';
  const params = new URLSearchParams();
  params.set("lat", lat);
  params.set("long", long);

  return this.http.post(serverUrl + '/map', params);
}
```
Note that the above function is assuming that the Laravel application is accessible via 'http://localhost:8000', you can update the `serverUrl` to your own configuration.


## Built With
* [Angular](https://angular.io/)
* [Laravel](https://laravel.com/)
* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
