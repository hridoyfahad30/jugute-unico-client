import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard/TabCard";

const CustomTabs = () => {
  return (
    <div className="text-4xl font-semibold text-green-600 my-28">
        <h1 className="text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">Categories</h1>
      <Tabs>
        {/* Main category tabs */}
        <TabList>
          <Tab>Main Category 1</Tab>
          <Tab>Main Category 2</Tab>
          <Tab>Main Category 3</Tab>
        </TabList>

        {/* Main category tab panels */}
        <TabPanel>
          {/* Subcategory tabs */}
          <Tabs>
            <TabList>
              <Tab>Subcategory 1</Tab>
              <Tab>Subcategory 2</Tab>
              <Tab>Subcategory 3</Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 1 */}
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
              
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
              
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          {/* Subcategory tabs */}
          <Tabs>
            <TabList>
              <Tab>Subcategory 1</Tab>
              <Tab>Subcategory 2</Tab>
              <Tab>Subcategory 3</Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 2 1 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 2 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 3 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          {/* Subcategory tabs */}
          <Tabs>
            <TabList>
              <Tab>Subcategory 1</Tab>
              <Tab>Subcategory 2</Tab>
              <Tab>Subcategory 3</Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 3 1 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 2 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 3 */}
              
              <div className="grid grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>

            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
