import PropTypes from "prop-types";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default SearchBar;
