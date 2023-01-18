import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { PhoneBookForm, PhoneBookList } from 'components/PhoneBook';

const INIT_CONTACTS = [
  {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},
];

export default class App extends Component {
  state = {
    contacts: INIT_CONTACTS,
    filter: '',
  };

  handleFormSubmit = (values) => {
    const { name, phone } = values;
    const { contacts } = this.state;
    
    if(contacts.find(contact => contact.name === name)){
      alert(`${name} already in contacts!`);
      return ;
    };

    const nevContact = {
      name,
      phone,
      id: nanoid()
    };
    this.setState( prevState => ({ contacts: [ ...prevState.contacts, nevContact ] }) );
  };

  handleFilterChange = (e) => {
    this.setState({filter: e.currentTarget.value});
  };
  
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.phone.toLowerCase().includes(normalizedFilter));
    return filteredContacts;
  };

  deleteHandler = contactId => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  
  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Section title="Please enter Name of contact person">
          <PhoneBookForm submitHandler={this.handleFormSubmit}/>
        </Section>
        {contacts.length > 0 && (
          <>
            <Section title="Filter">
              <Filter handleChange={this.handleFilterChange} options={['name', 'number']}/>
            </Section>

            <Section title="Your contacts">
              <PhoneBookList contacts={filteredContacts} deleteHandler={this.deleteHandler}/>
            </Section>
          </>
        )}
      </Container>
    );
  }
}
