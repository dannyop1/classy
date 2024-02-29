import axios from "axios";
const BASE_URL = "https://65e01e12d3db23f762484bb2.mockapi.io";

const axiosOne = axios.create({
  baseURL: BASE_URL,
});

export const getQuizzes = async () => {
  const response = await axiosOne.get(`/quiz`);

  return response.data;
};

export const addQuiz = async (newQuiz) => {
    try {
      const response = await axiosOne.post(`/quiz`, newQuiz);
      return response.data;
    } catch (error) {
      console.error("Error adding quiz:", error);
      throw error;
    }
  };



