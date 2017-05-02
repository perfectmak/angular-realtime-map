# Pusher

This project is the frontend part to the [laravel-realtime-map](https://github.com/perfectmak/laravel-realtime-map) project.

It displays the map and the marker position gets updated when a pusher event is received.



NOTE: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 
version 1
.0.0.

## Setup

### Update Pusher Credentials
Change the value of the `PUSHER_API_KEY` in `src/app/app.component.ts` to your Pusher projects 
credentials.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
