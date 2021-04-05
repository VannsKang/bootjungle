import axios from 'axios';
import { BootcampType } from '@/typings';

const getBootcampItems = async (
	api: string
): Promise<BootcampType.Bootcamp[]> => {
	try {
		const res = await axios.get<BootcampType.Bootcamp[]>(api);

		// validation
		const validation = (await res) && res.status === 200;
		if (!validation) throw new Error('Load Bootcamp Items Failed');

		const { data } = await res;
		return data;
	} catch (error) {
		throw error;
	}
};

export default {
	getBootcampItems,
};
