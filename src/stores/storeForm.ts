import { defineStore } from 'pinia'
import type { FormDataInterface } from '@/shared/interface'


interface FormStoreInterface {
  data: FormDataInterface[];
}

export const useFormStore = defineStore('Form', {
  state: (): FormStoreInterface => ({
    data: [],
  }),
  getters: {
    getData(state: FormStoreInterface) {
      return state.data
    },
  },
  actions: {
    storeForm(formData: FormDataInterface) {
      // store les data
      this.data.push(formData);
    }
  }
})

