import {
    createApp
} from 'vue'
import App from './App.vue'
import FeedbackTemplate from "./components/FeedbackTemplate.vue"
import NewFeedback from "./components/NewFeedback.vue"

const app = createApp(App);

app.component("feedback-template", FeedbackTemplate)
app.component("new-feedback", NewFeedback);

app.mount('#app');