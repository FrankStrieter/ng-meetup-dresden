# DD-Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

it shows the usage of libraries, schematics and Angular Elements in Angular 6 as shown at [Angular Meetup Dresden](https://www.meetup.com/de-DE/Angular-Meetup-Dresden/) 

How we get to this project:
```bash
# create the project
ng new dd-demo --prefix=ngdd --styles=scss

# add library @angular/material to the project
ng add @angular/material

# add a Material-Table to the project using schematics
ng generate @angular/material:material-table --name=product-list

# change the selector to ngdd-product-list and reference it in the app-component

# add a new library to the project
ng generate library common-components

# remove generated components and services from the library. Also remove them from the exports in public-api.ts

# generate a component called header in the library
ng g c header --project=common-components

# export the component in the module and reference it in the app-component. import the library from "common-components", the path is set in the tsconfig.json

# build the library
ng build --project=common-components

# add library @angular/elements to the project
ng add @angular/elements

# create a custom element in the common-components module (ddm-header) [you can see it in the current common-components.module.ts] 

# remove the HeaderComponent from the exports-array anp put it in the entryComponents-array

# build the library
ng build --project=common-components

# reference the costum element "ddm-header" in the index.html

# build the project in production mode
ng build

# serve the project with the simple http-server included in dev-dependencies
npx http-server ./dist/dd-demo
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


