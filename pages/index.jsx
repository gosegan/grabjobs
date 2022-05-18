//styles
import s from 'styles/Home.module.css';
//components
import { Filters, Layout } from 'components/common';
import { Calendar, Title } from 'components/ui';
//lib
import { createSeo } from 'lib/utils/create-seo';
import { useState } from 'react';

export default function Home() {
  const SEO = createSeo('Home');
  const [filterData, setFilterData] = useState({});
  return (
    <Layout seo={SEO}>
      <Title className="mb-10">Interview Calendar</Title>
      <div className={s.wrap}>
        <Filters onChange={setFilterData} />
        <Calendar
          filterData={filterData}
          events={[
            {
              title: 'Call John',
              time: '2 pm',
              status: 'confirmed',
              type: 'online',
              date: 25,
            },
            {
              title: 'Call Lewis',
              time: '7 pm',
              status: 'rescheduled',
              type: 'online',
              date: 30,
            },
            {
              title: 'Call Julia',
              time: '12 am',
              status: 'confirmed',
              type: 'person',
              date: 7,
            },
            {
              title: 'Call Daniil',
              time: '3 pm',
              status: 'pending',
              type: 'person',
              date: 15,
            },
            {
              title: 'Call Sergey',
              time: '5 pm',
              status: 'pending',
              type: 'phone',
              date: 1,
            },
            {
              title: 'Call Max',
              time: '1 pm',
              status: 'rescheduled',
              type: 'phone',
              date: 10,
            },
            {
              title: 'Call Denys',
              time: '4 pm',
              status: 'pending',
              type: 'online',
              date: 10,
            },
            {
              title: 'Call Alex',
              time: '8 pm',
              status: 'confirmed',
              type: 'online',
              date: 10,
            },
            {
              time: '11 am - 2 pm',
              status: 'available',
              date: 21,
            },
            {
              time: '11 am - 2 pm',
              status: 'available',
              date: 21,
            },
            {
              time: '11 am - 2 pm',
              status: 'available',
              date: 21,
            },
          ]}
        />
      </div>
    </Layout>
  );
}
