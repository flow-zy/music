import { defineStore } from 'pinia'
import { PreStore } from '@/types'
export const preStore = defineStore('pre', {
  state: (): PreStore => {
    return {
      premissionObj: {}
    }
  },
  actions: {
    setPre(arr: [string]) {
      arr.forEach(key => (this.premissionObj[key] = 1))
      window.localStorage.setItem(
        'premission',
        JSON.stringify(this.premissionObj)
      )
    }
  }
})
