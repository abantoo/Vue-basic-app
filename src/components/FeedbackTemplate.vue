<template>
    <div class="fb">
        <h2> {{email}} {{ isStarred ? "(Star)" : "" }} </h2>
        <button @click="toggleStarred">Toggle Star</button>
        <button @click="toggleDetails">{{detailsAreVisible ? "Hide": "Show"}} </button>
        <ul v-if="detailsAreVisible">
            <li>
                <p> {{name}} </p>
            </li>
            <li>
                <p> {{comment}} </p>
            </li>
        </ul>
    </div>    
</template>


<script>
export default{
    //props: ["email", "comment"],
    props: {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        isStarred: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ["is-starred"],
    // emits: {
    //     "toggle-starred": function(email){
    //         if(email){
    //             return true
    //         }
            
    //         else{
    //             return false
    //         }
    //     },
    // },

    data(){
        return{
            detailsAreVisible: false,
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleStarred() {
            this.$emit("toggle-starred", this.email)
        }
    }
}
</script>

<style>
    .fb{
        border: thin solid grey;
        background:  whitesmoke;
        min-height: 4em;
        width: fit-content;
        margin: 1em auto;
        padding: 2px 10px;
        border-radius: 24px;
       
    }

    li{
        list-style: none;
    }
</style>
