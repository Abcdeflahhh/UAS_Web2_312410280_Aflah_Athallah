const API_BASE_URL = "http://localhost:8080";

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      alert("Sesi login habis atau token tidak valid.");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    }

    return Promise.reject(error);
  },
);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/barang",
    component: Barang,
    meta: { requiresAuth: true },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

const App = {
  template: `
        <div>
            <nav class="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow">
                <div class="font-bold text-xl">
                    E-Inventory
                </div>

                <div class="flex gap-4 items-center">
                    <router-link to="/" class="hover:text-blue-300">Beranda</router-link>
                    <router-link v-if="isLoggedIn" to="/dashboard" class="hover:text-blue-300">Dashboard</router-link>
                    <router-link v-if="isLoggedIn" to="/barang" class="hover:text-blue-300">Data Barang</router-link>
                    <router-link v-if="!isLoggedIn" to="/login" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Login</router-link>
                    <button 
                        v-if="isLoggedIn"
                        @click="logout"
                        class="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </nav>

            <router-view></router-view>
        </div>
    `,

  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    };
  },

  watch: {
    $route() {
      this.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
  },

  methods: {
    async logout() {
      try {
        await axios.post("/logout");
      } catch (error) {
        console.log(error);
      }

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      this.isLoggedIn = null;
      router.push("/login");
    },
  },
};

Vue.createApp(App).use(router).mount("#app");
