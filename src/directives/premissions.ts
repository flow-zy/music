import { Binding } from '@/types'
const rules = JSON.parse(JSON.stringify(localStorage.getItem('premission')))
const hasPremission = (value: string, el: HTMLElement): any => {
  if (!rules[value]) {
    return el.parentNode && el.parentNode.removeChild(el)
  }
  return rules[value]
}
const premission = {
  inserted: (el: HTMLElement, binding: Binding) => {
    hasPremission(binding.value, el)
  }
}
export default premission
