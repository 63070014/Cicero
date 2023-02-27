<style>
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');

.group-signup {
    font-family: 'Jura', sans-serif;
    width: 28rem;
    height: 50rem;
}

.head-up {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    font-weight: 800;
}

.head-in {
    border-bottom: 1px solid #d7dade;
    padding-bottom: 5px;
    font-weight: 800;
}

.bg-gray-200 {
    border-left: 1px solid black;
}
</style>
<template>
    <div class="center-set">
        <div class="group-signup flex justify-center flex-col items-center mt-12">
            <div class="center-set w-full">
                <div class="head-in w-2/4 text-center text-3xl text-gray-200 cursor-pointer" @click="LinkTo('/signin')">Sign in</div>
                <div class="head-up w-2/4 text-center text-3xl">Sign up</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>FIRST NAME *</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <span class="mt-6">LAST NAME *</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <span class="mt-6">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="bg-gray-200 h-9 w-1/3 " id=""></select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id=""></select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id=""></select>
                </div>
                <span class="mt-6">PHONE NUMBER *</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <span class="mt-6">EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
                <button @click="LinkTo('/')" class="bg-black text-white h-9 mt-8">REGISTER</button>
                <span class="mt-6 text-center">Forgot your password ?</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'signin',
    methods: {
        LinkTo(e) {
            location.href = e
        },
        
    }
}
</script>