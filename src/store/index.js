import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers';
import RootSaga from "../sagas";



const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middleware = routerMiddleware(history);


export default createStore(reducers,
    applyMiddleware(middleware, sagaMiddleware)
)

sagaMiddleware.run(RootSaga);
