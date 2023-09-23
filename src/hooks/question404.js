// hooks/useQuestion.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logoutUser,setLastVisitedUrl } from "../actions/authedUser";

export function useQuestion() {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questions[question_id]);

  useEffect(() => {
    if (!question) {
        dispatch(setLastVisitedUrl('/404'));

      dispatch(logoutUser());

      navigate('/');
    }
  }, [question, dispatch, navigate]);

  return question;
}
