import React, { useState, useEffect } from "react";
import * as M from "./style";
import MealBg from "../../../../assets/img/Mealbg.svg";
import { useSchoolMenuQuery } from "../../../../hooks/Meal/useSchoolMeal";

const MealWidget: React.FC = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return { year, month, day };
  };

  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getCurrentDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { data: schoolMenuData, isLoading, isError } = useSchoolMenuQuery(
    String(date.year),
    String(date.month),
    String(date.day)
  );

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  let mealType = "";
  if (time >= 0 && time < 490) {
    mealType = "조식";
  } if (time >= 490 && time < 810) {
    mealType = "조식";
  } if (time >= 810 && time < 1230) {
    mealType = "중식";
  } if (time >= 1230 && time < 1310) {
    mealType = "중식";
  } if (time >= 1310 && time < 1910) {
    mealType = "석식";
  } else {
    mealType = "급식이 종료되었습니다";
  }

  let meal = "";
  if (schoolMenuData && schoolMenuData.data) {
    switch (mealType) {
      case "조식":
        meal = schoolMenuData.data[0] || "해당 시간대의 식단이 없습니다.";
        break;
      case "중식":
        meal = schoolMenuData.data[1] || "해당 시간대의 식단이 없습니다.";
        break;
      case "석식":
        meal = schoolMenuData.data[2] || "해당 시간대의 식단이 없습니다.";
        break;
      case "종료":
        meal = "오늘 급식이 종료되었습니다.";
        break;
      default:
        meal = "해당 시간대의 식단이 없습니다.";
    }
  }

  return (
    <M.MealWidgetWraper>
      <M.MealWidgetimage src={MealBg} />
      <M.MealWidgetContents>
        <M.MealWidgetTitle>오늘의 {mealType}</M.MealWidgetTitle>
        {isLoading ? (
          <div style={{ color: "#fff", fontSize: "12px" }}>Loading...</div>
        ) : isError ? (
          <div style={{ color: "#fff", fontSize: "12px" }}>급식 정보를 가져오는 중 오류가 발생했습니다.</div>
        ) : (
          <M.MealWidgetMenu>{meal}</M.MealWidgetMenu>
        )}
      </M.MealWidgetContents>
    </M.MealWidgetWraper>
  );
};

export default MealWidget;
