<template>
<div class="form-div">
    <form @submit.prevent="submitFeedback" class="sbmt-fb">
        <div>
            <input type="email" placeholder="email@email.com" v-model="enteredEmail">
        </div>
        <div>
            <input type="text" placeholder="name" v-model="enteredName">
        </div>
        <div>
            <input type="text" placeholder="comment" v-model="enteredComment">
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
            enteredName: "",
            enteredComment: ""
        };
    },
    
    methods: {
        submitFeedback() {
            this.$emit("add-feedback",this.enteredEmail,this.enteredName, this.enteredComment);
            this.enteredEmail = "";
            this.enteredName = "";
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
