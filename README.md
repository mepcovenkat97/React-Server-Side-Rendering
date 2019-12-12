# Server-Side Rendering using React & Redux #
This is a Server Side Rendering achieved using React and Redux

Server Side Rendering(SSR) is done to load pages like normal html pages. This is mainly done for optimization purpose in order to deliver the pages in a fater manner and to reduce the loda at client side. It is __mainly focused on the Mobile Devices__ which is having limited memory and processing power.

Normal React Application will have a single node server which will serve the application. But in SSR we will be having two seperate server one is for serving the pages loaded with data and another is a normal React server. Also the routes will be varying inorder to seperate the pages to be loaded with SSR and normal react pages.

Implemented with the help of this [Course](https://www.udemy.com/course/server-side-rendering-with-react-and-redux/).

# Installation #
1.Inside the project folder ```React-Server-Side-Rendering```
```
cd server
npm i
```

2. Start the server using the command
```
npm run dev
```

3. Browse the URL __localhost:3000__ in the browser

##

# To Check the Server Side Rendering #

1. Disable Javascript for the localhost<br/>
2. Reload the Page<br/>
3. Press ```ctrl + shift + i```  or ```right-click > Inspect```<br/>
3. Check the Request

You will be able to see the entire html content rendered from the server