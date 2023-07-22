<template>
    <div>
        <h2>Component loacl reactive api state</h2>
        <hr>
        state: {{ state }} <br>
        state.books:{{ state.books }} <br>
        <hr>

        <h2>Books</h2>
        <div v-for="book in state.books" :key="book.id">
            <p>Name: {{book.name}}</p>
            <p>Price: {{ book.price }}</p>
            <p>------------------------------</p>
        </div>
        <hr>

        <h2>Books and its index number:</h2>
        <div v-for="(book, index) in state.books" :key="book.id">
        <template v-if="book.price < 200">
            <p>Index: {{ index }}</p>
            <p>Name: {{ book.name }}</p>
            <p>Price: {{ book.price }}</p>
            <p>------------------------------</p>
        </template>
        </div>
        <hr>

        <!-- 1st prefered for conditional list rendering -->
        <h2>Books costs less tha Rs.200 (<i>using computed for coditional list rendering</i>)</h2>
            <div v-for="book in cheapBooks" :key="book.id">
                <p>Name: {{ book.name }}</p>
                <p>Price: {{ book.price }}</p>
                <p>------------------------------</p>
            </div>
        <hr>

        <!-- 2nd prefered for conditional list rendering -->
        <h2>Books costs less tha Rs.200 (<i>using template for coditional list rendering</i>)</h2>
        <template v-for="book in state.books">
            <div v-if="book.price < 200" :key="book.id">
                <p>Name: {{ book.name }}</p>
                <p>Price: {{ book.price }}</p>
                <p>------------------------------</p>
            </div>
        </template>
        <hr>
            
        <!-- 3rd prefered for conditional list rendering -->
        <h2>Books costs less tha Rs.200 (<i>using template for coditional list rendering</i>)</h2>
        <div v-for="book in state.books" :key="book.id">
            <template v-if="book.price < 200">
                <p>Name: {{ book.name }}</p>
                <p>Price: {{ book.price }}</p>
                <p>------------------------------</p>
            </template>
        </div>
        <hr>

        <!-- 4th prefered for conditional list rendering -->
        <h2>Books costs less tha Rs.200 (<i>using template for coditional list rendering</i>)</h2>
        <div v-for="book in state.books" :key="book.id">
            <div v-if="book.price < 200">
                <p>Name: {{ book.name }}</p>
                <p>Price: {{ book.price }}</p>
                <p>------------------------------</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script setup>

    import { reactive, computed } from 'vue'
    const state = reactive({
        books: [
            {
                id: 1,
                name: 'social',
                price: 190
            },
            {
                id: 2,
                name: 'math',
                price: 450
            },
            {
                id: 3,
                name: 'nepali',
                price: 150
            }
        ]
    })
    const cheapBooks = computed(() => state.books.filter(book=>book.price<200))
    
</script>

<!-- 
    - v-for="(value,index) in arr"
    - :key attribute for unique identifier for each item/element/node of list
    # way to render whole element of each iteration
        - nested temaplte.
        - computed property to filter.

    Q. what can be the value of key directive?


    
    in v-for(element,index) can we use index as value for key ?. errors does not provide any unique identifier so, opting for array indexYes, you can use the index as the value for the key in a v-for loop when you don't have a unique identifier available for each item in the array. However, it's important to note that using the index as the key should be considered as a last resort and only when there are no other options for unique identification.
    When using the index as the key, you need to be aware of the potential issues that may arise if the array is modified (items are added, removed, or reordered) during reactivity updates. In such cases, using the index as the key may lead to unexpected behavior, such as incorrect updates or potential duplication of elements.
    Ideally, if your items don't have a unique identifier, it's recommended to consider alternative approaches for generating or obtaining unique identifiers. For example, you could generate unique IDs for the items before rendering the list, or use a library or utility to create unique keys based on the item's properties.
    Remember that using a unique identifier as the key is generally the best practice, as it ensures proper reactivity and avoids potential issues when working with dynamic lists.

 -->