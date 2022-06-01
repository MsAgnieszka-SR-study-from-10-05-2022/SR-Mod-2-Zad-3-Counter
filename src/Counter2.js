// === class component ===

import React from "react";

class Counter2 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	};

	componentDidMount() {
		const actualCountInterval = setInterval(() => {
			this.setState({count: this.state.count + 1});
		}, 1000);

		this.setState({countInterval: actualCountInterval});
	};

	componentWillUnmount() {
		clearInterval(this.state.countInterval);
	}

	render() {
		const { count } = this.state;

		return (
			<div>
				<p>{`${Counter2.name} - class component`}</p>
				<p>{count}</p>
			</div>
		);
	};
}

export { Counter2 };