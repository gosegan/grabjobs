//components
import Select from 'react-select';
import { CustomOption } from './CustomOption';
//lib
import { customStyles } from './customStyles';

const StyledSelect = (props) => {
  const { isSearchable = false, ...other } = props;
  return (
    <Select
      styles={customStyles}
      isSearchable={isSearchable}
      isClearable={false}
      components={{ Option: CustomOption }}
      {...other}
    />
  );
};

export default StyledSelect;
