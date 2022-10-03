export function useClickOutSide() {
    const clickOutSide = ( element: HTMLElement, handle: () => void ) => {
        document.addEventListener('click', handleClickOutSide)

        function handleClickOutSide({target}: any) {
            if (!element.contains(target)) {
                handle()
                document.removeEventListener('click', handleClickOutSide)
            }
        }
    }

    return { clickOutSide }
}