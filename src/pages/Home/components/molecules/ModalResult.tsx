import { SmileOutlined } from "@ant-design/icons";
import { Flex, Modal, Result, Typography } from "antd";
import moment from "moment";
import { useFormContext } from "react-hook-form";

type Props = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const ModalResult = ({ isModalOpen, handleOk, handleCancel }: Props) => {
  const { getValues } = useFormContext();
  return (
    <Modal
      title="Form Result"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Result icon={<SmileOutlined />} title="Registration Completed!" />
      {Object.keys(getValues()).map((key) => (
        <Flex key={key}>
          <Typography.Text strong style={{minWidth: 150}}>{key.toUpperCase()}</Typography.Text>
          <Typography.Text>: {key === 'birthDate' ? moment(getValues()[key]).format("YYYY-MMM-DD") : getValues()[key]}</Typography.Text>
        </Flex>
      ))}
    </Modal>
  );
};

export default ModalResult;
