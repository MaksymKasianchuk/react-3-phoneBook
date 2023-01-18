import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = ({ handleChange, options = [] }) => {
    const filterId = nanoid();
  return (
    <div>
        <label htmlFor={filterId}>
            {options.length >0 && (<span>filter by {options.join(", ")}</span>)}
            <input type="text" name="filter" id={filterId} onChange={handleChange}/>
        </label>
    </div>
  )
};


Filter.propTypes = {
    options: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
};

export default Filter;