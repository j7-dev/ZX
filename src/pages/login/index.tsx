import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        form.validateFields().then(() => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                navigate('/generate')
            }, 1500)
        })
    }

    return (
        <div className="h-screen flex items-center justify-center bg-login">
            <div className="w-[20rem] bg-white p-8 rounded-xl">
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                    className="py-8"
                >
                    <Form.Item
                        name="account"
                        label="帳號"
                        initialValue="TEST"
                        rules={[{ required: true }]}
                    >
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密碼"
                        rules={[{ required: true, message: '請輸入密碼' }]}
                    >
                        <Input.Password placeholder="輸入密碼" />
                    </Form.Item>

                    <Button
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        className="w-full mt-4"
                        onClick={handleClick}
                    >
                        送出
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
