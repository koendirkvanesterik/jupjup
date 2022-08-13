import { Button, ButtonColor, ButtonVariant } from './Button'

export const Base = () => <Button>Base</Button>

export const Block = () => (
  <div className="max-w-sm">
    <Button variant="block">Block</Button>
  </div>
)

export const Colors = () => {
  const colors: ButtonColor[] = ['info', 'success', 'warn', 'error']

  return (
    <div className="flex space-x-2">
      {colors.map((color) => (
        <Button key={color} color={color}>
          {color}
        </Button>
      ))}
    </div>
  )
}

export const Variants = () => {
  const variants: ButtonVariant[] = ['outline', 'ghost']

  return (
    <div className="flex space-x-2">
      <Button>Default</Button>
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  )
}

export default {
  component: Button,
  title: 'Elements/Button',
}
