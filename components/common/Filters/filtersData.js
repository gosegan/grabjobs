export const filtersData = [
  {
    value: 'calendar',
    label: 'Calendars',
    options: [
      {
        label: `Admin's calendar`,
        value: 'adminCalendar',
      },
    ],
  },
  {
    value: 'status',
    label: 'Interview Status',
    options: [
      {
        label: 'All',
        value: 'allStatus',
      },
      {
        label: 'Confirmed (C)',
        value: 'confirmed',
        color: '#00FF00',
      },
      {
        label: 'Pending (P)',
        value: 'pending',
        color: '#FFC300',
      },
      {
        label: 'Rescheduled (R)',
        value: 'rescheduled',
        color: '#0096FF',
      },
      {
        label: 'Available (A)',
        value: 'available',
        color: '#818589',
      },
    ],
  },
  {
    value: 'type',
    label: 'Interview Type',
    options: [
      {
        label: 'All',
        value: 'allTypes',
      },
      {
        label: 'In person',
        value: 'person',
        icon: '',
      },
      {
        label: 'Phone',
        value: 'phone',
        icon: '',
      },
      {
        label: 'Online',
        value: 'online',
        icon: '',
      },
    ],
  },
];
