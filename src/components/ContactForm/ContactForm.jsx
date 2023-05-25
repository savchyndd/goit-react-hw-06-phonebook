import { useSelector, useDispatch } from 'react-redux';

import { getContactsList } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { Form, Input, Label, Button } from './ContactForm.module';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    dispatch(addContact(formName, formNumber));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
