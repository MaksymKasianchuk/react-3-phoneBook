import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled'

const Filter = ({ handleChange, options = [] }) => {
    const filterId = nanoid();
  return (
    <FilterStyled>
        <label htmlFor={filterId}>
            {options.length >0 && (<span>Filter by {options.join(", ")}</span>)}
            <input type="text" name="filter" id={filterId} onChange={handleChange}/>
        </label>
    </FilterStyled>
  )
};


Filter.propTypes = {
    options: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
};

export default Filter;