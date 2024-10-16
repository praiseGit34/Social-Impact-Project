import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiClock,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiFilter,
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
    icon: <HiOutlineClipboardList />,
  },
  {
    key: 'timetable',
    label: 'Time Table',
    path: '/layout/time-table',
    icon: <HiClock />,
  },
  {
    key: 'calendar',
    label: 'Calendar',
    path: '/layout/calendar',
    icon: <HiOutlineCalendar />,
  },
  {
    key: 'examinations',
    label: 'Examinations',
    path: '/layout/exams',
    icon: <HiOutlineAcademicCap />,
  },
  {
    key: 'results',
    label: 'Results',
    path: '/layout/results',
    icon: <HiFilter />,
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
