import Home from '@/views/Home.vue';
import Posts from '@/components/posts/Posts.vue';
import Post from '@/components/posts/Post.vue';
import Empty from '@/components/Empty.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '*',
    name: '404',
    component: Empty,
    props: {
      title: 'Page not found!',
    },
  },
];
