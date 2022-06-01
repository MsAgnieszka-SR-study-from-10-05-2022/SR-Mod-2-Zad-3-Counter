// === function component ===

import React, { useEffect, useState } from 'react';

function Counter1() {
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		const countInterval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);
		return () => clearInterval(countInterval);
	}, []);

	return (
		<div>
			<p>{`${Counter1.name} - function component`}</p>
			<p>{count}</p>
		</div>
	);
}

export { Counter1 };
