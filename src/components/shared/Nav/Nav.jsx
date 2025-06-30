'use client';
import { useState } from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import { ROUTES } from '@/utils/constants';

export const navData = [
  { title: 'About', url: ROUTES.ABOUT },
  { title: 'Team', url: ROUTES.TEAM },
  { title: 'Case Studies', url: ROUTES.CASE_STUDIES },
  { title: 'Resources', url: ROUTES.RESOURCES },
  {
    title: 'Contact',
    url: ROUTES.CONTACT,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DesktopNav navData={navData} />
      {isOpen && (
        <MobileNav navData={navData} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </>
  );
}
