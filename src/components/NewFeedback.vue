<template>
<div class="form-div">
    <form @submit.prevent="submitFeedback" class="sbmt-fb">
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

</div>
    
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
            this.enteredEmail = "";
            this.enteredComment = "";
        },
    },
};
</script>

<style>
/* html{
    font-family: 'Palette Mosaic', cursive;
} */


.form-div{
    margin: 0 15em;
}
.sbmt-fb{
    border: 2px solid black;
    border-radius: 24px;
    padding: 2em;
  
    
   
    
}

.sbmt-fb div{
    margin: 1em 0;
}
button{
    cursor: crosshair;
    /* font-family: 'Palette Mosaic', cursive; */
}


    
</style>
