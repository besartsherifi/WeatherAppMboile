# WeatherAppMboile
Install npm packages
Install the npm packages described in the package.json and verify that it works:

npm install
npm start
The npm start command builds (compiles TypeScript and copies assets) the application into dist/, watches for changes to the source files, and runs lite-server on port 3000.

Shut it down manually with Ctrl-C.

npm scripts
These are the most useful commands defined in package.json:

npm start - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
npm run build - runs the TypeScript compiler and asset copier once.
npm run build:watch - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into dist/.
npm run lint - runs tslint on the project files.
npm run serve - runs lite-server.
These are the test-related scripts:

npm test - builds the application and runs Intern tests (both unit and functional) one time.
npm run ci - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.
WeatherApp
This project was generated with Angular CLI version 16.0.2.

Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

Running unit tests
Run ng test to execute the unit tests via Karma.

Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI Overview and Command Reference page.
