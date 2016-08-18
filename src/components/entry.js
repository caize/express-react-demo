require('../styles/main.css');
import React ,{Component ,PropTypes} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

 function reducers(state = 0 ,action)
{
	switch(action.type)
	{
		case 'increment':
		return state + 1;
		break;
		case 'decrement':
		return state - 1;
		break;
		default:
		return state;
		break;
	}
}

class Counter extends Component {
	constructor(props)
	{
		super(props);
	}
	render(){
		const {value , incrementFn , decrementFn} = this.props;
		return (
			<div>
				clicked : {value}
				{' '}
				<input type="button" value="increment" onClick = {incrementFn} />
				<input type="button" value ="decrement" onClick = {decrementFn} />
			</div>
		)
	}
}
const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());
function iRender(){
	render(
		<Counter value={store.getState()}
			incrementFn = { () => store.dispatch({type:'increment'})}
			decrementFn = { () => store.dispatch({type:'decrement'})}
		 />,
		 document.getElementById('app')
	)
}
iRender();
store.subscribe(iRender);