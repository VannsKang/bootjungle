import axios from 'axios';
import { RankingType } from '@/template';

const getRankingTables = async (api: string): Promise<RankingType.Rankings> => {
  try {
    const res = await axios.get<RankingType.Rankings>(api);

    // validation
    const validation = (await res) && res.status === 200;
    if (!validation) throw new Error('Load Ranking Table Failed');

    const { data } = await res;
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  getRankingTables,
};
