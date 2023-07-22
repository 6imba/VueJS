import {ref,computed} from 'vue'

export default function useName () {
    // firstName & lastName are the state managed and encapsulated and managed by the composable
    const firstName = ref('Amir')
    const lastName = ref('Shrestha')

    const fullName = computed(()=>`${firstName.value} ${lastName.value}`)
    
    return { firstName, lastName, fullName }
}






// - reusability and maintainability and organizability
// - naming convention of composable funtion: pre word use followed by camelCase; ie.function useFetchCMS() { }
// - create and use composable function
// - each component instance calling composable function will create its own copies of state so they wont interfere with ine another.

// # extra:
//  - faker library to generate randome name
