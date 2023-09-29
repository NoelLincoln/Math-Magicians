import { PropTypes } from 'prop-types';

const Output = ({ value }) => (
  <div className="result">
    <input type="text" value={value} id="inputField" />
  </div>
);

Output.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Output;
