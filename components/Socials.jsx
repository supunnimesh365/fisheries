'use client';

import {
  RiWhatsappFill,
  RiFacebookFill,
  RiYoutubeFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: '/',
    name: <RiWhatsappFill />,
  },
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
