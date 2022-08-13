import { Input } from '../Input'
import { FormControl } from './FormControl'

export const TextInput = () => (
  <div className="max-w-xs">
    <FormControl
      hint={<a href="#">Forgot your e-mail address?</a>}
      label="E-mail address"
    >
      <Input placeholder="Type here" />
    </FormControl>
  </div>
)

export default {
  component: FormControl,
  title: 'Elements/FormControl',
}
