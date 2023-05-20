/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard/TabCard";
import { useLoaderData } from "react-router-dom";

const CustomTabs = () => {
  const [subCategory, setSubCategory] = useState([]);

const handleSubCategoryFilter = (sub) => {
  useEffect(() => {
    fetch(`http://localhost:5000/toyscategory/${sub}`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, [sub]);
  
}

  const toys = useLoaderData();

  return (
    <div className="font-semibold text-green-600 my-28">
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">
        Categories
      </h1>
      <Tabs>
        {/* Main category tabs */}
        <TabList>
          <Tab>
            <p className="text-2xl md:text-4xl p-4">BMW</p>
          </Tab>
          <Tab>
            <p className="text-2xl md:text-4xl p-4">Ferrari</p>
          </Tab>
          <Tab>
            <p className="text-2xl md:text-4xl p-4">Mercedes</p>
          </Tab>
        </TabList>

        {/* Main category tab panels */}
        <TabPanel>
          {/* Subcategory tabs */}
          <Tabs>
            <TabList>
              <Tab>
                <p
                  onClick={() => {
                    handleSubCategoryFilter('Racing')
                  }}
                  className="text-xl md:text-2xl p-2"
                >
                  Sports
                </p>
              </Tab>
              <Tab>
                <p
                  onClick={() => {
                    handleSubCategoryFilter('Racing')
                  }}
                  className="text-xl md:text-2xl p-2"
                >
                  Sedan
                </p>
              </Tab>
              <Tab>
                <p
                  onClick={() => {
                    handleSubCategoryFilter('Racing')
                  }}
                  className="text-xl md:text-2xl p-2"
                >
                  Convertible
                </p>
              </Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 1 */}
              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 */}

              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 */}

              <div className="grid md:grid-cols-3">
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
              <Tab>
                <p className="text-xl md:text-2xl p-2">Sports</p>
              </Tab>
              <Tab>
                <p className="text-xl md:text-2xl p-2">Sedan</p>
              </Tab>
              <Tab>
                <p className="text-xl md:text-2xl p-2">Convertible</p>
              </Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 2 1 */}

              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 2 */}

              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 2 3 */}

              <div className="grid md:grid-cols-3">
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
              <Tab>
                <p className="text-xl md:text-2xl p-2">Sports</p>
              </Tab>
              <Tab>
                <p className="text-xl md:text-2xl p-2">Sedan</p>
              </Tab>
              <Tab>
                <p className="text-xl md:text-2xl p-2">Convertible</p>
              </Tab>
            </TabList>

            {/* Subcategory tab panels */}
            <TabPanel>
              {/* Content for Subcategory 3 1 */}

              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 2 */}

              <div className="grid md:grid-cols-3">
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
                <TabCard></TabCard>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Content for Subcategory 3 3 */}

              <div className="grid md:grid-cols-3">
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
