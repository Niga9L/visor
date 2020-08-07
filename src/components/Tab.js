import React from "react";
import {TabBox, TabIcon, TabName} from "../styled/Dashboards";

export const Tab = props => {
  return (
    <TabBox active={props.active}>
      <TabName active={props.active}>{props.item.name + props.item.id}</TabName>
      <TabIcon className="material-icons">close</TabIcon>
    </TabBox>
  )
}