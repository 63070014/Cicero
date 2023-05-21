<style>
.resetHead {
    border-bottom: 1px solid #d7dade;
}
</style>
<template>
    <div class="center-set">
        <div class="group-signin flex justify-center flex-col items-center mt-12">
            <div class=" flex justify-center items-center w-full">
                <div class="resetHead w-full text-3xl">Reset Your Password</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="email">
                </div>
                <span class="mt-6">NEW PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <span class="mt-6">CONFIRM PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" v-model="confirm">
                </div>
                <button @click="changePass()" class="bg-black text-white h-9 mt-8">RESET PASSWORD</button>
                <button @click="LinkTo('/signin')" class="border border-black text-black h-9 mt-8">BACK</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'forgot',
    data() {
        return {
            email: '',
            password: '',
            confirm: '',
            getEmail: '',
            getPass: '',
            check: '',
        }
    },
    methods: {
        homepage() {
            location.href = '/'
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        async changePass() {
            if(this.password == this.confirm){
                await axios.put(`http://localhost:3000/changePass/`,{
                    email : this.email,
                    password : this.password
                }).
                    then(() => {
                        alert("Your new Password change successfully")
                        this.LinkTo('/signin')
                    })
            }
        },
    }
}
</script>