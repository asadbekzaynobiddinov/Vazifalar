/* eslint-disable @typescript-eslint/no-unused-vars */

// 1_Eski

// function ParamsD(paramName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     console.log(`Parametr dekoratori: ${paramName}`);
//   };
// }

// class Example {
//   sayHello(@ParamsD('id') id: string) {
//     console.log(`ID: ${id}`);
//   }
// }

// 2_Eski

// function QueryD(queryName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     console.log(`Query dekoratori: ${queryName}`);
//   };
// }

// class Example {
//   getUser(@QueryD('name') name: string) {
//     console.log(`Ism: ${name}`);
//   }
// }

// 3_Eski

// function HeaderD(headerName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     console.log(`Header dekoratori: ${headerName}`);
//   };
// }

// class Example {
//   checkHeader(@HeaderD('Authorization') token: string) {
//     console.log(`Token: ${token}`);
//   }
// }

// 4_Eski

// function PropertyD(target: any, propertyKey: string) {
//   console.log(`Property dekoratori: ${propertyKey}`);
// }

// class Example {
//   @PropertyD
//   data: string = 'Some data';
// }

// 5_Yangi

import 'reflect-metadata';

// function NewParamsD(paramName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     Reflect.defineMetadata(
//       `params_${parameterIndex}`,
//       paramName,
//       target,
//       propertyKey,
//     );
//     console.log(`Yangi Params dekoratori: ${paramName}`);
//   };
// }

// class Example {
//   sayHello(@NewParamsD('id') id: string) {
//     console.log(`ID: ${id}`);
//   }
// }

// 6_Yangi

// function NewQueryD(queryName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     Reflect.defineMetadata(
//       `query_${parameterIndex}`,
//       queryName,
//       target,
//       propertyKey,
//     );
//     console.log(`Yangi Query dekoratori: ${queryName}`);
//   };
// }

// class Example {
//   getUser(@NewQueryD('name') name: string) {
//     console.log(`Ism: ${name}`);
//   }
// }

// 7_Yangi

// function NewHeaderD(headerName: string) {
//   return function (target: any, propertyKey: string, parameterIndex: number) {
//     Reflect.defineMetadata(
//       `header_${parameterIndex}`,
//       headerName,
//       target,
//       propertyKey,
//     );
//     console.log(`Yangi Header dekoratori: ${headerName}`);
//   };
// }

// class Example {
//   checkHeader(@NewHeaderD('Authorization') token: string) {
//     console.log(`Token: ${token}`);
//   }
// }

// 8__Yangi

// function NewPropertyD(data: string) {
//   return function (target: any, propertyKey: string) {
//     Reflect.defineMetadata(propertyKey, data, target);
//     console.log(`Yangi Property dekoratori: ${propertyKey}, Data: ${data}`);
//   };
// }

// class Example {
//   @NewPropertyD('Some metadata')
//   data: string = 'Hello World';
// }
