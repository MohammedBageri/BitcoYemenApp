<template>

    <li class="card_ground_3 rounded-xl">
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
                                                
                                                <h5 class="mt-0 text-xl font-bold text-white">
                                                    {{names}}
                                                </h5>
                                                <p class="mt-2 text-md font-light text-gray-400">
                                                    {{bodys.substring(0,100)+"..."}}
                                                    </p>
                                                
                                                
                                                <div class="flex flex-row justify-between">
                                                    
                                                    
                                                    
                                                    <router-link
                                                    :to="{name: 'Blog_list',params: {id:blogid}}"
                                                       
                                                        class="flex items-center justify-center w-2/3 button_ground rounded-sm px-8 py-4 mt-4"
                                                        >
                                                        <span class="text-xl font-medium">
                                                            أقرأ المقال </span>
                                                        
                                                    </router-link>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
</template>
<script>
export default {
  name: 'blog_list',
  props :["names"],
  
  }
</script>