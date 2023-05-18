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
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" v-model="month">
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
                    <select name="" class="bg-gray-200 h-9 w-1/3" id="" v-model="year">
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
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="phone">
                </div>
                <span class="mt-6">EMAIL ADDRESS</span>
                <div class="email mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9 p-2" v-model="email">
                </div>
                <span class="mt-6">PASSWORD</span>
                <div class="password mt-2">
                    <input type="password" class="w-full bg-gray-200 h-9 p-2" v-model="password">
                </div>
                <button @click="saveData(), LinkTo('/signin')" class="bg-black text-white h-9 mt-8">REGISTER</button>
            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
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
            console.log(this.year+"-"+this.month+"-"+this.day);
            try {
                axios.post('http://localhost:3000/user/signup', {
                    firstname: this.fname,
                    lastname: this.lname,
                    birth_date: this.year+"-"+this.month+"-"+this.day,
                    phone: this.phone,
                    email: this.email,
                    password: this.password
                }).then((res)=>{
                    alert(res.data)
                })
            } catch (error) {
                console.log(error);
            }
                
          
        },


    }
}

</script>