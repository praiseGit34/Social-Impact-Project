// src/lib/constants/Navigation.js
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiClock,
  HiOutlineCalendar,
} from 'react-icons/hi';

export const TEACHER_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Teacher Dashboard',
    path: '/teacher-dashboard',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/teacher-dashboard/profile',
    icon: <HiOutlineClipboardList />,
  },
  {
    key: 'courses',
    label: 'Courses',
    path: '/teacher-dashboard/courses',
    icon: <HiClock />,
  },
  {
    key: 'assingments',
    label: 'Assignments',
    path: '/teacher-dashboard/assignments',
    icon: <HiOutlineCalendar />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [];
