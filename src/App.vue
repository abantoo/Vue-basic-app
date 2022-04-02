<template>
  <header>
    <h2 class="feedback-header">
      Feedbacks
    </h2>
    
  </header>
  <div>
   
    <feedback-template
      v-for="fb in feedbacks"
      :key="fb.email" 
      :name = "fb.name"
      :email = "fb.email" 
      :comment ="fb.comment"
      :is-starred = "fb.isStarred"
      @toggle-starred="toggleStarredStatus"
      >
    </feedback-template>
  </div>

  <h2 class="feedback-header">
    Add Feedback
  </h2>

  <div>
    <new-feedback @add-feedback="addFeedback"></new-feedback>
  </div>
</template>

<script>

export default {
  data() {
    return {
      feedbacks: [
        {
          email: "justFirstSampleDummy@email.com",
          name:"Dummy",
          comment: " Initial Dummy comment",
          isStarred: false
        }
      ]
    }
  },
  methods: {
    addFeedback(email, name, comment){
      const newFeedback = {
        email: email,
        name:name,
        comment: comment,
      } 
      this.feedbacks.push(newFeedback);
    },
    toggleStarredStatus(emailAddress) {
      const toBeStarred = this.feedbacks.find( feedback => feedback.email === emailAddress);
      toBeStarred.isStarred = !toBeStarred.isStarred

    }

  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: 'Palette Mosaic', cursive; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.feedback-header{
  color: whitesmoke;
  -webkit-text-stroke: thin black;
  font-size: 2.5em;
  text-decoration: underline ;
  text-underline-offset: 2px;
}


</style>
