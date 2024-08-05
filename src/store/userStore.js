import {create} from 'zustand'

const useUserStore = create((set) => ({
  userName: '',
  id: '',
  setUserName: (userName) => set(() => ({userName: userName})),
  setId: (id) => set({id}),
}))

export default useUserStore;