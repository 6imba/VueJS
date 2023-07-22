<template>
    <div>
        {{fullName1()}}
        <br>
        {{fullName2()}}
        <br>
        {{ fullName3('Amir', 'Shrestha') }}
        <br>
        {{ fullName4() }}
        <hr>
        {{ fullName1 }}<br>
        {{ fullName2 }}<br>
        {{ fullName3 }}<br>
        {{ fullName4 }}<br>
</div>
</template>

<script setup>
    import {ref} from 'vue'

    function fullName1(){
        return 'Amir Shrestha'
    }

    const fullName2 = () => 'Amir Shrestha'

    const fullName3 = (fName, lName) => fName + ' ' + lName

    const fName = ref('Amir')
    const fullName4 = () => fName.value + ' Shrestha'
    
    setTimeout( ()=> {
        fName.value = 'Simba'
    }, 3000)

</script>