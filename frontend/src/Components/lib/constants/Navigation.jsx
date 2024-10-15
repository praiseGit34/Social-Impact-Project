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
    path: '/student-assignments',
    icon: <HiOutlineCube />,
  },
  {
    key: 'timetable',
    label: 'Time Table',
    path: '/TimeTable',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'calendar',
    label: 'Calendar',
    path: '/Calendar',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'examinations',
    label: 'Examinations',
    path: '/Examinations',
    icon: <HiOutlineDocumentText />,
  },
  {
    key: 'results',
    label: 'Results',
    path: '/Results',
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
