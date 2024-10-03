import { Circle, Threedot } from '@/icon/icon'
import React from 'react'
import { Dropdown, Space } from 'antd';
import{SettingOutlined} from '@ant-design/icons'

function RecentActivity() {
  const Activity =({activity}) => {
    return (
        <div className='items-center gap-4 my-3 grid grid-cols-8'>
          <div className='col-span-2 text-slate-500'>{activity.time}</div>
          <div>{activity.icon}</div>
          <div className='col-span-5'>{activity.desc}</div>
        </div>
    )
  }
  //dropdown
 const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];
const Dropdownmenu = () => (
  <Dropdown
    menu={{
      items,
    }}
    placement="bottomRight"
    arrow
  >
    {/* <a onClick={(e) => e.preventDefault()}> */}
      <Space>
        <Threedot />
      </Space>
    {/* </a> */}
  </Dropdown>
);

//dropdown end
  return (
    <div className='p-4 bg-white shadow rounded-md'>
        <div className='flex'>
            <h1 className='text-blue-900 font-bold mb-2 text-lg'>Recent Activity  | <span className='text-slate-300'>Today</span></h1>
            <div className='ml-auto'><Dropdownmenu/></div>
        </div>
        <div>
          <Activity 
            activity={{
              time: '32 min',
              icon: <div className='text-green-900'> <Circle/></div>,
              desc: 'Choose a book from your favorite genre each day.'
            }}
          />
        </div>
        <div>
          <Activity 
            activity={{
              time: '56 min',
              icon: <div className='text-red-700'> <Circle/></div>,
              desc: 'Start with basic Python programming logics'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '2hrs',
              icon: <div className='text-blue-900'> <Circle/></div>,
              desc: 'Plant and maintain a small garden. This activity is relaxing.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '1 day',
              icon: <div className='text-blue-400'> <Circle/></div>,
              desc: 'Take up photography as a hobby. Explore different techniques.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '2 days',
              icon: <div className='text-yellow-500'> <Circle/></div>,
              desc: 'Offer your time to a local charity or community organizations.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '4 weeks',
              icon: <Circle/>,
              desc: "Start a blog on a topic you are passionate about today."
            }}
            />
        </div>
    </div>
  )
}

export default RecentActivity