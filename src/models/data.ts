import {
  selector,
  atom
} from 'recoil'
import { getData } from '../api/markdown'

export const useMdSourceQuery = selector({
  key: 'MdSourceData',
  get: async () => {
    const res = await getData()

    return res.split('\n')
  }
})

export const useDividerList = atom({
  key: 'DividerList',
  default: {}
})
