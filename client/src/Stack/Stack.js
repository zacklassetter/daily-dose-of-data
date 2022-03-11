import React, { useState, useRef, useEffect } from 'react';
import './Stack.scss';
import Element from '../Element/Element';

//returns a list of react element components from the stack component array
const StackDisplay = (props) => {
	return props.stack.map((value, index) => {
		return <Element key={index} value={value} />
	});
}

//main react component for stack
const Stack = () => {
	
	const [, forceRender] = useState(0);
	const [stack, setStack] = useState([]);
	const stackInput = useRef();
	const stackOutput = useRef();
	
	//We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

	//sets queue to a randomly generated queue
    const randomStack = () => {
        const size = randInt(10, 60);
        var newStack = [];
        for (let i = 0; i < size; i++)
            newStack.push(randInt(-999,1000));
        setStack(newStack);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize stack to random stack
    useEffect(randomStack, []);
	
	const push = () => {
		var data = parseInt(stackInput.current.value);
		if(isNaN(data))
            data = 0;
		stack.push(data);
		forceUpdate();
		stackInput.current.value = null;
	}
	
	const pop = () => {
		const data = stack.pop();
		forceUpdate();
		if (data === undefined)
			stackOutput.current.value = "None";
		else
			stackOutput.current.value = data;
	}
	
	const peek = () => {
		const data = stack[stack.length-1];
		if (data === undefined)
			stackOutput.current.value = "None";
		else
			stackOutput.current.value = data;
	}
	
	return (
		<div className="stack">
			<div className="controls">
				<button id="randomButton" onClick={randomStack}>Random</button>
                <br />
				<button id="pushButton" onClick={push}>Push</button>
				<input id="stackInput" ref={stackInput} type="text" />
				<br />
				<button id="popButton" onClick={pop}>Pop</button>
				<br />
				<input id="stackOutput" ref={stackOutput} type="text" readOnly />
				<br />
				<button id="peekButton" onClick={peek}>Peek</button>
				<br />
			</div>
			<div className="visualization">
				<StackDisplay stack={stack} />
				<div id="stackTop">
					<p>&#x2190; Push</p>
					<br />
					<p>&#x2192; Pop</p>
				</div>
			</div>
		</div>
	);
}

export default Stack;