const HOST: string = 'http://localhost:8080';

export const environment = {
  production: true,
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
