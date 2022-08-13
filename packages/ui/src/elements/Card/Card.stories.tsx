import { Button } from '../Button'
import { Card } from './Card'

const defaultProps = {
  actions: <Button>Button</Button>,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ornare lectus eu ultrices. Sed vehicula felis quis elementum posuere.',
  title: 'Title',
}

export const Base = () => (
  <div className="max-w-sm">
    <Card {...defaultProps} />
  </div>
)

export const Text = () => (
  <div className="max-w-sm">
    <Card {...defaultProps} actions={undefined} title={undefined} />
  </div>
)

export const Title = () => (
  <div className="max-w-sm">
    <Card {...defaultProps} actions={undefined} />
  </div>
)

export default {
  component: Card,
  title: 'Elements/Card',
}
