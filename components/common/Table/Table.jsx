//styles
import s from './Table.module.css';
//data
import { daysData, numberArray, status, types } from './data';
//mui
import { Typography, Box } from '@mui/material';
//comp
import { Event } from 'components/ui';

const checkNumber = (index) => {
  let number;
  if (index < 10) {
    number = '0' + index;
  } else {
    number = index;
  }
  return number;
};

const Table = ({ filterData, events }) => {
  console.log(filterData);
  return (
    <div className={s.table}>
      {daysData.map((item, index) => {
        return (
          <span className="text-left font-bold" key={index}>
            {item.label}
          </span>
        );
      })}
      {numberArray.map((digit) => {
        let number = checkNumber(digit);
        let amountEvents = [];
        return (
          <Box
            key={digit}
            component="div"
            sx={{
              border: '1px dashed #A8A8A8',
              minHeight: '185px',
              display: 'grid',
              gap: '1px',
              gridTemplateRows: 'repeat(4, min-content)',
            }}>
            <Typography sx={{ mt: 1, mb: 1, pl: 1, color: '#A8A8A8' }}>{number}</Typography>
            {Object.entries(filterData).length !== 0
              ? events.map((event, index) => {
                  if (
                    event.date == digit &&
                    !!event.status == filterData[event.status] &&
                    !!event.type == filterData[event.type]
                  ) {
                    amountEvents.push(event);
                    if (amountEvents.length <= 2) {
                      return (
                        <Event
                          {...event}
                          {...types[event.type]}
                          {...status[event.status]}
                          key={index}
                        />
                      );
                    }
                  } else if (
                    (event.date == digit &&
                      !!filterData['allStatus'] === true &&
                      !!event.type == filterData[event.type]) ||
                    (event.date == digit &&
                      !!filterData['allTypes'] === true &&
                      !!event.status == filterData[event.status]) ||
                    (event.date == digit &&
                      Object.values(filterData).reduce((a, item) => a + item, 0) < 2 &&
                      (!!filterData['allStatus'] === true ||
                        !!filterData['allTypes'] === true))
                  ) {
                    console.log(!!event.type == filterData[event.type]);
                    amountEvents.push(event);
                    if (amountEvents.length <= 2) {
                      return (
                        <Event
                          {...event}
                          {...types[event.type]}
                          {...status[event.status]}
                          key={index}
                        />
                      );
                    }
                  } else if (
                    event.date == digit &&
                    Object.values(filterData).reduce((a, item) => a + item, 0) < 2 &&
                    (!!event.status == filterData[event.status] ||
                      !!event.type == filterData[event.type] ||
                      filterData['adminCalendar'] == true)
                  ) {
                    amountEvents.push(event);
                    if (amountEvents.length <= 2) {
                      return (
                        <Event
                          {...event}
                          {...types[event.type]}
                          {...status[event.status]}
                          key={index}
                        />
                      );
                    }
                  }
                })
              : events.map((event, index) => {
                  if (event.date == digit) {
                    amountEvents.push(event);
                    if (amountEvents.length <= 2) {
                      return (
                        <Event
                          {...event}
                          {...types[event.type]}
                          {...status[event.status]}
                          key={index}
                        />
                      );
                    }
                  }
                })}
            {amountEvents.length > 2 && (
              <span className={s.hint}>+{amountEvents.length - 2} meetings</span>
            )}
          </Box>
        );
      })}
    </div>
  );
};

export default Table;
