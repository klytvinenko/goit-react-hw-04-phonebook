import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter";

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedNames = localStorage.getItem('contact');
    return savedNames ? JSON.parse(savedNames) : [];
  })
  const [filter, setFilter] = useState('');


useEffect(() => {
  localStorage.setItem('contact', JSON.stringify(contacts));
}, [contacts])

const addContacts = newContact => {
  if (contacts.some(
    contact => contact.name === newContact.name)) {
    alert(`${newContact.name} is already in contacts.`);
    return;
  }
  setContacts(prevContacts => [...prevContacts,newContact]);
};

const deleteContact = contactId => {
  setContacts(prevContacts => 
    prevContacts.filter(contact => contact.id !== contactId))
};


  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const findContact = nameToFind => {
    setFilter(nameToFind);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts}></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} onSearch={findContact}></Filter>
      <ContactList list={filterContacts()} onDelete={deleteContact}></ContactList>
      </div>
  )
}

































// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   componentDidMount() {
//     const savedContact = localStorage.getItem('contact');
//     if(savedContact !== null) {
//       this.setState({
//         contacts: JSON.parse(savedContact),
//       });
//     }
    
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContacts = newContact => {
//     if (this.state.contacts.some(contact => contact.name === newContact.name)) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [
//         ...prevState.contacts,
//         {
//           id: nanoid(),
//           ...newContact,
//         },
//       ],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//   };

//   // findContact = nameToFind => {
//   //   this.setState({ filter: nameToFind });
//   // };
//   findContact = nameToFind => {
//     this.setState({ filter: nameToFind.currentTarget.value });
//   };

//   filterContacts = () => {
//     const normalizedFilter = this.state.filter.toLocaleLowerCase();

//     return this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
//   }
  
//   render() {
//     return (
//       <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={this.addContacts}></ContactForm>
//       <h2>Contacts</h2>
//       <Filter filter={this.state.filter} onSearch={this.findContact}></Filter>
//       <ContactList list={this.filterContacts()} onDelete={this.deleteContact}></ContactList>
//       </div>
//     );
//   }
// };
