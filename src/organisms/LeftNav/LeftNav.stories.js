import React from 'react';
import Navigation from './LeftNav';

export default {
    title: 'Organisms/LeftNav',
    component: Navigation,
};
  
const menuItems = [{name :'Home', route:'/home'}, {name:'Dashboard', route:'/dash'}]

export const Standard = () => <Navigation menuItems={menuItems}/>;