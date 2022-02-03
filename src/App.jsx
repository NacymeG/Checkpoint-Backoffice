import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

import OtherList from './components/Other/List';
import OtherEdit from './components/Other/Edit';
import OtherPost from './components/Other/Post';

import ProjectList from './components/Project/List';
import ProjectEdit from './components/Project/Edit';
import ProjectPost from './components/Project/Post';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="projects"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectPost}
        />
        <Resource
          name="other"
          list={OtherList}
          edit={OtherEdit}
          create={OtherPost}
        />
      </Admin>
    </div>
  );
}

export default App;
