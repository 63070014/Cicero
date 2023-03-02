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
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="username">
                </div>
                <span class="mt-6">NEW PASSWORD</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <span class="mt-6">CONFIRM PASSWORD</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <button @click="checkMail()" class="bg-black text-white h-9 mt-8">RESET PASSWORD</button>
                <button @click="LinkTo('/signin')" class="border border-black text-black h-9 mt-8">BACK</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'forgot',
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
        getData() {
            var getData = JSON.parse(localStorage.getItem('regisList'))
            var getEmail = ''; var getPass = '';
            for (let i = 0; i < getData.length; i++) {
                getEmail += getData[i].localEmail
                getPass += getData[i].localPassword
            }
            this.getEmail = getEmail
            this.getPass = getPass
        },
        homepage() {
            location.href = '/'
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        checkMail() {
            if (this.username == this.getEmail) {
                this.homepage()
            } else {
                alert("Your Email")
            }
        },
    }
}
</script>