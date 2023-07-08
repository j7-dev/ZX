import { Row, Col, Input, Button, Form } from 'antd'
import Dialog, { TDialog } from '@/components/Dialog'
import Loading from '@/components/Dialog/Loading'
import { useState, useRef } from 'react'
import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker'

const { TextArea } = Input

const Generate = () => {
    const [form] = Form.useForm()
    const [validateStatus, setValidateStatus] = useState<
        'success' | 'warning' | 'error' | 'validating' | undefined
    >(undefined)
    const textAreaRef = useRef<any>(null)
    const [dialog, setDialog] = useState<TDialog[]>([])
    const [isValid, setIsValid] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const handleClick = () => {
        const text =
            textAreaRef?.current?.resizableTextArea?.textArea?.value || ''
        if (text) {
            new Promise((resolve) => {
                setIsLoading(true)
                resolve(null)
                setTimeout(() => {
                    setIsLoading(false)
                    setDialog((prev) => [
                        ...prev,
                        { role: 'user', content: text },
                        {
                            role: 'AI',
                            content: faker.lorem.lines({ min: 4, max: 8 }),
                        },
                    ])
                }, 3000)
            })
        }
    }

    const handleValidate = () => {
        setValidateStatus('validating')
        setTimeout(() => {
            form.validateFields(['fb'])
                .then(() => {
                    setValidateStatus('success')
                    setIsValid(true)
                })
                .catch(() => {
                    setValidateStatus('error')
                    setIsValid(false)
                })
        }, 3500)
    }
    return (
        <Row gutter={24} className=" pb-12">
            <Col span={24} xl={{ span: 12 }}>
                <h2 className="text-gray-800">AI 生成內容</h2>
                <p>請輸入連結的 Facebook 粉絲專頁 URL</p>
                <Form
                    layout="horizontal"
                    form={form}
                    validateTrigger={['onSubmit']}
                >
                    <div className="flex">
                        <Form.Item
                            name={['fb']}
                            rules={[
                                { required: true, message: '請輸入 URL' },
                                { type: 'url', message: '請輸入合規的 URL' },
                            ]}
                            hasFeedback={validateStatus !== undefined}
                            validateStatus={validateStatus}
                            className="w-full mr-4"
                        >
                            <Input
                                placeholder="請輸入 URL"
                                disabled={
                                    validateStatus === 'validating' ||
                                    validateStatus === 'success'
                                }
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                onClick={handleValidate}
                                disabled={validateStatus === 'validating'}
                            >
                                連結
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
                <TextArea
                    ref={textAreaRef}
                    showCount
                    maxLength={200}
                    className="h-48"
                    style={{ resize: 'none' }}
                    placeholder="請輸入內容"
                />
                <div className="text-right mt-8">
                    <Button
                        type="primary"
                        onClick={handleClick}
                        loading={isLoading}
                        disabled={!isValid}
                    >
                        生成
                    </Button>
                </div>
            </Col>
            <Col span={24} xl={{ span: 12 }}>
                <div className="mt-16 rounded-md h-full w-full bg-gray-100 min-h-48 max-h-[30rem] overflow-y-auto px-4 py-8 text-gray-800">
                    {dialog.map((item) => (
                        <Dialog
                            key={nanoid()}
                            role={item.role}
                            content={item.content}
                        />
                    ))}
                    {isLoading && <Loading />}
                </div>
            </Col>
        </Row>
    )
}

export default Generate
