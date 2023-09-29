import { PropTypes } from 'prop-types';

const Output = ({ value, placeholder }) => (
  <div className="result">
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      id="inputField"
    />
  </div>
);

Output.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Output;
