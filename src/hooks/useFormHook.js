import { useState } from 'react';

export const useFormHook = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const resetValues = (newFormState = initialState) => {
		setFormValues(newFormState);
	};

	const handleFormValues = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	return [formValues, handleFormValues, resetValues];
};
