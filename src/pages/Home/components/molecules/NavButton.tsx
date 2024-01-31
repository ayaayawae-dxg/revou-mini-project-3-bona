import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'

type Props = {
  current: number;
  steps: object[];
  next: () => void;
  prev: () => void;
}

const NavButton = ({current, steps, next, prev}: Props) => {
  return (
    <Flex justify="space-between" style={{ marginTop: "1rem" }}>
      {current > 0 ? (
        <Button size="large" icon={<ArrowLeftOutlined />} type="primary" onClick={prev} />
      ) : (
        <div></div>
      )}
      {current < steps.length - 1 && (
        <Button size="large" icon={<ArrowRightOutlined />} type="primary" onClick={next} />
      )}
      {current === steps.length - 1 && (
        <Button size="large" type="primary" htmlType="submit">
          Done
        </Button>
      )}
    </Flex>
  )
}

export default NavButton