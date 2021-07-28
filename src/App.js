import "antd/dist/antd.css";
import 'react-reflex/styles.css';
import './App.css';
import { Tabs } from 'antd';

import { FramerMotionPage } from './paginas/framer-morion';
import { ReactReflexPage } from './paginas/react-reflex';
import { ReactContextPage } from './paginas/react-context';
import { ParentChildPage } from './paginas/parent-child';

const { TabPane } = Tabs;

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Tabs defaultActiveKey="parent-child" tabPosition="left">
          <TabPane tab="Framer Motion (lib)" key="framer-motion">
            <FramerMotionPage />
          </TabPane>
          <TabPane tab="React Reflex (lib)" key="react-reflex">
            <ReactReflexPage />
          </TabPane>
          <TabPane tab="Parent Child" key="parent-child">
            <ParentChildPage />
          </TabPane>
          <TabPane tab="React Context" key="react-context">
            <ReactContextPage />
          </TabPane>
        </Tabs>
        
      </header>
    </div>
  );
}

export default App;
