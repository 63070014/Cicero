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
        <div class="group-signup flex justify-center flex-col items-center mt-6">
            <div class="center-set w-full">
                <div class="head-in w-2/4 text-center text-3xl text-gray-200 cursor-pointer" @click="LinkTo('/signin')">Sign
                    in</div>
                <div class="head-up w-2/4 text-center text-3xl">Sign up</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>FIRST NAME *</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="fname">
                </div>
                <span class="mt-6">LAST NAME *</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="lname">
                </div>
                <span class="mt-6">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" v-model="day">
                        <option value="1" class="">1</option>
                        <option value="2" class="">2</option>
                        <option value="3" class="">3</option>
                    </select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" v-model="month">
                        <option value="JAN">JAN</option>
                        <option value="FEB">FEB</option>
                        <option value="MAR">MAR</option>
                    </select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" v-model="year">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <span class="mt-6">PHONE NUMBER *</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="phone">
                </div>
                <span class="mt-6">EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="email">
                </div>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <button @click="saveData(), LinkTo('/signin')" class="bg-black text-white h-9 mt-8">REGISTER</button>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'signin',
    data() {
        return {
            fname: '',
            lname: '',
            day: '',
            month: '',
            year: '',
            phone: '',
            email: '',
            password: '',
        }
    },
    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        saveData() {
            var getData = [{
                localFname: this.fname,
                localLname: this.lname,
                localDay: this.day,
                localMonth: this.month,
                localYear: this.year,
                localPhone: this.phone,
                localEmail: this.email,
                localPassword: this.password,
            }]
            localStorage.setItem('regisList', JSON.stringify(getData));
        }

    }
}

</script>