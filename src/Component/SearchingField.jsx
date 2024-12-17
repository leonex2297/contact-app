import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
const SearchingField = ({ modalOpen, filterContact }) => {
  return (
    <div className="flex gap-2">
      <div className="relative flex flex-grow items-center">
        <FiSearch className="absolute ml-1 text-3xl text-white" />
        <input
          className="h-10 flex-grow rounded-lg border border-white bg-transparent px-10 text-white placeholder-white outline-none"
          type="search"
          placeholder="Search Contact"
          onChange={filterContact}
        />
      </div>
      <FaCirclePlus
        onClick={modalOpen}
        className="cursor-pointer text-5xl text-white"
      />
    </div>
  );
};

export default SearchingField;
