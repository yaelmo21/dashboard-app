import {
  FaAward,
  FaChartPie,
  FaGear,
  FaLightbulb,
  FaTicket,
} from 'react-icons/fa6';
import { nanoid } from 'nanoid';
import { NavbarItem } from '@/infraestructure/interfaces/NavbarItem.inteface';
import { FaBook, FaUsers, FaUserTie } from 'react-icons/fa';

const basePath = '/dashboard';

const firstItems: NavbarItem[] = [
  {
    id: nanoid(),
    name: 'Overview',
    icon: FaChartPie,
    href: '/overview',
  },
  {
    id: nanoid(),
    name: 'Tickets',
    icon: FaTicket,
    href: '/tickets',
  },
  {
    id: nanoid(),
    name: 'Ideas',
    icon: FaLightbulb,
    href: '/ideas',
  },
  {
    id: nanoid(),
    name: 'Contacts',
    icon: FaUsers,
    href: '/contacts',
  },
  {
    id: nanoid(),
    name: 'Agents',
    icon: FaUserTie,
    href: '/agents',
  },
  {
    id: nanoid(),
    name: 'Articles',
    icon: FaBook,
    href: '/articles',
  },
];

const secondItems: NavbarItem[] = [
  {
    id: nanoid(),
    name: 'Settings',
    icon: FaGear,
    href: '/settings',
  },
  {
    id: nanoid(),
    name: 'Subscription',
    icon: FaAward,
    href: '/subscription',
  },
];

const fistMenuItems: NavbarItem[] = firstItems.map((item) => ({
  ...item,
  href: `${basePath}${item.href}`,
}));

const secondMenuItems: NavbarItem[] = secondItems.map((item) => ({
  ...item,
  href: `${basePath}${item.href}`,
}));

export { fistMenuItems, secondMenuItems };
