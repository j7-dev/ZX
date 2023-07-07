import { useState } from 'react'
import { FaCrown } from 'react-icons/fa'
import { Button, Modal } from 'antd'
import PricingTable from './PricingTable'

const Upgrade = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button
                icon={<FaCrown />}
                className="mr-4 bg-yellow-500 hover:bg-yellow-400"
                type="primary"
                onClick={showModal}
            >
                立即升級
            </Button>
            <Modal
                width={1200}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                footer={null}
            >
                <PricingTable />
            </Modal>
        </>
    )
}

export default Upgrade
