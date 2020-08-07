import React, {useState} from "react";
import {TabAdd, TabAddIcon, TabsContent} from "../styled/Dashboards";
import {Tab} from "../components/Tab";
import {ReactSortable} from 'react-sortablejs'

export const Tabs = () => {
  const [list, setList] = useState([
    {
      id: 1, name: 'Новый рабочий стол'
    },
    {
      id: 2, name: 'Новый рабочий стол'
    }
  ])

  return (
    <TabsContent>
      <ReactSortable list={list} setList={setList} className='sortable_tabs'>
        {list.map((item,index) => {
          if (index === 0) {
            return (
                <Tab key={item.id} item={item} active={true}/>
              )
          } else {
            return (
              <Tab key={item.id} item={item}/>
            )
          }
        })}
      </ReactSortable>
      <TabAdd><TabAddIcon className="material-icons">add_circle_outline</TabAddIcon></TabAdd>
    </TabsContent>
  )
}