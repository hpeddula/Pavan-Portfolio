import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Game3 = Loadable ({
    loader: () => import('./game3'),
    loading: Loading
}); 

export default Game3;