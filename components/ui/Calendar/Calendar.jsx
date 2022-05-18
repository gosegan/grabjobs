//styles
import s from './Calendar.module.css';
//comp
import { Icon, Title, StyledSelect } from 'components/ui';
import { Table } from 'components/common';

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

const Calendar = ({ filterData, events }) => {
  return (
    <div className={s.calendar}>
      <div className={s.header}>
        <button className={s.day}>Today</button>
        <div className={s.arrows}>
          <Icon></Icon>
          <Icon></Icon>
        </div>
        <Title priority={3}>November 2021</Title>
        <StyledSelect instanceId={1} placeholder="Day" options={options} />
      </div>
      <Table filterData={filterData} events={events} />
    </div>
  );
};

export default Calendar;
