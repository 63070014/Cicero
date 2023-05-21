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
        <div class="group-signup flex justify-center flex-col items-center mt-20 mb-14">
            <div class="center-set w-full">
                <div class="head-in w-2/4 text-center text-3xl text-gray-200 cursor-pointer" @click="LinkTo('/signin')">Sign
                    in</div>
                <div class="head-up w-2/4 text-center text-3xl">Sign up</div>
            </div>
            <div class="flex flex-col justify-center w-full mt-8">
                <span>FIRST NAME *</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="v$.fname.$model"
                        :class="{ 'bg-red-200': v$.fname.$error }">
                </div>
                <template v-if="v$.fname.$error">
                    <p class="text-red-500">Please enter your First name</p>
                    <!-- <p class="" v-if="!v$.fname.$params.minLength">Must be at least 5 character</p> -->
                </template>
                <span class="mt-6">LAST NAME *</span>
                <div class="password mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.lname.$error }" v-model="v$.lname.$model">
                </div>
                <template v-if="v$.lname.$error">
                    <p class="text-red-500">Please enter your Last name</p>
                    <!-- <p class="" v-if="!v$.fname.$params.minLength">Must be at least 5 character</p> -->
                </template>
                <span class="mt-6">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" :class="{ 'bg-red-200': v$.day.$error }" v-model="day">
                        <option value="01" class="">1</option>
                        <option value="02" class="">2</option>
                        <option value="03" class="">3</option>
                        <option value="04" class="">4</option>
                        <option value="05" class="">5</option>
                        <option value="06" class="">6</option>
                        <option value="07" class="">7</option>
                        <option value="08" class="">8</option>
                        <option value="09" class="">9</option>
                        <option value="10" class="">10</option>
                        <option value="11" class="">11</option>
                        <option value="12" class="">12</option>
                        <option value="13" class="">13</option>
                        <option value="14" class="">14</option>
                        <option value="15" class="">15</option>
                        <option value="16" class="">16</option>
                        <option value="17" class="">17</option>
                        <option value="18" class="">18</option>
                        <option value="19" class="">19</option>
                        <option value="20" class="">20</option>
                        <option value="21" class="">21</option>
                        <option value="22" class="">22</option>
                        <option value="23" class="">23</option>
                        <option value="24" class="">24</option>
                        <option value="25" class="">25</option>
                        <option value="26" class="">26</option>
                        <option value="27" class="">27</option>
                        <option value="28" class="">28</option>
                        <option value="29" class="">29</option>
                        <option value="30" class="">30</option>
                        <option value="31" class="">31</option>
                    </select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" :class="{ 'bg-red-200': v$.month.$error }" id="" v-model="month">
                        <option value="01">JAN</option>
                        <option value="02">FEB</option>
                        <option value="03">MAR</option>
                        <option value="04">APR</option>
                        <option value="05">MAY</option>
                        <option value="06">JUN</option>
                        <option value="07">JUL</option>
                        <option value="08">AUG</option>
                        <option value="09">SEP</option>
                        <option value="10">OCT</option>
                        <option value="11">NOV</option>
                        <option value="12">DEC</option>
                    </select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" :class="{ 'bg-red-200': v$.year.$error }" id="" v-model="v$.year.$model">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <span class="mt-6">PHONE NUMBER *</span>
                <div class="password mt-2">
                    <input maxlength="10" type="text" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.phone.$error }" v-model="v$.phone.$model">
                </div>
                <template v-if="v$.phone.$error">
                    <p class="text-red-500">Please enter your Phone number</p>
                </template>
                <span class="mt-6">EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="v$.email.$model"
                        :class="{ 'bg-red-200': v$.email.$error }">
                </div>
                <template v-if="v$.email.$error">
                    <p class="text-red-500" >Please enter your Email address</p>
                    <!-- <p class="help is-danger" v-if="!v$.email.mobile">Invalid Mobile Number</p> -->
                </template>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.password.$error }" v-model="v$.password.$model">
                </div>
                <template v-if="v$.password.$error">
                    <p class="text-red-500">Please enter your Password</p>
                </template>
                <span class="mt-6">CONFIRM PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" :class="{ 'bg-red-200': v$.confirm.$error }" v-model="v$.confirm.$model">
                </div>
                <template v-if="v$.confirm.$error">
                    <p class="text-red-500">Please enter your confirm Password</p>
                </template>
                <button @click="saveData()" class="bg-black text-white h-9 mt-8">REGISTER</button>

            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
// import {
//   required,
//   email,
//   helpers,
//   minLength,
//   maxLength,
//   sameAs,
// } from "vuelidate/lib/validators";
import { useVuelidate } from '@vuelidate/core'
import { required} from '@vuelidate/validators'
// function mobile(value) {
//   return !helpers.req(value) || !!value.match(/0[0-9]{9}/);
// }

// function complexPassword(value) {
//   if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
//     return false;
//   }
//   return true;
// }
export default {
    name: 'signup',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            fname: "",
            lname: "",
            day: "",
            month: "",
            year: "",
            phone: "",
            email: "",
            password: "",
            confirm: "",
        }
    },

    methods: {
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        saveData() {
            this.v$.$touch();
            if (!this.v$.$invalid) {
                console.log(this.email, this.fname, this.lname, this.year, this.month, this.day);
                try {
                    axios.post('http://localhost:3000/user/signup', {
                        firstname: this.fname,
                        lastname: this.lname,
                        birth_date: this.year + "-" + this.month + "-" + this.day,
                        phone: this.phone,
                        email: this.email,
                        password: this.password,
                        confirm_password: this.confirm,
                    }).then((res) => {
                        alert(res.data)
                    })
                } catch (error) {
                    console.log(error);
                }
                // this.LinkTo('/signin')
                console.log("pass")
            }


        },
    },
    validations() {
        return {
            email: {
                required,
            },
            fname: {
                required,
            },
            lname: {
                required,
            },
            day: {
                required,
            },
            month: {
                required,
            },
            year: {
                required,
            },
            phone: {
                required,
            },
            password: {
                required,
            },
            confirm: {
                required,
            },
        }
    },
}

</script>