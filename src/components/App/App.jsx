import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from 'components/Section';
import { PhoneBookForm, PhoneBookList } from 'components/PhoneBook';



export default class App extends Component {
  state = {
    contacts: [],
  };

  getFormValues = (values) => {
    const { name } = values;
    const nevContact = {
      name,
      id: nanoid()
    };
    this.setState( prevState => ({ contacts: [ ...prevState.contacts, nevContact ] }) );
  }

  render() {
    // console.log(this.state.contacts);
    const { contacts } = this.state;
    return (
      <Container>
        <Section title="Please enter Name of contact person">
          <PhoneBookForm getValues={this.getFormValues}/>
        </Section>
        {contacts.length > 0 && (
          <Section title="Your contacts">
            <PhoneBookList contacts={contacts} />
          </Section>
        )}
      </Container>
    );
  }
}
