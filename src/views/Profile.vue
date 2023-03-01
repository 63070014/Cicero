<template>
    <div class="flex-col center-set space-y-5 p-6 mt-8">
        <div class="w-28">
            <img src="../assets/icons/imgProfile.svg" alt="">
        </div>
        <div class="font-jura space-y-6" style="width:23rem;">
            <div class="">
                <span>FIRST NAME</span>
                <div class=" mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
            </div>
            <div class="">
                <span>LAST NAME</span>
                <div class=" mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
            </div>
            <div>
                <span class="">DATE OF BIRTH (OPTIONAL)</span>
                <div class="flex justify-between item-center space-x-3 mt-2">
                    <select name="" class="bg-gray-200 h-9 w-1/3 " id=""></select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id=""></select>
                    <select name="" class="bg-gray-200 h-9 w-1/3" id=""></select>
                </div>
            </div>
            <div class="">
                <span>PHONE NUMBER</span>
                <div class=" mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
            </div>
            <div class="">
                <span>EMAIL ADDRESS </span>
                <div class=" mt-2">
                    <input type="text" class="w-full bg-gray-200 h-9">
                </div>
            </div>
            <div class="space-y-6">
                <button class="border-black border w-full h-9 mt-2">EDIT</button>
                <button class="bg-black text-white w-full h-9">LOGOUT</button>
            </div>
        </div>
    </div>
</template>