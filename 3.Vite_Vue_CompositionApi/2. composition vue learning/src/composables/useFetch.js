import { ref } from 'vue'

export default function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    const getData = async ()  => {
        try {
            const res = await fetch(url)
            resData = await res.json()
            data.value = resData
        } catch (err) {
            error.value = err
        }
    }

    getData()

    return { data, error }
}



// unref