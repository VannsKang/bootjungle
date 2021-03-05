import axios from 'axios';
import { CourseType } from '@/template';

const getCourseItems = async (api: string): Promise<CourseType.CourseData> => {
  try {
    const res = await axios.get<CourseType.CourseData>(api);

    // validation
    const validation = (await res) && res.status === 200;
    if (!validation) throw new Error('Load Course Items Failed');

    const { data } = await res;
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  getCourseItems,
};
