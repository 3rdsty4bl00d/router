<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- here it will show the
            loaded id
            by using string interpolation
         -->
        <p>
            Loaded ID: {{ id }}
        </p>

        <!-- 

            this will navigate to home
            once we click on it
         -->
        <button class="btn btn-primary" @click="navigateToHome">
            Go to Home
        </button>
    </div>
</template>

<script>
    export default {
        /* 
            this is the data
            here, we have stored the data
            the data is
            id
            $route will route the user id
            params will give a parameter of the id

        */

       /* 
            but this will give a problem
            if we create two user
            it will show same loaded id
            on both of the user
            because, vuejs will
            not re-create the parameter
            it will stick to the same parameter 
            wherever it is clicked
            so, to remove such error
            we have to keep watch on the $route
       */
        data() {
            return {
                id: this.$route.params.id
            }
        },

        /* 
            here we watch the $route
            because vuejs will not re-create 
            the parameter
            and if it is watched
            whenever we click on the second user
            it will re-create the parameters
        */
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        },

        /* 
            this will push your page
            to home page
        */
        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>