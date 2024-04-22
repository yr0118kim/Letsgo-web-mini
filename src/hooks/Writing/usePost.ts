import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from "../../utils/api/Writing";

type PostProps = {
  category: number;
  title: string;
  content: string;
  picture: string;
};

interface PostGroup {
  title: string;
}

let PostGroupList: Array<PostGroup>;

export function useCreatePost() {
  const [postData, setPostData] = useState<PostProps>({
    category: 0,
    title: "",
    content: "",
    picture: "",
  });
  const [postSelected, setPostSelected] = useState<number>(0);
  const [categorySelected, setCategorySelected] = useState<number>(0);

  const navigate = useNavigate();
  const createPostMutation = useCreatePostMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLButtonElement
    >
  ) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPostMutation.mutate(postData, {
      onSuccess: () => {
        toast.success("게시물 등록에 성공했습니다.");
        navigate("/");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          toast.error("게시물 등록에 실패했습니다.");
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  const handlePostClick = (index: number) => {
    setPostSelected(index);
  };

  useEffect(() => {
    setPostData((prevData) => ({
      ...prevData,
      category: categorySelected,
    }));

  }, [categorySelected]);

  const handleCategoryClick = (index: number) => {
    setCategorySelected(index);
  };

  return {
    postData,
    setPostData,
    handleChange,
    handleSubmit,
    postSelected,
    categorySelected,
    handlePostClick,
    handleCategoryClick,
  };
}
