<template>
    
    <div class="lg:w-3/4 overflow-hidden overflow-x-auto border border_card rounded">
  <table class="w-full text-md divide-y divide-gray-400">
    <thead>
      <tr class=" ">
        <th class="px-4 py-4 font-larg text-right  whitespace-nowrap"> الوضع الحالي</th>
        <th class="px-4 py-4 font-larg text-right  whitespace-nowrap">زوج العملات</th>
        <th class="px-4 py-4 font-larg text-right  whitespace-nowrap">سعر الشراء</th>
        <th class="px-4 py-4 font-larg text-right  whitespace-nowrap">تاريخ نشر التوصيه</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100">
      <tr>
        <td class="px-4 py-3 font-medium  whitespace-nowrap ">
            <strong>
    <p :class="statuss === 'Sell' ? 'text-white bg-red-500 px-3 py-1.5 rounded text-md font-medium' : 'bg-green-500 text-white px-3 py-1.5 rounded text-md font-medium'">{{ statuss }}</p>

          </strong>
            </td>
        <td class="px-4 py-3  whitespace-nowrap">{{names}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{prices}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{dates}}</td>
      </tr>
     </tbody>



      <thead>
      <tr class="">
        <th class="px-4 py-3 font-larg text-right  whitespace-nowrap">Tp1</th>
        <th class="px-4 py-3 font-larg text-right  whitespace-nowrap">Tp2</th>
        <th class="px-4 py-3 font-larg text-right  whitespace-nowrap">Tp3</th>
        <th class="px-4 py-3 font-larg text-right  whitespace-nowrap">وقف الخساره</th>
      </tr>
    </thead>
      <tr>
        <td class="px-4 py-3  font-medium whitespace-nowrap">{{tp1s}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{tp2s}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{tp3s}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{sls}}</td>
      </tr>
  </table>
</div>


</template>

<script>
export default {
  name: 'recommendation',
  props :["names" ,"prices" ,"tp1s" , "tp2s" , "tp3s" , "sls" , "statuss" , "dates"],
  data(){
  return{
    recommendation:""
  }
},
methods: { 
    format_date(value){
       if (value) {
         return moment(String(value)).format('YYYY/MM/DD HH:mm')
        }
    },
 }

  
  }
</script>

<style scoped>

</style>
