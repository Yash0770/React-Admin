import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit'
import UserList from './components/PostList';
import UserCreate from './components/PostCreate';
import UserEdit from './components/PostEdit'

function App() {
  return (
    <React.StrictMode>
      <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        />
      </Admin>
    </React.StrictMode>
  );
}

export default App;