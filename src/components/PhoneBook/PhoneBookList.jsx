import PropTypes from 'prop-types';

export const PhoneBookList = ({ contacts }) => {
    return(
        <ul>
            {
                contacts.map( ( {name, id }) => (
                    <li key={id}>{name}</li>
                ))
            }
        </ul>
    )
};

PhoneBookList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
};