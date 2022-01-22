import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';

const Filter = ({value, handleChangeFilter, className}) => {
   
    return (
        <Section title="Filter" classArr={['PhoneBookSection']}>
        <input
            type="text"
            name={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChangeFilter}
            className={className}
        />
    </Section>
    );
    
}
Filter.propTypes = {
    handleChangeFilter: PropTypes.func.isRequired,
};
export default Filter;