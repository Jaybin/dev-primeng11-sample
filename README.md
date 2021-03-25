# DemoPrimengApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

We have a home page that simply displays an image of a home. This is the landing page.
Three other sections include picklist, table-edit and dropdown.

Picklist page has a set of items, divided into 5 categories. User can click on the category and populate the source list.
Users can push as many items from each category to the destination list. But users can only push back items from destination to the relevant active category source.
If invalid items are encountered in such a push, an error toast message is shown.

Table-edit page allows users to edit each row and make changes to the columns (except code). Name and price are required fields and will highlight the row in red if left blank and also will not allow user to save.
User can cancel the changes at any point of edit and the original row will be restored. If the row has been edited, the status icon will be represented accordingly.

Dropdown page allows users to populate dropdown fields on the fly based on the selection in the previous dropdown and display the product based on the selections.
If any of the first two dropdown values are changed, the dropdown values in the third dropdown is reset.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Unit tests are currently unavailable. Once they are available, run `ng test` to execute the unit tests via Karma.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
