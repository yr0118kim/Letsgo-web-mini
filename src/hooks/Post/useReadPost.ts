import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/functions/TokenManagers";
import instance from "../../utils/axios";

export function useReadPost(postId: number) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { accessToken } = getToken();
      setIsLoading(true);

      try {
        const response = await instance.get<ApiResponse<Post>>(`${import.meta.env.VITE_BASE_URL}/post/${postId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const postData = response.data.data;
        setPost(postData);
        setIsLoading(false); 
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("서버 오류 발생");
        } else {
          setError("네트워크 오류 발생");
        }
        setIsLoading(false); 
      }
    };

    fetchPost();

  }, [postId]); 

  return { post, isLoading, error };
}

interface Post {
  id: number;
  user: number;
  category: number;
  title: string;
  content: string;
  picture: string;
  viewed: number;
  liked: number;
  commented: number;
  isLike: boolean;
  userImg: string;
  createdAt: string;
  updatedAt: string;
}

// API 응답 데이터 타입 정의
interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}