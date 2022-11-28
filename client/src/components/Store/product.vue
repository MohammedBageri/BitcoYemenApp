<template>

    <li class="swiper-slide card_ground rounded-xl">
                                        <a
                                            
                                            class="relative block"
                                            >
                                            
                                            
                                            <img
                                            loading="lazy"
                                            alt="No photo"
                                            class="object-contain photo_ground_3 h-56 lg:h-72 mt-1"
                                            :src="`${api_url}/${photos}`"
                                            crossorigin="true"
                                            />
                                            
                                            <div class="p-6">
                                                
                                                <h5 class="text-right mt-0 text-xl font-bold">
                                                    {{names}}
                                                </h5>
                                                <p class="sub_text mt-2 text-md font-light">
                                                    {{detailss}}
                                                    </p>
                                                
                                                
                                                <div class="flex flex-row justify-between">
                                                    
                                                    <span class="text-xl px-1 py-4 mt-4 text-right font-medium">
                                                       {{' $ ' + prices }}
                                                    </span>
                                                    
                                                    <router-link
                                                    :to="{name: 'ProdectPage',params: {id:prodectid}}"
                                                        name="add"
                                                        type="submit"
                                                        class="flex items-center justify-center w-2/3"
                                                        >
                                                        <span class="text-xl w-full text-center font-medium button_ground rounded-sm px-8 py-4 mt-4">
                                                            شراء الان
                                                        </span>
                                                        
                                                    </router-link>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
</template>
<script>
export default {
  data() {
      return {
        api_url: import.meta.env.VITE_API_URL 

      }
  },
  name: 'product',
  props :["key","names" ,"prices" ,"detailss" , "photos", "prodectid"],
  

  
  }
</script>