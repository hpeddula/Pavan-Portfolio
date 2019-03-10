import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Game4 = Loadable ({
    loader: () => import('../Game4/game4'),
    loading: Loading
}); 

export default Game4;