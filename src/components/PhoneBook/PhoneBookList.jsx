import PropTypes from 'prop-types';

export const PhoneBookList = ({ contacts, deleteHandler }) => {
    return(
        <div>
            { contacts.length > 0 ? (
                <ul>
                    {
                        contacts.map( ( {name, phone, id}) => (
                            <li key={id}>{name}: {phone} <button type='button' onClick={() => deleteHandler(id)}>delete</button></li>
                        ))
                    }
                </ul>
            ) : (
                <p>Contact not find!</p>
            )}
        </div>
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