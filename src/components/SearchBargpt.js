import { useSelector } from "react-redux";
import { langConfig } from "../utils/langConfig";

const SearchBargpt =()=>{

  const selectedLanguage = useSelector((store)=>store.lang.selectedLanguage);

  return (
    <div className="absolute z-10 py-[10%] w-[65%] ml-40">
      <form className="bg-black  grid grid-cols-12 p-4 m-2 rounded-lg">
        <input className="py-3 p-2 col-span-9  rounded-md font-bold text-lg" input="text" placeholder={langConfig[selectedLanguage].placeholderValue}></input>
        <button className="py-3 ml-4 col-span-3 bg-red-800 text-white font-bold rounded-md text-lg">{langConfig[selectedLanguage].buttonValue}</button>
      </form>
    </div>
  );
};

export default SearchBargpt;