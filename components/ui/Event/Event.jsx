//styles
import s from './Event.module.css';
//comp
import { Title, Icon } from 'components/ui';
import classNames from 'classnames';
//miu
import { Avatar } from '@mui/material';

const Event = ({
  color = '#818589',
  label = '(A)',
  title = '',
  time = '',
  icon = '',
  status = '',
}) => {
  const cn = classNames(s.event, s.reversed);
  return status == 'available' ? (
    <div className={s.event}>
      <div style={{ backgroundColor: '#818589' }} className={s.type} />
      <div className={s.wrap}>
        <Title priority={6}>Available (A)</Title>
        <p className={s.text}>{time}</p>
      </div>
    </div>
  ) : (
    <div className={cn}>
      <div style={{ backgroundColor: color }} className={s.type} />
      <Icon>{icon}</Icon>
      <div className="grid">
        <Title priority={6}>
          {title} {label}
        </Title>
        <p className={s.text}>{time}</p>
      </div>
      <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
    </div>
  );
};

export default Event;
