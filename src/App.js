import React from 'react';
import {MainLayout} from "./layout/MainLayout";
import {Dashboards} from "./views/Dashboards";

function App() {
  return (
    <MainLayout>
      <Dashboards/>
    </MainLayout>
  )
}

export default App;
