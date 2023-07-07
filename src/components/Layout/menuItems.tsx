import { FaRobot } from 'react-icons/fa'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const menuItems = [
    {
        key: '1',
        icon: <FaRobot />,
        label: <Link to="/generate">AI 生成內容</Link>,
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: <Link to="/account-setting">帳號設定</Link>,
    },
]
