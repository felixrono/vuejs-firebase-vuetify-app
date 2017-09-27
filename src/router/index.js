import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import meetups from '@/components/Meetup/meetups';
import createMeetup from '@/components/Meetup/createMeetup';
import Profile from '@/components/User/Profile';
import signin from '@/components/User/signin';
import Signup from '@/components/User/Signup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/Meetup',
      name: 'meetups',
      component: meetups,
    },
    {
      path: '/meetup/new',
      name: 'create Meetup',
      component: createMeetup,
    },
    {
      path: '/User',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/User',
      name: 'signin',
      component: signin,
    },
    {
      path: '/User',
      name: 'Signup',
      component: Signup,
    },
  ],
});
