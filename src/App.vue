<template>
  <div>
    <feedback-template
     v-for="fb in feedbacks"
    :key="fb.email" 
    :email = "fb.email" 
    :comment ="fb.comment">
    </feedback-template>
  </div>

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
          comment: " Initial Dummy comment"
        }
      ]
    }
  },
  methods: {
    addFeedback(email, comment){
      const newFeedback = {
        email: email,
        comment: comment,
      } 
      this.feedbacks.push(newFeedback);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
