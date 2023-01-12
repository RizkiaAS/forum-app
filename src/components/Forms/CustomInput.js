import PropTypes from 'prop-types'

function CustomInput ({ id, label, type, placeholder, value, onChange }) {
  return (<>
    {label && <label htmlFor={id}>{label}</label>}
    <input type={type} id={id} placeholder={placeholder} value={value} onChange={event => onChange(event.target.value)}/>
  </>)
}

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CustomInput
