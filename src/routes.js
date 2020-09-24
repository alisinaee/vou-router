import home from './components/home.vue'
import user from './components/user.vue'
import about from './components/about.vue'
import info from './components/info.vue'
import _404 from './components/_404.vue'
import userList from './components/userList.vue'
import userDetail from './components/userDetail.vue'
import userEdit from './components/userEdit.vue'


export const routes = [
    { path: '/', component: home , name:'home'},
    {
        path: '/user', component: user, children: [
            { path: '', component: userList },
            { path: ':id', component: userDetail , name : 'userDetail' },
            { path: ':id/edit', component: userEdit , name :'userEdit' },
        ],
    },
    { path: '/about', components: {default : about , info}},
    {path :'*' ,component : _404 , name:'_404'}
]