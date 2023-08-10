<!--

- child component: declaring props, using props
- parent component: passing props

- declaring props: const props = defineProps(["fullName"])
- using props: in template {{ fullName }}, in script props.fullName
- passing props: <child-component fullName="Amir Shrestha">

- Static props: <child-component fullName="Amir Shrestha">
- Dynamic props: const fullName = ref('Homo Sapiens'); <child-component :fullName="fullName">

- One way data flow from parent to child. Auto update child when value changes in parent
- Props are read only in child

# Ways to manipualte props in child componenet:
    - assign prop to local state/data_property; const fullNaam = ref(props.fullName); but here data property fullName will not auto update when props value chnages in parent becuase its just use to assign initial value thhen after its disconnected from props value
    - manipulated via comuted property; const intro = computed(() => `Hi I am ${props.fullName}.`)

# Ways to manipualte props in parent componenet:
    - emit

# Pass boolean props:
    - child component:
        const props = defineProps({
            isLoggedIn: Boolean
        })
    - parent component:
        <ChildCompoent isLoggedIn="true"/> || <ChildCompoent isLoggedIn/> || <ChildCompoent :isLoggedIn="Logged"/>

# Reference: https://www.youtube.com/watch?v=xFFewMKeVhs&list=PLbGui_ZYuhih5ItBhn2cTncaS24_Kgeui&index=23&ab_channel=GeekyShows

-->
