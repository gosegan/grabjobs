export const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0px',
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: '0px',
    paddingLeft: '.1rem',
    color: '#2B2B2B',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingBottom: '0.5rem',
    paddingRight: '0',
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    maxWidth: '270px',
    marginLeft: 'auto',
    fontSize: '14px',
    paddingBottom: '0.1rem',
    borderBottom: '1px solid #2B2B2B',
  }),
  multiValueLabel: (base) => ({
    ...base,
    backgroundColor: '#F2F2F2',
  }),
  menu: (provided) => ({
    ...provided,
    maxWidth: '270px',
    right: '0',
  }),
};
