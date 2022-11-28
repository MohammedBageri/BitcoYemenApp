<template>

<section class="ground">
                    
                    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-0">
                        <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                            <div
                                class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
                                >
                                
                                
                                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ayrbzkjk.json" mode="bounce" speed="2.5" class="w-full h-full"  loop  autoplay></lottie-player>
                            </div>
                            
                            <div class="lg:py-24 lg:px-0">
                              

                                <h2 class="title_ground text-4xl py-2 font-bold sm:text-4xl">بتكو يمن</h2>
                                <p class="mt-4 text-2xl">
                                أسهل طريقة لشراء البيتكوين و 30+ عملة رقمية
                                </p>
                                <p class="mt-4 sub_text text-xl">
                                المنصة الأسهل، الأكثر أماناً والأسرع لشراء وبيع العملات الرقمية.
                                </p>
                                
                                <router-link to="/buy"

                                    class="button_ground inline-flex items-center px-8 py-3 mt-8 rounded  hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                                    
                                    >
                                    <svg
                                        class="w-5 h-5 ml-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#171C1F"
                                        >
                                        <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                    <span class="text-2xl text-gray-900 font-medium">شراء الان </span>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                </section>

    
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style scoped>

.ground{
                width:95%;
                display:block;
                margin-right:auto;
                margin-left:auto;
            }
            .line_ground{
                background-color:#00E583;
            }
            
            .ground_1{
                display:block;
                background-color:#1F262A;
                width:100%;
                    
                }
            
            .number_ground_1{
                color:#54595C;
            }
            .title_sub_ground_1{
                color:#9FA0A1;
            }

</style>