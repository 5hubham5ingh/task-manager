## Workspace
* Workspace is a minimal yet **production ready** web application.
* It is created to demonstrate and also learn designing production ready **MVPs** (Minimal viable product).
* It follows [**S.O.L.I.D**](https://www.freecodecamp.org/news/solid-design-principles-in-software-development/) design priciples.

  ### Backend
  * The backend of the application is designed using [**Express Nodejs**](https://expressjs.com/) framework.
  * It's designed using [**MVC**](https://blog.logrocket.com/building-structuring-node-js-mvc-application/) (Modal-View-Controller) design pattern.
  * [**MongoDB Atlas**](https://www.mongodb.com/docs/atlas/) is used for application's database.
  * [**PassportJs + JWT**](https://www.passportjs.org/) for user authentication.
  * [**Bcrypt**](https://github.com/kelektiv/node.bcrypt.js#readme) for hashing.
  * [**Http-status**](https://github.com/adaltas/node-http-status/#readme) for http status codes.
  * [**Cors**](https://github.com/expressjs/cors#readme) for enabling cross origin resource sharing.
  * [**Mongoose**](https://mongoosejs.com/docs/documents.html) as the ORM for MongoDB.
  * [**Epress rate limit**](https://express-rate-limit.mintlify.app/overview) for rate limiting failed requests.
  * [**Helmet**](https://blog.logrocket.com/using-helmet-node-js-secure-application/) for adding or removing HTTP headers to comply with web security standards.
  * [**Cookie parser**](https://github.com/expressjs/cookie-parser#readme) for parsing cookies.
  * [**Dotenv**](https://github.com/motdotla/dotenv#readme) for loading environment variables from a .env file into process.env.

  #### Frontend
  * The UI of the application is designed using [**Reactjs**](https://react.dev/learn) framework.
  * It uses [**Layered & Flux architecture**](https://www.bacancytechnology.com/blog/react-architecture-patterns-and-best-practices) for the app's design.
  * [**Redux** + Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) for global state management.
  * [**React Query**](https://tanstack.com/query/latest/docs/framework/react/overview) with [**Axios**](https://axios-http.com/docs/intro) for data fetching and caching on the client side.
  * [**MUI**](https://mui.com/) for react custome components.
  * [**Yup with Formik**](https://formik.org/docs/guides/validation) for form validation.
  * [**Redux Toolkit Persist**](https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration) for persisting the Redux state between page refreshes and application restarts.

    **Note:** The backend is hosted on a free tier of Render so the server goes to sleep after a period of inactivity. So, for the first login or signup, please wait a while for the server to restart.
