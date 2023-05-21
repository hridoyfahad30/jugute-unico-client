import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard/TabCard";
import { useLoaderData } from "react-router-dom";

const CustomTabs = () => {
  const toys = useLoaderData();
  const [brand, setBrand] = useState("BMW");
  const [subCategory, setSubCategory] = useState("Sports");

  const subCategoryFilter = toys.filter(
    (toy) => toy.brand == brand && toy.subcategory == subCategory
  );

  return (
    <div className="bg-fixed bg-[url('https://i.ibb.co/hMDNmv5/wallpaperflare-com-wallpaper-5-1.jpg')] md:py-1 px-2">
      <div className="container mx-auto font-semibold text-green-600 md:my-28">
        <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600 pt-8">
          Categories
        </h1>
        <Tabs>
          {/* Main category tabs */}
          <TabList>
            <Tab>
              <p
                onClick={() => setBrand("BMW")}
                className="text-2xl md:text-4xl p-4"
              >
                BMW
              </p>
            </Tab>
            <Tab>
              <p
                onClick={() => setBrand("Ferrari")}
                className="text-2xl md:text-4xl p-4"
              >
                Ferrari
              </p>
            </Tab>
            <Tab>
              <p
                onClick={() => setBrand("Mercedes")}
                className="text-2xl md:text-4xl p-4"
              >
                Mercedes
              </p>
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
                      setSubCategory("Sports");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sports
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Sedan");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sedan
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Convertible");
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
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 2 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 3 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            {/* Subcategory tabs */}
            <Tabs>
              <TabList>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Sports");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sports
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Sedan");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sedan
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Convertible");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Convertible
                  </p>
                </Tab>
              </TabList>

              {/* Subcategory tab panels */}
              <TabPanel>
                {/* Content for Subcategory 2 1 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 2 2 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 2 3 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            {/* Subcategory tabs */}
            <Tabs>
              <TabList>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Sports");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sports
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Sedan");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Sedan
                  </p>
                </Tab>
                <Tab>
                  <p
                    onClick={() => {
                      setSubCategory("Convertible");
                    }}
                    className="text-xl md:text-2xl p-2"
                  >
                    Convertible
                  </p>
                </Tab>
              </TabList>

              {/* Subcategory tab panels */}
              <TabPanel>
                {/* Content for Subcategory 3 1 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 3 2 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {/* Content for Subcategory 3 3 */}

                <div className="grid md:grid-cols-3">
                  {subCategoryFilter.map((toy) => (
                    <TabCard key={toy._id} toy={toy}></TabCard>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomTabs;
