import React from 'react'
import HomePage from './pages/HomePage';
import UsersListPage from './pages/usersListPage';


export default [
   {
      ...HomePage,
      path:'/',
      exact:true
   },
   {
      ...UsersListPage, 
      path: '/users',
   }
];