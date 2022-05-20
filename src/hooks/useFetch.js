import { useEffect, useState } from 'react';

export const useFetch = (fn, param) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);

			try {
				if (!param) {
					const res = await fn();
					setData(res.data);
					return res.data;
				} else {
					const res = await fn(param);
					setData(res.data);
					return res.data;
				}
			} catch (e) {
				console.log(e);
			} finally {
				setIsLoading(false);
			}
		};
		loadData();
	}, [fn, param]);

	return {
		data,
		isLoading,
	};
};
