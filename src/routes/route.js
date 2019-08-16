import PrivateScreen from '../components/PrivateScreen';
import PublicScreen from '../components/PublicScreen';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

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