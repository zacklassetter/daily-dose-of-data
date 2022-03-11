import React from 'react';
import './Element.scss';

const Element = (props) => {
	return <p className={"element " + props.color + " " + props.border}>{props.value}</p>;
}

export default Element;