import React from "react";
import * as M from "./style";
import MealBg from "../../../../assets/img/Mealbg.svg";
import { useSchoolMenuQuery } from "../../../../hooks/Meal/useSchoolMeal";

const MealWidget: React.FC = () => {
  const year = '2024';
  const month = '04';
  const day = '02';

  const { data: schoolMenuData, isLoading, isError } = useSchoolMenuQuery(year as any, month as any, day as any);

  return (
    <M.MealWidgetWraper>
      <M.MealWidgetimage src={MealBg} />
      <M.MealWidgetContents>
        <M.MealWidgetTitle>오늘의 중식</M.MealWidgetTitle>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>급식 정보를 가져오는 중 오류가 발생했습니다.</div>
        ) : (
          <M.MealWidgetMenu>{schoolMenuData?.data[0]}</M.MealWidgetMenu>
        )}
      </M.MealWidgetContents>
    </M.MealWidgetWraper>
  );
};

export default MealWidget;
