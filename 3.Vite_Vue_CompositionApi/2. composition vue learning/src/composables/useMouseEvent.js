import { ref,onMounted, onUnmounted } from 'vue'

export default function useMouseEvent() {
    const numb = ref(0)

    onMounted(() => window.addEventListener("mousemove", () => numb.value++ ))
    
    return { numb }
}

