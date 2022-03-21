<template>
    <div>
        <h2> {{email}} </h2>
        <p> {{comment}} </p>
    </div>    
</template>


<script>
export default{
    props: ["email", "comment"],
}
</script>
