import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className,
  type = "text",
  showIcon = true,
  icon = faSearch,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      {showIcon && (
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  showIcon: PropTypes.bool,
  icon: PropTypes.object,
};

export default SearchBar;
