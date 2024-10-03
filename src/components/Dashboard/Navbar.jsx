'use client'

import React,{ useState } from 'react';
import {PicCenterOutlined,LoginOutlined,ProfileOutlined, UserOutlined, 
     ContainerOutlined,AppstoreOutlined,RightCircleOutlined,TableOutlined, BarChartOutlined,SketchOutlined,QuestionCircleOutlined,IdcardOutlined,SettingOutlined} from '@ant-design/icons';
import { Avatar, Button, Input, Layout, Menu, theme,Badge,Space,Dropdown } from 'antd';
import Image from 'next/image';
import ProfileImg from '../../image/test2.PNG'
import Home from '@/app/page';
import { TextIndentLeft, TextIndentRight} from '@/icon/icon';
import { Cart, Message, Notify } from '@/icon/badges';

const { Header, Content, Sider } = Layout;
const {Search} = Input;

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
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
      <a onClick={(e) => e.preventDefault()}>
        <Space className='ml-2'>
        <Button type="primary" icon={<Avatar src={<Image src={ProfileImg} alt="avatar"/>} />} />
        </Space>
      </a>
    </Dropdown>
  );
//dropdown end
  return (
    <Layout>
      <Header
        
        style={{
          display: 'flex',
          alignItems: 'center',
          background:"white",
          padding: '0 50px',
        }}
      >
        {/* <div className="demo-logo" /> */}
        <div>
            <Image 
            src={ProfileImg} 
            alt='ProfileImg'
            className='w-16 rounded-full'
            />
        </div>
        <div className='text-blue-900 ml-4 hidden sm:inline'>
            <h2 className='text-xl font-bold'>Dashboard</h2>
        </div>
          <Button
            type="text"
            icon={collapsed ? <TextIndentLeft/> : <TextIndentRight/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '30px',
              width: 50,
              height: 50,
              // color: 'white'
            }}
            className='font-extrabold ml-4 mr-4'
          />
          {/* search bar */}
          <div className='mt-8 mr-2' style={{width:"35rem"}}>
                <Search placeholder="Search..." size='large' enterButton className='w-full rounded-none outline-none'/>
          </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          //items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <div className='hidden sm:inline mt-3'>
            <Cart/>
            <Notify/>
            <Message/>
        </div>
        <Dropdownmenu />
      </Header>
      <Layout>
        <Sider
        trigger={null} collapsible collapsed={collapsed}
          width={250}
          style={{
            background: colorBgContainer,
          }}
          //you can remove this to allow icons on small screens
          breakpoint="lg"
          collapsedWidth="0"
          className='pt-5 mt-1 px-2'
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            
            items={[
                {
                  key: '1',
                  icon: <AppstoreOutlined/>,
                  label: 'Dashboard',
                  //children: items2,
                },
                {
                    key: '2',
                    icon: <PicCenterOutlined />,
                    label: 'Components',
                    children: [
                        {
                          key: '21',
                          icon: <RightCircleOutlined />,
                          label: 'Alert',
                        },
                        {
                          key: '22',
                          icon: <RightCircleOutlined />,
                          label: 'Acordion',
                        },
                        {
                          key: '23',
                          icon: <RightCircleOutlined />,
                          label: 'Badges',
                        },
                        {
                          key: '24',
                          icon: <RightCircleOutlined />,
                          label: 'Breadcrumbs',
                        },
                        {
                          key: '25',
                          icon: <RightCircleOutlined />,
                          label: 'Cards',
                        },
                        {
                          key: '26',
                          icon: <RightCircleOutlined />,
                          label: 'Carousel',
                        },
                        {
                          key: '27',
                          icon: <RightCircleOutlined />,
                          label: 'Modal',
                        }
                    ],
                },
                {
                    key: '3',
                    icon: <ContainerOutlined />,
                    label: 'Forms',
                    children: [
                        {
                          key: '31',
                          icon: <RightCircleOutlined />,
                          label: 'Form Elements',
                        },
                        {
                          key: '32',
                          icon: <RightCircleOutlined />,
                          label: 'Form Layouts',
                        },
                        {
                          key: '33',
                          icon: <RightCircleOutlined />,
                          label: 'Form Editors',
                        },
                        {
                            key: '34',
                          icon: <RightCircleOutlined />,
                          label: 'Validations',
                        }
                    ],
                },
                {
                    key: '4',
                    icon: <TableOutlined />,
                    label: 'Tables',
                    children: [
                        {
                          key: '41',
                          icon: <RightCircleOutlined />,
                          label: 'Basic Tables',
                        },
                        {
                          key: '42',
                          icon: <RightCircleOutlined />,
                          label: 'Data Tables',
                        },
                        {
                          key: '43',
                          icon: <RightCircleOutlined />,
                          label: 'Editable Tables',
                        },
                        {
                          key: '44',
                          icon: <RightCircleOutlined />,
                          label: 'Draggable Tables',
                        }
                    ],
                },
                {
                    key: '5',
                    icon: <BarChartOutlined />,
                    label: 'Charts',
                    children: [
                        {
                          key: '51',
                          icon: <RightCircleOutlined />,
                          label: 'Charts.js',
                        },
                        {
                          key: '52',
                          icon: <RightCircleOutlined />,
                          label: 'ApexCharts',
                        },
                        {
                          key: '53',
                          icon: <RightCircleOutlined />,
                          label: 'ECharts',
                        }
                    ],
                },
                {
                    key: '6',
                    icon: <SketchOutlined />,
                    label: 'Icons',
                    children: [
                        {
                          key: '61',
                          icon: <RightCircleOutlined />,
                          label: 'Bootstrap Icon',
                        },
                        {
                          key: '62',
                          icon: <RightCircleOutlined />,
                          label: 'Remix Icon',
                        },
                        {
                          key: '63',
                          icon: <RightCircleOutlined />,
                          label: 'BoxIcon',
                        }
                    ],
                },
                {
                    key:'7',
                    label:'PAGES',
                },
                {
                    key:'8',
                    icon:<UserOutlined/>,
                    label:'Profile',
                },
                {
                  key:'9',
                  icon:<QuestionCircleOutlined />,
                  label:'F.A.Q',
                },
                {
                  key:'10',
                  icon:<IdcardOutlined />,
                  label:'Contact',
                },
                {
                  key:'11',
                  icon:<ProfileOutlined />,
                  label:'Register',
                },
                {
                  key:'12',
                  icon:<LoginOutlined />,
                  label:'Login',
                }
  
            ]}
            //items={items2}
          />
          
        </Sider>
        <Layout
          style={{
            padding: '24px',
          }}

          className='bg-blue-50'
        >
            
          <Content
            style={{
              //padding: 24,
              margin: 0,
              // minHeight: 280,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
            className='bg-blue-50'
            
          >
            <Home/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Navbar;
