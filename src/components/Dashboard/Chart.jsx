'use client'
import React from 'react'
import ReactECharts from 'echarts-for-react';
import {SettingOutlined} from '@ant-design/icons'
import { Dropdown, Space } from 'antd';
import { Threedot } from '@/icon/icon';

export default function ChartX() {
    const option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00']
    },
    yAxis: {
        type: 'value',
        data: [0, 20, 40, 60, 80, 100]
    },
    series: [
        {
        name: 'Sales',
        type: 'line',
        smooth: true,
        data: [31, 40, 28, 50, 42, 82, 56],
        },
        {
        name: 'Revenue',
        type: 'line',
        smooth: true,
        data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
        name: 'Customers',
        type: 'line',
        smooth: true,
        data: [15, 11, 32, 18, 9, 24, 11]
        },
        
    ]
    };

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
        <div className='bg-white shadow rounded-md mt-5 p-5'>
            <div className='flex px-5'>
                <h2 className='text-blue-900 font-bold text-lg'>Report /<span className='text-slate-300'>Today</span></h2>
                <div className='ml-auto'><Dropdownmenu/></div>
            </div>
            <ReactECharts option={option} />
        </div>
    )

  }
