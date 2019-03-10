import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Game5 = Loadable ({
    loader: () => import('../Game5/game5'),
    loading: Loading
}); 

export default Game5;