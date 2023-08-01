# ProjectComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pasos a ejecutar para creación de librería NPM
1. Generar Proyecto Angular - npm 
`ng new name-project --create-application=false`
2. Generar proyecto de librerias
`ng generate library name-project-component-npm`
3. Generar Proyecto de prueba
`ng g application test-library`

## Pasos a ejecutar para creación de librería NPM
1. Generar componente en librería
`ng g component name-component --project=project-component-npm --skip-import`
2. Generar modulo del componente
`ng g module name-component --project=project-component-npm`
3. Generar modulo del componente
`ng g service name-component --project=project-component-npm`
3. Configurar el archivo public-api.ts
```typescript
export * from './lib/input-text/input-text.module';
export * from './lib/input-text/input-text.component';
export * from './lib/input-text/input-text.service';
```