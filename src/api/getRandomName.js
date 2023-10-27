import axios from 'axios';

export const getRandomName = async () => {
	try {
		const {
			data: { FirstName },
		} = await axios.get('https://api.randomdatatools.ru/?unescaped=false&params=FirstName');

		return FirstName.toLowerCase();
	} catch (error) {
		console.error(error);

		return '';
	}
};
