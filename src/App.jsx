import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import SearchingField from "./Component/SearchingField";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import Contacts from "./Component/Contacts";

import AddAndUpdateContact from "./Component/AddAndUpdateContact";
import useDisclouse from "./Hooks/useDisclouse";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundComponent from "./Component/NotFoundComponent";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  // const [isOpen, setIsOpen] = useState(false);

  const getContact = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      // const contactsSnapshot = await getDocs(contactsRef);

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        // console.log(contactsSnapshot);
        console.log(contactLists);

        return contactLists;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContact();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;
    console.log(value);

    const contactsRef = collection(db, "contacts");
    // const contactsSnapshot = await getDocs(contactsRef);

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });
      setContacts(filteredContacts);
      // console.log(contactsSnapshot);
      console.log(contactLists);

      return filteredContacts;
    });
  };

  // const onOpen = () => {
  //   setIsOpen(true);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="mx-auto max-w-[370px]">
      <Navbar />
      <SearchingField modalOpen={onOpen} filterContact={filterContact} />
      <div>
        {contacts.length <= 0 ? (
          <NotFoundComponent />
        ) : (
          contacts.map((contact) => {
            return <Contacts key={contact.id} contact={contact} />;
          })
        )}
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
