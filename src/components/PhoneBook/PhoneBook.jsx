import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section/Section';
import Filter from './Filter';
import PhoneBookForm from './PhoneBookForm';
import styles from './PhoneBook.module.scss';

// {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
// {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
// {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
// {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},

const INITIAL_STATE = {
    name: '',
    number: '',
    filter: ''
  };

class PhoneBook extends Component {

    state = {
        contacts: [],
        ...INITIAL_STATE
    }
    
    componentDidMount(){
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if(parsedContacts){
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState){
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;

        if(nextContacts !== prevContacts){
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const normalizedName = this.state.name.toLowerCase();
        if(this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedName)){
            this.reset();
            return alert(`${this.state.name} is already exist in phonebook`);
        } 
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        };
      
        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
            name: '',
            number: ''
        }));
        this.reset();
    };
    
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };
    
    getVisibleContacts = () =>{
        const {contacts, filter} = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
    };

    deleteHandler = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    };


    render() {
        const { name, number, filter } = this.state;
        const visibleContacts = this.getVisibleContacts();
        console.log(visibleContacts);
        return (
            <>
                <PhoneBookForm 
                    nameVal={name} 
                    numberval={number} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    className={styles.PhoneBookForm}
                />
                <Filter 
                    value={filter} 
                    handleChangeFilter={this.changeFilter}
                    className={styles.Filter}
                />
                <Section title="Contacts" classArr={['PhoneBookSection']}>

                    {   visibleContacts.length > 0 ?
                            <ul className={styles.Contacts}>
                                {   
                                    visibleContacts.map(({id, name, number}) => (
                                        <li key={id}>
                                            <span className={styles.ContactsName}>
                                            {name} 
                                            </span>
                                            <span className={styles.ContactsNumber}>
                                            {number}
                                            </span>
                                            <button 
                                            type="button" 
                                            onClick={() => this.deleteHandler(id)}
                                            className={styles.DeleteBtn}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        :
                            <p className={styles.Empty}>Nothing here! Please, add a contact!</p>
                    }
                </Section>
            </>
        );
    }
}

export default PhoneBook;