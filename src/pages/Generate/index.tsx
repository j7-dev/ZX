import { Row, Col, Input, Button } from 'antd'
import Dialog, { TDialog } from '@/components/Dialog'
import Loading from '@/components/Dialog/Loading'
import { useState, useRef } from 'react'
import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker'
import { FaRobot } from 'react-icons/fa'

const { TextArea } = Input

const Generate = () => {
    const textAreaRef = useRef<any>(null)
    const [dialog, setDialog] = useState<TDialog[]>([])
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
    return (
        <Row gutter={24} className=" pb-12">
            <Col span={24} xl={{ span: 12 }}>
                <h2 className="text-gray-800">AI 生成內容</h2>
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
