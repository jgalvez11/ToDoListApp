// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const HOST: string = 'http://localhost:8080';

export const environment = {
  production: false,
  services: {
    employeeController: {
      getAll: `${HOST}/employee/getAll`,
      getById: `${HOST}/employee/getById`,
      getTasksById: `${HOST}/employee/getTasksById`,
      save: `${HOST}/employee/save`,
      delete: `${HOST}/employee/delete`,
      update: `${HOST}/employee/update`
    },
    taskController: {
      getAll: `${HOST}/task/getAll`,
      getById: `${HOST}/task/getById`,
      save: `${HOST}/task/save`,
      delete: `${HOST}/task/delete`,
      update: `${HOST}/task/update`
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
