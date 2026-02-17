import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Navbar = (props: any) =>{
    const {currentActiveTab} = props
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState<string>(currentActiveTab);

    return(
        <>
         <div className="flex gap-8 border-t border-gray-200">
            {['For you', 'Food', 'Events', 'Activities', 'Blogs'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  const value = tab.toLowerCase()
                  setSelectedTab(value)
            
                  switch (value) {
                    case 'for you':
                      navigate('/home')
                      break
            
                    case 'food':
                      navigate('/food')
                      break
            
                    case 'events':
                      navigate('/home')
                      break
            
                    case 'activities':
                      navigate('/home')
                      break
            
                    case 'blogs':
                      navigate('/home')
                      break
            
                    default:
                      break
                  }
                }}
            
                className={`py-4 px-2 font-semibold transition-all duration-300 border-b-2 ${selectedTab === tab.toLowerCase()
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-600 border-transparent hover:text-indigo-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </>
    )
}