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
                    <input type="text" :value="getData[0].localFname" :class="{'pointer-events-none' : enableEdit}" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="">
                <span>LAST NAME</span>
                <div class=" mt-2">
                    <input type="text" :value="getData[0].localLname" :class="{'pointer-events-none' : enableEdit}" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div>
                <span class="">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="" :class="{'pointer-events-none' : enableEdit}">
                        <option value="">{{ getData[0].localDay }}</option>
                    </select>
                    <select name="" :value="month" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="" :class="{'pointer-events-none' : enableEdit}">
                        <option value="">{{ getData[0].localMonth }}</option>
                    </select>
                    <select name="" :value="year" class="non-pointer bg-gray-200 h-9 w-1/3 pl-2 text-gray-500" id="" :class="{'pointer-events-none' : enableEdit}">
                        <option value="">{{ getData[0].localYear }}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <span>PHONE NUMBER</span>
                <div class=" mt-2">
                    <input type="text" :value="getData[0].localPhone" :class="{'pointer-events-none' : enableEdit}" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="">
                <span>EMAIL ADDRESS </span>
                <div class=" mt-2">
                    <input type="text" :value="getData[0].localEmail" :class="{'pointer-events-none' : enableEdit}" class="non-pointer w-full bg-gray-200 h-9 p-3 text-gray-500">
                </div>
            </div>
            <div class="space-y-6">
                <button @click="enableEdit = !enableEdit" class="border-black border w-full h-9 mt-2">{{ enableEdit ? 'EDIT' : 'SAVE' }}</button>
                <button @click="logout(), LinkTo('/')" class="bg-black text-white w-full h-9">LOGOUT</button>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

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
            getData:JSON.parse(localStorage.getItem('user'))
        }
    },
    methods: {
        logout(){
            localStorage.removeItem("user")
            this.$forceUpdate();
        },
        LinkTo(whereTo) {
            this.$router.push(whereTo)
        },
    },
    watch: {

    }
};
</script>