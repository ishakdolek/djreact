import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import CustomLayout from './containers/CustomerLayout'
import ArticleList from './containers/ArticleListView'

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList/>
      </CustomLayout>
    </div>
  );
}

export default App;
