<template>
    <div class="fb">
        <h2> {{email}} </h2>
        <p> {{comment}} </p>
    </div>    
</template>


<script>
export default{
    props: ["email", "comment"],
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
</style>
