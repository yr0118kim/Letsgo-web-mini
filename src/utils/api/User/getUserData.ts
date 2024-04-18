import instance from '../../axios';
import { getToken } from '../../functions/TokenManagers';

interface UserData {
  id: number;
  username: string;
  nickname?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export async function getUserData(): Promise<UserData[]> {
  try {
    const { accessToken } = getToken();

    if (!accessToken) {
      throw new Error('액세스 토큰이 없습니다.');
    }

    const response = await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },  
    });

    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error('사용자 데이터를 가져오는데 실패했습니다.');
    }
  } catch (error) {
    console.error('사용자 데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
}
