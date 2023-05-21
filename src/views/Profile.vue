<style>
/* .non-pointer {
    pointer-events: none;
} */
</style>
<template>
    <div class="flex-col center-set space-y-5 p-6 mt-8">
        <div class="w-28">
            <img src="../assets/icons/imgProfile.svg" alt="">
        </div>
        <div class="font-jura space-y-6" style="width:23rem;">
            <div class="">
                <span>FIRST NAME</span>
                <div class=" mt-2">
                    <input type="text"  :class="{ 'pointer-events-none': enableEdit }"
                        class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500" v-model="fname">
                </div>
            </div>
            <div class="">
                <span>LAST NAME</span>
                <div class=" mt-2">
                    <input type="text" :placeholder="getData.lastname" :class="{ 'pointer-events-none': enableEdit }"
                        class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500" v-model="lname">
                </div>
            </div>
            <div>
                <span class="">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" :placeholder="getData.day" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id=""
                        :class="{ 'pointer-events-none': enableEdit }" v-model="day">
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
                    <select name="" :placeholder="getData.month" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id=""
                        :class="{ 'pointer-events-none': enableEdit }" v-model="month">
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
                    <select name="" :placeholder="getData.year" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id=""
                        :class="{ 'pointer-events-none': enableEdit }" v-model="year">
                        <option value="1899">1899</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
            </div>
            <div class="">
                <span>PHONE NUMBER</span>
                <div class=" mt-2">
                    <input type="text" :placeholder="getData.phone" :class="{ 'pointer-events-none': enableEdit }"
                        class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500" v-model="phone">
                </div>
            </div>
            <div class="">
                <span>EMAIL ADDRESS </span>
                <div class=" mt-2">
                    <input  disabled type="text" :placeholder="getData.email"
                        class="w-full bg-gray-200 h-9 p-3 text-gray-500" v-model="email">
                </div>
            </div>
            <div class="space-y-6">
                <button @click="enableEdit = !enableEdit, updateProfile()" class="border-black border w-full h-9 mt-2">{{
                    enableEdit ? 'EDIT' : 'SAVE' }}</button>
                <button @click="logout(), LinkTo('/')" class="bg-black text-white w-full h-9">LOGOUT</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
export default {

    name: "Homepage",
    components: {
    },
    data() {
        return {
            enableEdit: true,
            fname: '',
            lname: '',
            day: '',
            month: '',
            year: '',
            phone: '',
            email: '',
            password: '',
            getData: [],
            user_id: JSON.parse(localStorage.getItem("user")).user_id
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("user")
            this.$forceUpdate();
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
        async getUser() {
                await axios.get(`http://localhost:3000/user/${this.user_id}`).then((res) => {
                    this.getData = res.data[0]
                    this.fname = res.data[0].firstname
                    this.lname = res.data[0].lastname
                    this.phone = res.data[0].phone
                    this.year = res.data[0].birth_date.slice(0,4)
                    this.month = res.data[0].birth_date.slice(5,7)
                    this.day = res.data[0].birth_date.slice(8,10)
                    console.log(res.data[0].birth_date.slice(8,10));
                })
            
        },
        updateProfile() {
            if (this.enableEdit) {
                try {
                    axios.put(`http://localhost:3000/editUser/${this.getData.user_id}`, {
                        fname: this.fname,
                        lname: this.lname,
                        birth_date: this.year + "-" + this.month + "-" + this.day,
                        phone: this.phone,
                    }).then((res) => {
                        alert(res.data)
                        window.location.reload()
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    watch: {

    },
    mounted() {
        this.getUser()
    }
};
</script>