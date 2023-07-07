import { Button, Form, Input, Row, Col } from 'antd'

const AccountSetting = () => {
    const [form] = Form.useForm()

    return (
        <Row>
            <Col span={24} xl={{ span: 12 }}>
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="account"
                        label="帳號"
                        initialValue="TEST"
                        rules={[{ required: true }]}
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item name="company" label="公司">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="姓名"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="電話"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        儲存
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AccountSetting
