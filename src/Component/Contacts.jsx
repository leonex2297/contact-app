import { PiUserCircleThin } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../Hooks/useDisclouse";
import { toast } from "react-toastify";

const Contacts = ({ contact }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclouse();

  const deleteData = async (id) => {
    try {
      const contactRef = collection(db, "contacts");
      await deleteDoc(doc(contactRef, id));
      toast.success("Contact deleted Successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = (id) => {
    deleteData(id);
  };

  // const onOpen = () => {
  //   setIsOpen(true);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div>
      <div
        key={contact.id}
        className="mt-3 flex h-[64px] items-center rounded-lg bg-fuchsia-300"
      >
        <PiUserCircleThin className="text-orange size-12" />
        <div className="flex flex-grow flex-col items-start px-3">
          <h2 className="font-semibold">{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
        <div className="flex flex-grow items-center justify-end gap-2">
          <FaRegEdit
            onClick={onOpen}
            className="size-8 cursor-pointer text-black"
          />
          <MdDeleteForever
            onClick={() => deleteContact(contact.id)}
            className="size-8 cursor-pointer text-purple-800"
          />
        </div>
      </div>
      <AddAndUpdateContact
        isOpen={isOpen}
        onClose={onClose}
        isUpdate
        contact={contact}
      />
    </div>
  );
};

export default Contacts;
