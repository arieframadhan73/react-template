import PrivateScreen from '../components/PrivateScreen';
import PublicScreen from '../components/PublicScreen';
import Home from '../containers/Home';
import NotFound from '../components/NotFound';
import SignIn from '../containers/Login'

export const privateRoute = {
  private: {
    title: 'Private Page',
    url: '/private',
    component: PrivateScreen
  }
};

export const publicRoute = {
  public: {
    title: 'Public Page',
    url: '/public',
    component: PublicScreen
  },
  home: {
    title: 'Home',
    url: '/',
    component: Home
  },
  signIn: {
    title: 'Sign In',
    url: '/sign-in',
    component: SignIn
  }
};

export const otherRoute = {
  notFound: {
    title: '404 Not Found',
    url: '/*',
    component: NotFound
  }
};

export default { ...privateRoute, ...publicRoute, ...otherRoute };