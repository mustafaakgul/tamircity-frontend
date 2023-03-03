import {Vue} from 'vue';
import {Router} from 'vue-router';

import {createRouter, createWebHistory} from 'vue-router';
import index from '../views/pages/dashboard/index'
import aboutus from '../views/pages/pages/aboutus/index'
import Blogs from '../views/pages/blogs/blogdetails/index'
import BlogsGrid from '../views/pages/blogs/blog-grid/index'
import BlogsList from '../views/pages/blogs/blog-list/index'
import booking from '../views/pages/pages/booking/index'
import bookingwallet from '../views/pages/pages/booking-wallet/index'
import changepassword from '../views/pages/pages/auth/change-password/index'
import Forgotpassword from '../views/pages/pages/auth/forgot-password/index'
import contactUs from '../views/pages/pages/contact-us/index'
import ExamDetail from '../views/pages/guide/exam-details/index'
import ExamResults from '../views/pages/guide/exam-results/index'
import Guideavailability from '../views/pages/guide/guide-availability/index'
import Guideboonkings from '../views/pages/guide/guide-bookings/index'
import Guidechatcontent from '../views/pages/guide/guide-chat/index'
import GuideDashboard from '../views/pages/techPanel/tech-dashboard/index'
import GuideDetails from '../views/pages/guide/guide-details/index'
import Guidelist from '../views/pages/guide/guide-list/index'
import Guidenotification from '../views/pages/techPanel/tech-notification/index'
import Guidepayment from '../views/pages/guide/guide-payment/index'
import Guidereview from '../views/pages/guide/guide-reviews/index'
import Guidesettings from '../views/pages/guide/guide-settings/index'
import Guidesubscription from '../views/pages/guide/guide-subscription/index'
import Guidewallet from '../views/pages/guide/guide-wallet/index'
import Guidewithdrawn from '../views/pages/guide/guide-withdrawn/index'
import Howitwork from '../views/pages/pages/how-it-works'
import IndexDashboard from '../views/pages/dashboard/index'
import privacypolicy from '../views/pages/pages/privacy-policy'
import services from '../views/pages/pages/services'
import login from '../views/pages/pages/auth/login'
import register from '../views/pages/pages/auth/register'
import usersbookings from '../views/pages/users/user-bookings/index.vue'
import userchat from '../views/pages/users/user-chat/index.vue'
import userdashboard from '../views/pages/users/user-dashboard/index.vue'
import usernotification from '../views/pages/users/user-notification/index.vue'
import userpayment from '../views/pages/users/user-payment/index.vue'
import userreviews from '../views/pages/users/user-reviews/index.vue'
import usersettings from '../views/pages/users/user-settings/index.vue'
import userwallet from '../views/pages/users/user-wallet/index.vue'
import Termscondition from '../views/pages/pages/termscondition.vue'
import Stepwizard from '../views/pages/pages/stepwizard/index'
import TechCandidate from '../views/pages/techcandidate/tech-candidate/formspage/index'
import TrackingFormPage from '../views/pages/pages/reservation-tracking/index.vue'
import GetReservation from '../views/pages/getreservation/index'
import FormPageExpertisephone from '../views/pages/expertiseform/expertisephone/index.vue'
import FormPageExpertisepc from '../views/pages/expertiseform/expertisepc/index.vue'
import FormPageExpertiseconsole from '../views/pages/expertiseform/expertiseconsole/formpageexpertiseconsole.vue'
import FormPageExpertisesmartwatch from '../views/pages/expertiseform/expertisesmartwatch/formpageexpertisesmartwatch.vue'
import {TokenService} from "../services/storage.service";
import {store} from "../stores/store";

//Vue.use(Router);

const routes = [
    {
        path: '/formpageexpertisesmartwatch',
        name: 'formpageexpertisesmartwatch',
        component: () => import('../views/pages/expertiseform/expertisesmartwatch/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/formpageexpertiseconsole',
        name: 'formpageexpertiseconsole',
        component: () => import('../views/pages/expertiseform/expertiseconsole/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/formpageexpertisetv',
        name: 'formpageexpertisetv',
        component: () => import('../views/pages/expertiseform/expertisetv/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/formpageexpertisepc',
        name: 'formpageexpertisepc',
        component: () => import('../views/pages/expertiseform/expertisepc/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/formpageexpertisephone',
        name: 'formpageexpertisephone',
        component: () => import('../views/pages/expertiseform/expertisephone/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/getreservation',
        name: 'getreservation',
        component: () => import('../views/pages/getreservation/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/techcandidate',
        name: 'techcandidate',
        component: () => import('../views/pages/techcandidate/tech-candidate/formspage/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/reservation-tracking',
        name: 'trackingformpage',
        component: () => import('../views/pages/pages/reservation-tracking/index.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/getreservationinfos',
        name: 'getreservationinfos',
        component: () => import('../views/pages/getreservation/getreservationinfos'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/stepwizard',
        name: 'stepwizard',
        component: () => import('../views/pages/pages/stepwizard/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ekspertiz',
        name: 'expertise',
        component: () => import('../views/pages/pages/expertice-funnel/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pages/pages/auth/login/index'),
        meta: {
            requiresAuth: true,
            public : true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../views/pages/dashboard/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('../views/pages/pages/aboutus/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/blog-details',
        name: 'blog-details',
        component: () => import('../views/pages/blogs/blogdetails/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/blog-grid',
        name: 'blog-grid',
        component: () => import('../views/pages/blogs/blog-grid/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/blog-list',
        name: 'blog-list',
        component: () => import('../views/pages/blogs/blog-list/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/booking',
        name: 'booking',
        component: () => import('../views/pages/pages/booking/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/booking-wallet',
        name: 'booking-wallet',
        component: () => import('../views/pages/pages/booking-wallet/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/change-password',
        name: 'change-password',
        component: () => import('../views/pages/pages/auth/change-password/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('../views/pages/pages/contact-us/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/exam-details',
        name: 'exam-details',
        component: () => import('../views/pages/guide/exam-details/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/exam-results',
        name: 'exam-results',
        component: () => import('../views/pages/guide/exam-results/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/pages/pages/auth/forgot-password/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-availability',
        name: 'guide-availability',
        component: () => import('../views/pages/guide/guide-availability/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-bookings',
        name: 'guide-bookings',
        component: () => import('../views/pages/guide/guide-bookings/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-chat',
        name: 'guide-chat',
        component: () => import('../views/pages/guide/guide-chat/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tech-dashboard',
        name: 'tech-dashboard',
        component: () => import('../views/pages/techPanel/tech-dashboard/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-details',
        name: 'guide-details',
        component: () => import('../views/pages/guide/guide-details/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-list',
        name: 'guide-list',
        component: () => import('../views/pages/guide/guide-list/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tech-notification',
        name: 'tech-notification',
        component: () => import('../views/pages/techPanel/tech-notification/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-payment',
        name: 'guide-payment',
        component: () => import('../views/pages/guide/guide-payment/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-reviews',
        name: 'guide-reviews',
        component: () => import('../views/pages/guide/guide-reviews/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-settings',
        name: 'guide-settings',
        component: () => import('../views/pages/guide/guide-settings/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-subscription',
        name: 'guide-subscription',
        component: () => import('../views/pages/guide/guide-subscription/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-wallet',
        name: 'guide-wallet',
        component: () => import('../views/pages/guide/guide-wallet/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/guide-withdrawn',
        name: 'guide-withdrawn',
        component: () => import('../views/pages/guide/guide-withdrawn/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/how-it-works',
        name: 'how-it-works',
        component: () => import('../views/pages/pages/how-it-works'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import('../views/pages/pages/privacy-policy'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('../views/pages/pages/services'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/pages/pages/auth/register'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-bookings',
        name: 'user-bookings',
        component: () => import('../views/pages/users/user-bookings/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-chat',
        name: 'user-chat',
        component: () => import('../views/pages/users/user-chat/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: () => import('../views/pages/users/user-dashboard/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-notification',
        name: 'user-notification',
        component: () => import('../views/pages/users/user-notification/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-payment',
        name: 'user-payment',
        component: () => import('../views/pages/users/user-payment/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-reviews',
        name: 'user-reviews',
        component: () => import('../views/pages/users/user-reviews/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-settings',
        name: 'user-settings',
        component: () => import('../views/pages/users/user-settings/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-wallet',
        name: 'user-wallet',
        component: () => import('../views/pages/users/user-wallet/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/term-condition',
        name: 'term-condition',
        component: () => import('../views/pages/pages/termscondition'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/authsample',
        name: 'authsample',
        component: () => import('../views/pages/authsample/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/404',
        name: 'blog-list',
        component: () => import('../views/pages/blogs/blog-list/index'),
        meta: {
            requiresAuth: true
        }
    },

    //Redirect 404 otherwise
    {
        path: '/:pathMatch(.*)*',
        //path: '*',
        //redirect: '/404'
        redirect: '/'
    }
];

export const router = createRouter({
    history: createWebHistory(''),
    linkActiveClass: 'active',
    routes
});

router.beforeEach((to, from, next) => {
    //const publicPages = ['/login', '/register'];
    const publicPages = ['/login', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (from.name == "stepwizard" && to.name != "stepwizard") {
        store.state.selectedItems = {
            device: null,
            brand: null,
            model: null,
            fixType: null,
            serviceType: null,
            extra: null,
            techService: null
        }
    }

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next(); //TODO: check this

})

/*
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
 */
//router.beforeEach((to, from, next) => {
    //const isPublic = to.matched.some(record => record.meta.public)
    //const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
    //const loggedIn = !!TokenService.getToken();

    /*
    if (!isPublic && !loggedIn) {
        return next({
          path:'/login',
          query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
        });
      }

      // Do not allow user to visit login page or register page if they are logged in
      if (loggedIn && onlyWhenLoggedOut) {
        return next('/')
      }

      next();
     */

    /*
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isAuthenticated']) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
     */
//})

/*
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
 */