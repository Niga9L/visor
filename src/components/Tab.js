import React from "react";
import {TabBox, TabIcon, TabName} from "../styled/Dashboards";

export const Tab = props => {
  return (
    <TabBox active={props.active}>
      <TabName active={props.active}>Новый рабочий стол</TabName>
      <TabIcon className="material-icons">close</TabIcon>
    </TabBox>
  )
}