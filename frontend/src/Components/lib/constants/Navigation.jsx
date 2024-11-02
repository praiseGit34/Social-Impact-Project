// src/lib/constants/Navigation.js
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiClock,
  HiOutlineCalendar,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Student Dashboard',
    path: '/layout',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'assignments',
    label: 'Student Assignments',
    path: '/layout/student-assignments',
    icon: <HiOutlineClipboardList />,
  },
  {
    key: 'timetable',
    label: 'Student Timetable',
    path: '/layout/time-table',
    icon: <HiClock />,
  },
  {
    key: 'calendar',
    label: 'Student Calendar',
    path: '/layout/calendar',
    icon: <HiOutlineCalendar />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [];
