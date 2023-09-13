import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItems";
import TabContent from "../V2/TabContent";
import Cards from "../cards/Cards";
import { cardArray, tab1, tab2, tab3 } from "../../Data/data";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="All"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Section-1"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Section-2"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Section-3"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Cards props={cardArray} />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Cards props={tab1} />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Cards props={tab2} />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <Cards props={tab3} />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
