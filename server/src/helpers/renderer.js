import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from "../client/Routes";
import { Provider } from 'react-redux';

export default (req, store) => {
   const content = renderToString(
      <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
         <Routes/>
      </StaticRouter>
      </Provider>
   );
   return `
      <html>
      <meta http-equiv="Content-Security-Policy" content="font-src 'self' data:; img-src 'self' data:; default-src 'self' http://121.0.0:3000/">
         <head></head>
         <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
         </body>
      </html>
   `;
};