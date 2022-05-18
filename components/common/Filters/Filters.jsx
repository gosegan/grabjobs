//react
import { useState } from 'react';
//styles
import s from './Filters.module.css';
//comp
import { Checkbox, Icon, Title } from 'components/ui';
//filters
import { filtersData } from './filtersData';

const initialState = {
  calendar: false,
  status: false,
  type: false,
};

const Filters = ({ onChange = () => {} }) => {
  const [openState, setOpenState] = useState(initialState);

  const [state, setState] = useState({});

  const handleChange = (key, data) => {
    const newState = { ...state, [key]: data };
    setState(newState);
    onChange(newState);
  };

  return (
    <div className={s.filters}>
      <button className={s.button}>
        <Icon className="text-lg"></Icon>
        <span className="text-lg">Create</span>
        <Icon variant="solid"></Icon>
      </button>
      <div className="grid gap-6">
        {!!filtersData &&
          filtersData.map((item, index) => {
            const { value, label, options } = item;
            return (
              <div key={index} className={s.wrap}>
                <button
                  className={s.collapse}
                  onClick={() => setOpenState({ ...openState, [value]: !openState[value] })}>
                  <Title priority={5}>{label}</Title>
                  <Icon variant="solid">{openState[value] ? '' : ''}</Icon>
                </button>
                <div
                  className={s.content}
                  style={{
                    height: openState[value]
                      ? `calc((${options.length}*21px) + (${options.length - 1}*16px))`
                      : '0px',
                  }}>
                  {options.map((filter, index) => {
                    const { value, label, color = '', icon = '' } = filter;
                    return (
                      <Checkbox
                        key={index}
                        label={label}
                        color={color}
                        icon={icon}
                        value={state[value] || false}
                        onChange={() => handleChange([value], !state[value])}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filters;
