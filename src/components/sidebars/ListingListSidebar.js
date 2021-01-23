import React from 'react';
import WidgetSearch from "./widgets/WidgetSearch";
import WidgetFilterCategory from "./widgets/WidgetFilterCategory";
import WidgetFilterPrice from "./widgets/WidgetFilterPrice";
import WidgetFilterTags from "./widgets/WidgetFilterTags";
import WidgetFilterFeatures from "./widgets/WidgetFilterFeatures";
import WidgetSortBy from "./widgets/WidgetSortBy";
import WidgetFilterRatings from "./widgets/WidgetFilterRatings";
import WidgetPostedBy from "./widgets/WidgetPostedBy";
import Button from "../common/Button";
import { BsChevronRight } from 'react-icons/bs'
import WidgetFilterAccess from './widgets/WidgetFilterAccess';

function ListingListSidebar() {
  return (
    <>
      <div className="sidebar">
        <WidgetSearch />
        {/* <WidgetFilterCategory /> */}
        <WidgetFilterPrice />
        <WidgetFilterAccess />
        {/* 給料とアクセス */}
        <WidgetFilterTags />
        {/* <WidgetFilterFeatures /> */}
        {/* <WidgetSortBy /> */}
        {/* <WidgetFilterRatings /> */}
        {/* <WidgetPostedBy /> */}
        <div className="sidebar-widget">
          <div className="btn-box">
            <Button text="検索フィルター" url="#" className="d-block w-100 text-center">
              <span className="d-inline-block"><BsChevronRight /></span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingListSidebar;