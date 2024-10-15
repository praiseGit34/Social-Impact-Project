import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/layout',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'assignments',
    label: 'Assignments',
    path: '/layout/student-assignments',
    icon: <HiOutlineCube />,
  },
  {
    key: 'timetable',
    label: 'Time Table',
    path: '/layout/time-table',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'calendar',
    label: 'Calendar',
    path: '/layout/calendar',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'examinations',
    label: 'Examinations',
    path: '/layout/exams',
    icon: <HiOutlineDocumentText />,
  },
  {
    key: 'results',
    label: 'Results',
    path: '/layout/results',
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
