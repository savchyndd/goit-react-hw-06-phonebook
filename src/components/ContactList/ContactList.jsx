import { useSelector } from 'react-redux';

import { getContactsFilter, getContactsList } from 'redux/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};
