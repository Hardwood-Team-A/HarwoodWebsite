import ImgDesc from "../Components/DescriptionPage/ImgDesc"
import TxtDesc from "../Components/DescriptionPage/TxtDesc"
import SplitLayoutPage from "../Components/DescriptionPage/Full"

export default function Artist_Desc(name, curators) {
  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
       <div className="max-w-7xl mx-auto ">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 45,
        }}>
          Artist Name
        </div>
        <div className="flex justify-center text-base ">
          Curated by Person and Person
        </div>
        <div className="m-auto justify-center text-base w-1/2">
          
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
        </div>
      </div>
    </div>
  )
}
