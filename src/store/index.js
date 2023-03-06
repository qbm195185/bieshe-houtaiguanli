import useAppStore from './modules/app'

export default function useStore() {
    return {
        app: useAppStore(),
    }
}