import { createApp } from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./App.vue";
import config from "./public/config.json"
import { store } from "./store/store"

import { router } from './router';
import Vue3Autocounter from 'vue3-autocounter';
/*********Header component**********/
import Header from './views/layouts/header.vue'
import HeaderTwo from './views/layouts/headertwo.vue'
import HeaderLogo from './components/headerlogo.vue'
import Toggle from './components/headertoggle.vue'
import Flag from './components/flag.vue'
import Headchat from './components/chat.vue'
import Notification from './components/notification.vue'
import Usermenu from './components/usermenu.vue'
import UsersUsermenu from './components/usersusermenu.vue'
/*********Footer component**********/
import Footerindex from './views/layouts/footer.vue'
/*********Aboutus component**********/
import Aboutpage from './views/pages/pages/aboutus/aboutpage.vue'
import Aboutcustomer from './views/pages/pages/aboutus/customer.vue'
import Aboutworks from './views/pages/pages/aboutus/works.vue'
import Aboutbreadcrumb from './views/pages/breadcrumb/aboutbreadcrumb.vue'
/*********Index component**********/
import Index from './views/pages/dashboard/index.vue'
/*********Blog-details component**********/
import Blogdetails from './views/pages/breadcrumb/blogdetails.vue'
import Blogs from './views/pages/blogs/blogdetails/blogsdetails.vue'
/*********Blog-Grid component**********/
import Bloggrid from './views/pages/breadcrumb/bloggrid.vue'
import BlogsGrid from './views/pages/blogs/blog-grid/blogs.vue'
/*********Blog-List component**********/
import Bloglist from './views/pages/breadcrumb/bloglist.vue'
import BlogsList from './views/pages/blogs/blog-list/blogs.vue'
/*********Booking component**********/
import BookingGuid from './views/pages/breadcrumb/breadcrumbbooking.vue'
import Bookingpage from './views/pages/pages/booking/bookingpage.vue'
/*********Booking-Wallet component**********/
import BookingWallet from './views/pages/pages/booking-wallet/bookingwallet.vue'
import BookingModal from './views/pages/pages/booking-wallet/bookingmodal.vue'
/*********Auth component**********/
import ChangePassword from './views/pages/pages/auth/change-password/changepassword.vue'
import ForgotPassword from './views/pages/pages/auth/forgot-password/forgot.vue'
import Login from './views/pages/pages/auth/login/index.vue'
import Register from './views/pages/pages/auth/register/index.vue'
/*********Contact us component**********/
import Contact from './views/pages/breadcrumb/contact.vue'
import Contactus from './views/pages/pages/contact-us/contactus.vue'
/*********Exam Details component**********/
import Exam from './views/pages/breadcrumb/examdetail.vue'
import ExamDetails from './views/pages/guide/exam-details/exam.vue'
/*********Exam Results component**********/
import ExamResult from './views/pages/breadcrumb/examresult.vue'
import Examresults from './views/pages/guide/exam-results/examresults.vue'
/*********Guide Availability component**********/
import GuideAvailable from './views/pages/breadcrumb/guideavailable.vue'
import GuideAvailability from './views/pages/guide/guide-availability/available.vue'
import AvailableUserProfile from './views/pages/guide/guide-availability/userprofile.vue'
import AvailableSettingsmenu from './views/pages/guide/guide-availability/settingsmenu.vue'
/*********Guide Bookings component**********/
import GuideBooking from './views/pages/breadcrumb/guidebooking.vue'
import GuideBookings from './views/pages/guide/guide-bookings/guidebookings.vue'
/*********Guide chat component**********/
import GuideChat from './views/pages/breadcrumb/guidechat.vue'
import GuideChatuserlist from './views/pages/guide/guide-chat/chatuserlist.vue'
import GuideChatcontent from './views/pages/guide/guide-chat/chatcontent.vue'
/*********Guide Dashboard component**********/
import GuideDashboard from './views/pages/breadcrumb/guidedashboard.vue'
import TechDashboard from './views/pages/TechPanel/tech-dashboard/dashboardtech.vue'
import TechDashboardModal from './views/pages/TechPanel/tech-dashboard/dashboardmodal.vue'
/*********Guide Details component**********/
import GuideDetail from './views/pages/breadcrumb/guidedetail.vue'
import TopSection from './views/pages/guide/guide-details/topsection.vue'
import DetailSection from './views/pages/guide/guide-details/detailsection.vue'
import FAQ from './views/pages/guide/guide-details/FAQ.vue'
import GuideSection from './views/pages/guide/guide-details/guidesection.vue'
/*********Guide List component**********/
import ListGuide from './views/pages/breadcrumb/listguide.vue'
import GuideList from './views/pages/guide/guide-list/guidelist.vue'
import GuideReport from './views/pages/guide/guide-list/report.vue'
/*********Guide Notification component**********/
import GuideNotification from './views/pages/breadcrumb/guidenotification.vue'
import Notificationtech from './views/pages/TechPanel/tech-notification/notificationtech.vue'
/*********Guide Payment component**********/
import PaymentGuide from './views/pages/breadcrumb/paymentguide.vue'
import GuidePayment from './views/pages/guide/guide-payment/guidepayment.vue'
/*********Guide Review component**********/
import GuideReview from './views/pages/breadcrumb/guidereview.vue'
import ReviewGuide from './views/pages/guide/guide-reviews/reviewguide.vue'
/*********Guide Settings component**********/
import GuideSettings from './views/pages/breadcrumb/guidesettings.vue'
import Guidesetting from './views/pages/guide/guide-settings/guidesetting.vue'
/*********Guide Subscription component**********/
import GuideSubscriptions from './views/pages/breadcrumb/guidesubscription.vue'
import Subscription from './views/pages/guide/guide-subscription/subscription.vue'
/*********Guide Wallet component**********/
import WalletGuide from './views/pages/breadcrumb/walletguide.vue'
import GuideWallet from './views/pages/guide/guide-wallet/guidewallet.vue'
import WalletModal from './views/pages/guide/guide-wallet/walletmodal.vue'
/*********Guide Withdrawn component**********/
import Withdrawn from './views/pages/breadcrumb/withdrawn.vue'
import GuideWithdrawn from './views/pages/guide/guide-withdrawn/guidewithdrawn.vue'
/*********How It Works component**********/
import HowItWorks from './views/pages/breadcrumb/howitwork.vue'
import Works from './views/pages/pages/how-it-works.vue'
/*********Index component**********/
import DashboardIndex from './views/pages/dashboard/homebanner.vue'
import Package from './views/pages/dashboard/packageindex.vue'
import IndexGuide from './views/pages/dashboard/guideindex.vue'
import IndexTicketOffer from './views/pages/dashboard/ticketoffer.vue'
import Indexhowitworks from './views/pages/dashboard/howitworksindex.vue'
/*********Privacy-Policy component**********/
import Privacy from './views/pages/breadcrumb/privacy.vue'
import PrivacyPolicy from './views/pages/pages/privacy-policy.vue'
/*********Services component**********/
import Services from './views/pages/breadcrumb/servicespage.vue'
import service from './views/pages/pages/services.vue'
/*********user-bookings component**********/
import UsersBreadcrumb from './views/pages/breadcrumb/userbookings.vue'
import UsersBookingsProfiles from './views/pages/users/user-bookings/usersprofile.vue'
import UsersBookingSettings from './views/pages/users/user-bookings/userssettings.vue'
import UsersBookings from './views/pages/users/user-bookings/usersbooking.vue'
/*********user-Chat component**********/
import UserChatBreadcrumb from './views/pages/breadcrumb/userchat.vue'
import UsersUserChat from './views/pages/users/user-chat/usersuserchat.vue'
/*********user-Dashboard component**********/
import UserDashboardBreadcrumb from './views/pages/breadcrumb/userdashboard.vue'
import DashboardUserprofile from './views/pages/users/user-dashboard/dashboarduserprofile.vue'
import UsersDashboard from './views/pages/users/user-dashboard/usersdashboard.vue'
/*********user-Notification component**********/
import UserNotificationBreadcrumb from './views/pages/breadcrumb/usernotification.vue'
import UsersNotification from './views/pages/users/user-notification/usersnotification.vue'
/*********user-Payment component**********/
import UserPaymentBreadcrumb from './views/pages/breadcrumb/userpayment.vue'
import UsersPayment from './views/pages/users/user-payment/userspayment.vue'
/*********user-Review component**********/
import UserReviewBreadcrumb from './views/pages/breadcrumb/reviewusers.vue'
import Usersreviews from './views/pages/users/user-reviews/reviews.vue'
/*********user-settings component**********/
import UserSettingsBreadcrumb from './views/pages/breadcrumb/settingusers.vue'
import UsersSettings from './views/pages/users/user-settings/settings.vue'
/*********user-Wallet component**********/
import UserWalletBreadcrumb from './views/pages/breadcrumb/userwallet.vue'
import UsersWallet from './views/pages/users/user-wallet/userswallet.vue'
import UsersWalletModal from './views/pages/users/user-wallet/walletmodal.vue'
/*********Terms&Condition component**********/
import Terms from './views/pages/breadcrumb/terms.vue'
import TermsCondition from './views/pages/pages/termscondition.vue'
/*********Stepwizard component**********/
import TabFormWizard from './views/pages/pages/stepwizard/wizardtabform/tabformwizard.vue'
import ExpertiseWizard from './views/pages/pages/expertice-funnel/wizardtabform/expertisewizard.vue'
import WorkTimeModal from './views/pages/pages/stepwizard/workTimeModal.vue'

/*********TechCandidate component**********/
import TechCandidateFormsPage from './views/pages/techcandidate/tech-candidate/formspage/techcandidateformspage.vue'

/*********GetReservationInfos component**********/
import GetReservationInfos from './views/pages/getreservation/getreservationinfos.vue'

/*********Reservation component**********/
import Reservation from "./views/pages/pages/reservation.vue"

/*********Reservation Tranckingcomponent**********/
import TrackingFormPage from './views/pages/pages/reservation-tracking/trackingformpage.vue'






/*******Plugin import***********/
import VueSelect from 'vue3-select2-component'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import jquery from 'jquery';
window.$ = jquery

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/aos.css';
import './assets/js/aos.js';
import './assets/plugins/intltelinput/css/intlTelInput.css';
import './assets/plugins/intltelinput/css/demo.css';
import './assets/plugins/intltelinput/js/intlTelInput.js';
import './assets/plugins/intltelinput/js/utils.js';
import './assets/plugins/countup/jquery.waypoints.min.js';
import './assets/plugins/countup/jquery.missofis-countdown.js';
import './assets/css/feather.css';
import './assets/css/feathericon.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/js/circle-progress.min.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import './assets/js/smooth-scroll.min.js';
import './assets/js/slick.js';

import './assets/plugins/simple-calendar/simple-calendar.css';

import './assets/css/style.css';

axios.defaults.baseURL=config.api_base_url;
store.axios = axios;
const app = createApp(App)

/*********Header component**********/
app.component('layouts', Header);
app.component('headertwo', HeaderTwo);
app.component('headerlogo', HeaderLogo);
app.component('headertoggle', Toggle);
app.component('flag', Flag);
app.component('notification', Notification);
app.component('usermenu', Usermenu);
app.component('usersusermenu', UsersUsermenu);
app.component('chat', Headchat);

/*********Footer component**********/
app.component('footerind', Footerindex);

/*********StepWizard component**********/
app.component('tabformwizard', TabFormWizard);
app.component('expertisewizard', ExpertiseWizard);
app.component('worktimeModal', WorkTimeModal);
app.component('Datepicker', Datepicker);

/*********TechCandidate component**********/
app.component('techcandidateformspage',TechCandidateFormsPage );

/*********GetReservationInfos component**********/
app.component('getreservationinfos',GetReservationInfos );

/*********Aboutus component**********/
app.component('aboutpage', Aboutpage);
app.component('customer', Aboutcustomer);
app.component('works', Aboutworks);
app.component('aboutbreadcrumb', Aboutbreadcrumb);

/*********Index component**********/
app.component('index', Index);

/*********Blog-details component**********/
app.component('blogdetails', Blogdetails);
app.component('blogsdetails', Blogs);

/*********Blog-Grid component**********/
app.component('bloggrid', Bloggrid);
app.component('blogs', BlogsGrid)

/*********Blog-List component**********/
app.component('bloglist', Bloglist);
app.component('blogs', BlogsList)

/*********Booking component**********/
app.component('breadcrumbbooking', BookingGuid);
app.component('bookingpage', Bookingpage)

/*********Booking-Wallet component**********/
app.component('bookingwallet', BookingWallet)
app.component('bookingmodal', BookingModal)

/*********Change-Password component**********/
app.component('changepassword', ChangePassword)

/*********Aboutus component**********/
app.component('contact', Contact);
app.component('contactus', Contactus);

/*********Exam Details component**********/
app.component('examdetail', Exam);
app.component('exam', ExamDetails);

/*********Exam Results component**********/
app.component('examresult', ExamResult);
app.component('examresults', Examresults);

/*********Forgot-Password component**********/
app.component('forgot', ForgotPassword)

/*********Guide Availability component**********/
app.component('guideavailable', GuideAvailable)
app.component('available', GuideAvailability)
app.component('userprofile', AvailableUserProfile)
app.component('settingsmenu', AvailableSettingsmenu)

/*********Guide Bookings component**********/
app.component('guidebooking', GuideBooking)
app.component('guidebookings', GuideBookings)

/*********Guide chat component**********/
app.component('guidechat', GuideChat)
app.component('chatuserlist', GuideChatuserlist)
app.component('chatcontent', GuideChatcontent)

/*********Guide Dashboard component**********/
app.component('guidedashboard', GuideDashboard)
app.component('techdashboard', TechDashboard)
app.component('techdashboardmodal', TechDashboardModal)

/*********Guide Details component**********/
app.component('guidedetail', GuideDetail)
app.component('topsection', TopSection)
app.component('detailsection', DetailSection)
app.component('guidesection', GuideSection)

/*********Guide List component**********/
app.component('listguide', ListGuide)
app.component('guidelist', GuideList)
app.component('report', GuideReport)

/*********Guide Notification component**********/
app.component('guidenotification', GuideNotification)
app.component('notificationtech', Notificationtech)

/*********Guide Payment component**********/
app.component('paymentguide', PaymentGuide)
app.component('guidepayment', GuidePayment)

/*********Guide Review component**********/
app.component('guidereview', GuideReview)
app.component('reviewguide', ReviewGuide)

/*********Guide Settings component**********/
app.component('guidesettings', GuideSettings)
app.component('guidesetting', Guidesetting)

/*********Guide Subscription component**********/
app.component('guidesubscription', GuideSubscriptions)
app.component('subscription', Subscription)

/*********Guide Wallet component**********/
app.component('walletguide', WalletGuide)
app.component('guidewallet', GuideWallet)
app.component('walletmodal', WalletModal)

/*********Guide Withdrawn component**********/
app.component('withdrawn', Withdrawn)
app.component('guidewithdrawn', GuideWithdrawn)

/*********How It Works component**********/
app.component('howitwork', HowItWorks)
app.component('how-it-works', Works)

/*********Index component**********/
app.component('homebanner', DashboardIndex)
app.component('guideindex', IndexGuide)
app.component('howitworksindex', Indexhowitworks)
app.component('packageindex', Package)
app.component('ticketoffer', IndexTicketOffer)

/*********Privacy-Policy component**********/
app.component('privacy', Privacy)
app.component('privacypolicy', PrivacyPolicy)

/*********Login component**********/
app.component('login', Login)

/*********Register component**********/
app.component('register', Register)

/*********Services component**********/
app.component('servicespage', Services)
app.component('service', service)

/*********Reservation component**********/
app.component('reservation', Reservation)

/*********Reservation Tracking component**********/
app.component('trackingformpage', TrackingFormPage)

/*********users-bookings component**********/
app.component('userbookings', UsersBreadcrumb)
app.component('usersprofile', UsersBookingsProfiles)
app.component('userssettings', UsersBookingSettings)
app.component('usersbooking', UsersBookings)

/*********users-Chat component**********/
app.component('userchat', UserChatBreadcrumb)
app.component('usersuserchat', UsersUserChat)

/*********user-Dashboard component**********/
app.component('userdashboard', UserDashboardBreadcrumb)
app.component('dashboarduserprofile', DashboardUserprofile)
app.component('usersdashboard', UsersDashboard)

/*********user-Notification component**********/
app.component('usernotification', UserNotificationBreadcrumb)
app.component('usersnotification', UsersNotification)

/*********user-Payment component**********/
app.component('userpayment', UserPaymentBreadcrumb)
app.component('userspayment', UsersPayment)

/*********user-Review component**********/
app.component('reviewusers', UserReviewBreadcrumb)
app.component('reviews', Usersreviews)

/*********user-settings component**********/
app.component('settingusers', UserSettingsBreadcrumb)
app.component('settings', UsersSettings)

/*********user-Wallet component**********/
app.component('userwallet', UserWalletBreadcrumb)
app.component('userswallet', UsersWallet)
app.component('walletmodal', UsersWalletModal)

/*********Terms&Condition component**********/
app.component('terms', Terms)
app.component('termscondition', TermsCondition)

app.component('vue3-autocounter', Vue3Autocounter)

app.component('vue-select', VueSelect);

app.use(VueAxios, axios)
app.use(router)
app.use(store).mount('#app');


router.beforeEach((to, from) => {
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

})

