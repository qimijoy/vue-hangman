import axios from 'axios';

export const getFirstname = async () => {
	const {
		data: { FirstName },
	} = await axios.get('https://api.randomdatatools.ru/?unescaped=false&params=FirstName');

	return FirstName;
};
