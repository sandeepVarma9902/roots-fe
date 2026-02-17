import { useState } from "react";
import { FoodListing } from "./Food";

const IndexFood: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Food');
  
    return (
        <>
        <FoodListing
         activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
        </>
    )
  };
  
  export default IndexFood; 