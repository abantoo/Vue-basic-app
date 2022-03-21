<template>
    <form @submit.prevent="submitFeedback">
        <div>
            <input type="email" v-model="enteredEmail">
        </div>

        <div>
            <input type="text" v-model="enteredComment">
        </div>

        <div>
            <button>Add Feedback</button>
        </div>
    </form>
</template>

<script>

export default {
    emits: ["add-feedback"],
    data() {
        return {
            enteredEmail: "",
            enteredComment: ""

        };
    },
    
    methods: {
        submitFeedback() {
            this.$emit("add-feedback",this.enteredEmail, this.enteredComment);
        },
    },
};
</script>
