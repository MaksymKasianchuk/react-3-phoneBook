import PropTypes from 'prop-types';
import { PhoneBookListStyled, PhoneBookListEmpty, ListButton } from './PhoneBook.styled';

export const PhoneBookList = ({ contacts, deleteHandler }) => {
    return(
        <>
            { contacts.length > 0 ? (
                 <PhoneBookListStyled>
                    {
                        contacts.map( ( {name, phone, id}) => (
                            <li key={id}><p><span>{name}:</span> {phone}</p> <ListButton type='button' onClick={() => deleteHandler(id)}>delete</ListButton></li>
                        ))
                    }
               </PhoneBookListStyled>
            ) : (
                <PhoneBookListEmpty>Contact not find!</PhoneBookListEmpty>
            )}
        </>
    )
};

PhoneBookList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    deleteHandler: PropTypes.func.isRequired
};