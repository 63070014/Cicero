<style>
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');

.group-signin {
    font-family: 'Jura', sans-serif;
    width: 28rem;
    height: 32rem;
}

.sign-in {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    font-weight: 800;
}

.sign-up {
    border-bottom: 1px solid #d7dade;
    padding-bottom: 5px;
    font-weight: 800;
}

/* .email,
.password {
    border-left: 1px solid black;
} */
</style>
<template>
    <div class="center-set">
        <div class="group-signin flex justify-center flex-col items-center mt-12">
            <div class=" flex justify-center items-center w-full">
                <div class="sign-in w-2/4 text-center text-3xl">Sign in</div>
                <div class="sign-up w-2/4 text-center text-3xl text-gray-200">Sign up</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <button @click="homepage()" class="bg-black text-white h-9 mt-8">LOGIN</button>
                <span class="mt-6 text-center">Forgot your password ?</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'signin',
    methods: {
        homepage() {
            location.href='/'
        }
    }
}
</script>