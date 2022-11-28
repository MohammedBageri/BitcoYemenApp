import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/register.vue'),
    },
    {
      path: '/user/verify-email',
      name: 'verifyemail',
      props: (route) => ({
        token: route.query.token,
        email: route.query.email,
      }),
      component: () => import('../components/verifyemail.vue'),
    },
    {
      path: '/user/reset-password',
      name: 'reset-password',
      props: (route) => ({
        token: route.query.token,
        email: route.query.email,
      }),
      component: () => import('../components/reset-password.vue'),
    },
    {
      path: '/forgetpass',
      name: 'forgetpass',

      component: () => import('../components/forgetpass.vue'),
    },
    {
      path: '/buy',
      name: 'HomeBuy',
      component: () => import('../components/Buy/HomeBuy.vue'),
    },
    {
      path: '/store',
      name: 'HomeStore',
      component: () => import('../components/Store/HomeStore.vue'),
    },
    {
      path: '/prodect/:id',
      name: 'ProdectPage',
      component: () => import('../components/Store/ProdectPage.vue'),
    },
    {
      path: '/blog',
      name: 'HomeBlog',
      component: () => import('../components/Blog/HomeBlog.vue'),
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: () => import('../components/Blog/BlogPost.vue'),
    },
    {
      path: '/blog/:id',
      name: 'Bloglist',
      component: () => import('../components/Blog/BlogPost.vue'),
    },
    {
      path: '/recommendation',
      name: 'HomeRecommendation',
      component: () =>
        import('../components/Recommendation/HomeRecommendation.vue'),
    },
    {
      path: '/mytransaction',
      name: 'myTransaction',
      component: () =>
        import('../components/Home/my_transaction.vue'),
    },
    {
      path: '/mytransaction/:id',
      name: 'yourTransaction',
      component: () =>
        import('../components/Home/your_transaction.vue'),
    },
    {
      path: '/myorders',
      name: 'myOrders',
      component: () =>
        import('../components/Home/my_orders.vue'),
    },
    {
      path: '/myorders/:id',
      name: 'yourOrders',
      component: () =>
        import('../components/Home/your_orders.vue'),
    },
    {
      path: '/whous',
      name: 'whous',
      component: () => import('../components/Home/whous.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../components/Home/support.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../components/Home/error.vue'),
    },
    {
      path: '/logindash',
      name: 'LoginDash',
      component: () => import('../components/Dashboard/LoginDash.vue'),
    },
    {
      path: '/dash',
      name: 'HomeDash',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDash.vue'),
    },
    {
      path: '/dash-store',
      name: 'DashStore',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDashStore.vue'),
    },
    {
      path: '/product/:id',
      name: 'EditProduct',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/EditProduct.vue'),
    },
    {
      path: '/orders',
      name: 'AllOrders',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/AllOrders.vue'),
    },
    {
      path: '/order/:id',
      name: 'SeeOreder',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/SeeOreder.vue'),
    },
    {
      path: '/transactions',
      name: 'AllTransactions',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/AllTransactions.vue'),
    },
    {
      path: '/transaction/:id',
      name: 'SeeTransaction',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/SeeTransaction.vue'),
    },
    {
      path: '/dash-blog',
      name: 'DashBlog',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDashBlog.vue'),
    },
    {
      path: '/blog/:id',
      name: 'EditBlog',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/EditBlog.vue'),
    },
    {
      path: '/dash-recommendation',
      name: 'DashRecommendation',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () =>
        import('../components/Dashboard/HomeDashRecommendation.vue'),
    },
    {
      path: '/recommendation/:id',
      name: 'EditRecommendation',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/EditRecommendation.vue'),
    },
    {
      path: '/dash-users',
      name: 'DashUser',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDashUser.vue'),
    },
    {
      path: '/user/:id',
      name: 'EditUser',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/EditUser.vue'),
    },
    {
      path: '/dash-currency',
      name: 'DashCurrency',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDashCurrency.vue'),
    },
    {
      path: '/currency/:id',
      name: 'EditCurrency',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/EditCurrency.vue'),
    },
    {
      path: '/dash-direction',
      name: 'DashDirection',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeDashDirection.vue'),
    },

    {
      path: '/direction',
      name: 'EditDirection',
      props: (route) => ({ id: route.query.id, from: route.query.from, to: route.query.to }),
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },

      component: () => import('../components/Dashboard/EditDirection.vue'),
    },
    {
      path: '/dash-settings',
      name: 'HomeSettings',
      beforeEnter: async (to, from, next) => {
        const response = await axios.get('/api/v1/users/showMe');
        // this.users = response.data;
        if (response.data.user.role != 'admin') {
          next('/logindash');
        } else {
          next();
        }
      },
      component: () => import('../components/Dashboard/HomeSettings.vue'),
    },
  ],
});

export default router;
