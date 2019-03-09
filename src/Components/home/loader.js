import Loadable from 'react-loadable';
import Loading from '../loader/loading';
const Home = Loadable ({
    loader: () => import('../home/home'),
    loading: Loading
}); 

export default Home;