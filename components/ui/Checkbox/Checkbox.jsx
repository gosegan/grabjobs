//styles
import s from './Checkbox.module.css';
//comp
import { Icon } from 'components/ui';
//other
import { animated, useSpring, config, useSpringRef, useChain } from 'react-spring';
import { useState } from 'react';

const Checkbox = ({ label, value, onChange, color = '', icon = '' }) => {
  const [checkmarkLength, setCheckmarkLength] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    config: config.gentle,
    ref: checkboxAnimationRef,
    backgroundColor: isChecked ? '#4c4cff' : '#fff',
    borderColor: isChecked ? '#4c4cff' : '#ddd',
  });

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: value ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    value
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  useChain(
    value
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );
  return (
    <label className={s.label}>
      <input
        type="checkbox"
        checked={value}
        className={s.input}
        onChange={() => {
          onChange();
          setIsChecked(!isChecked);
        }}
      />
      <span className={s.checkbox}>
        <animated.svg
          className={s.image}
          style={checkboxAnimationStyle}
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
          viewBox="-2 0 15 8"
          fill="none">
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
            stroke="#fff"
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
      </span>
      {!!color && <div className={s.circle} style={{ backgroundColor: color }} />}
      {!!icon && <Icon className={s.icon}>{icon}</Icon>}
      {label}
    </label>
  );
};

export default Checkbox;
