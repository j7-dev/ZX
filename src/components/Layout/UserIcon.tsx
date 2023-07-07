import { Dropdown, MenuProps } from 'antd'
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const UserIcon = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to="/account-setting">
                    <div className="w-32">
                        <SettingOutlined className="mr-4" />
                        TEST
                    </div>
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to="/login">
                    <div className="w-32">
                        <LogoutOutlined className="mr-4" />
                        登出
                    </div>
                </Link>
            ),
        },
    ]

    return (
        <>
            <Dropdown menu={{ items }} trigger={['click']}>
                <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-500 cursor-pointer">
                    T
                </div>
            </Dropdown>
        </>
    )
}

export default UserIcon
