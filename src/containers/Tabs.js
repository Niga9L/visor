import React from "react";
import {TabsContent} from "../styled/Dashboards";
import {Tab} from "../components/Tab";

export const Tabs = () => {
  return (
    <TabsContent>
      <Tab active={true}/>
      <Tab/>
    </TabsContent>
  )
}