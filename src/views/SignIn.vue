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
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="username">
                </div>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <button @click="checkData()" class="bg-black text-white h-9 mt-8">LOGIN</button>
                <span @click="LinkTo('/forgot')" class="forgot mt-6 text-center cursor-pointer">Forgot your password
                    ?</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'signin',
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
        checkData() {
            var getData = JSON.parse(localStorage.getItem('user'))
            var getEmail = ''; var getPass = '';
            if (getData != null) {
                for (let i = 0; i < getData.length; i++) {
                    getEmail += getData[i].localEmail
                    getPass += getData[i].localPassword
                }
                this.getEmail = getEmail
                this.getPass = getPass
                if (this.username == this.getEmail && this.password == this.getPass) {
                    this.homepage()
                } else {
                    alert("Your Email or Password is invalid")
                }
            }
            else {
                alert("Your Email or Password is invalid")
            }
        },
        homepage() {
            location.href = '/'
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
    }
}
</script>