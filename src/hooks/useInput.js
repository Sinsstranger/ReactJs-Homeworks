import { useState } from 'react';

const useInput = (name, initialValue, required = false, placeholder = null) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(null);
	return {
		name,
		value,
		required,
		placeholder,
		error,
		onBlur: (event) => {
			setError(
				!event.target.value && required
					? `Поле "${placeholder}[${name}]" обязательно для заполнения`
					: null,
			);
		},
		onInput: (event) => setValue(() => event.target.value),
		setValue,
	};
};

export default useInput;
