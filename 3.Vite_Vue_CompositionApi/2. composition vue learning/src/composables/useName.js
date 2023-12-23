import {ref,computed} from 'vue'

export default function useName () {
    // firstName & lastName are the state encapsulated and managed by the composable
    const firstName = ref('Amir')
    const lastName = ref('Shrestha')

    const fullName = computed(()=>`${firstName.value} ${lastName.value}`)
    
    return { firstName, lastName, fullName }
}

//  - faker library to generate randome name for testing purpose
