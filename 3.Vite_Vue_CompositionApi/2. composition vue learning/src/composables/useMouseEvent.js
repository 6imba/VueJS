import { ref,onMounted } from 'vue'

export default function useMouseEvent() {
    const numb = ref(0)
    onMounted(() => window.addEventListener("mousemove", () => numb.value++ ))
    return { numb }
}

// - compasable ~ event ~ add/remove ~ mount/unmount
