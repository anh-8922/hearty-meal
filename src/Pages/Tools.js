import React, { useState } from "react";
import MainLayout from '../Layouts/MainLayout';
import ShoppingList from "../Components/AddShoppingList";
import CaloriesSelector from "../Components/Tools/Calories";
import Converter from "../Components/Tools/Converter";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Tools() {
  

  return(
    <MainLayout>
        <div className='tools'>
            <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
                <Tab eventKey="converter" title="Unit Converter">
                    <Converter/>
                </Tab>
                <Tab eventKey="profile" title="Calories Calculator">
                    <CaloriesSelector/>
                </Tab>
            </Tabs>
        </div>
    </MainLayout>
  );
}
