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

.forgot:hover {
    text-decoration: underline;
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
                <div @click="LinkTo('/signup')" class="sign-up w-2/4 text-center text-3xl text-gray-200 cursor-pointer">Sign
                    up</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.username.$error }" v-model="v$.username.$model">
                </div>
                <template v-if="v$.username.$error">
                    <p class="text-red-500">Please enter your Email address</p>
                </template>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.password.$error }" v-model="v$.password.$model">
                </div>
                <template v-if="v$.password.$error">
                    <p class="text-red-500">Please enter your Password</p>
                </template>
                <button @click="getData()" class="bg-black text-white h-9 mt-8">LOGIN</button>
                <span @click="LinkTo('/forgot')" class="forgot mt-6 text-center cursor-pointer">Forgot your password
                    ?</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {
    name: 'signin',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            username: '',
            password: '',
            getEmail: '',
            getPass: '',
            check: '',
        }
    },
    methods: {
        getData(){
            console.log(this.getPass);
            this.v$.$touch();
            if (!this.v$.$invalid) {
                try {
                    axios.post('http://localhost:3000/user/login',{
                        email: this.username,
                        password: this.password
                    }).then((res)=>{
                        if (res.data.user_id){
                            alert("Successfully")
                            localStorage.setItem("user", JSON.stringify(res.data))
                            this.homepage()
                        }
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        },
        homepage() {
            location.href = '/'
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
    },
    validations() {
        return {
            username: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(8),
            },
        }
    },
}
</script>