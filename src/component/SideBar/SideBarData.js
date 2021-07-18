import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Ri from 'react-icons/ri';
import * as Md from 'react-icons/md';
// import AiOutlineHome as Home from 'react-icons/'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Ai.AiFillHome />,
    iconClosed: <Ri.RiArrowDownSFill />,
    iconOpened: <Ri.RiArrowUpSFill />,
  },
  {
    title: 'UPJobs',
    path: '/jobs',
    icon: <Fa.FaSearch />,
    iconClosed: <Ri.RiArrowDownSLine />,
    iconOpened: <Ri.RiArrowUpSLine />,
  },
  {
    title: 'UPFeed',
    path: '/feed',
    icon: <Md.MdExplore />
  },
  {
    title: 'UPChat',
    path: '/chat',
    icon: <Ri.RiChatSmile2Fill />
  },
  {
    title: 'UPEvent',
    path: '/event',
    icon: <Md.MdEventAvailable />,

    iconClosed: <Ri.RiArrowDownSLine />,
    iconOpened: <Ri.RiArrowUpSLine />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <Md.MdEventAvailable />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <Md.MdEventAvailable />
      }
    ]
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Fa.FaUserCircle />
  }
];