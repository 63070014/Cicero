<style>
.non-pointer {
    pointer-events: none;
}
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
                    <input type="text" :value="fname" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="">
                <span>LAST NAME</span>
                <div class=" mt-2">
                    <input type="text" :value="lname" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div>
                <span class="">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="">
                        <option :value="day">{{ day }}</option>
                    </select>
                    <select name="" :value="month" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="">
                        <option :value="month">{{ month }}</option>
                    </select>
                    <select name="" :value="year" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="">
                        <option :value="year">{{ year }}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <span>PHONE NUMBER</span>
                <div class=" mt-2">
                    <input type="text" :value="phone" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="">
                <span>EMAIL ADDRESS </span>
                <div class=" mt-2">
                    <input type="text" :value="email" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="space-y-6">
                <button class="border-black border w-full h-9 mt-2">EDIT</button>
                <button class="bg-black text-white w-full h-9">LOGOUT</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
    fname: '',
    lname: '',
    day: '',
    month: '',
    year: '',
    phone: '',
    email: '',
    password: '',
    name: "Homepage",
    components: {
    },
    data() {
        var getData = JSON.parse(localStorage.getItem('regisList'))
        var fname = ''; var lname = ''; var day = ''; var month = ''; var year = ''; var phone = ''; var email = ''
        for (let i = 0; i < getData.length; i++) {
            fname += getData[i].localFname
            lname += getData[i].localLname
            day += getData[i].localDay
            month += getData[i].localMonth
            year += getData[i].localYear
            phone += getData[i].localPhone
            email += getData[i].localEmail
        }
        this.fname = fname
        this.lname = lname
        this.day = day,
            this.month = month,
            this.year = year,
            this.phone = phone,
            this.email = email
        // this.password = getData[0][7]
        

    },
    methods: {
    },
    watch: {

    }
};
</script>