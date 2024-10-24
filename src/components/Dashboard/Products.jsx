
import { Threedot } from '@/icon/icon';
import { Dropdown, Space } from 'antd';
import {SettingOutlined} from '@ant-design/icons'
import React from 'react'

function Products() {
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
  return (
    <div className='bg-white shadow rounded-md mt-5 p-5'>
      <div className='flex px-5'>
          <h2 className='text-blue-900 font-bold text-lg'>Report /<span className='text-slate-300'>Today</span></h2>
          <div className='ml-auto'><Dropdownmenu/></div>
      </div>
      {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5'> */}
      <div className='grid grid-cols-12 2xl'>
        <h2 className='col-span-2'>Preview</h2>
        <h2 className='col-span-4'>Product</h2>
        <h2 className='col-span-2'>Price</h2>
        <h2 className='col-span-2'>Sold</h2>
        <h2 className='col-span-2'>Revenue</h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Products