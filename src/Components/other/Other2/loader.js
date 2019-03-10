import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Other2 = Loadable ({
    loader: () => import('../Other2/Other2'),
    loading: Loading
}); 

export default Other2;