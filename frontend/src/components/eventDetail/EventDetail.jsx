import React from "react";
import {
  DetailContainer,
  Thumbnail,
  HorizontalDivider,
  FileContainer,
  PlaceContainer,
  Subtitle,
} from "./EventDetailStyle";

import Menu from "./Menu";
import Info from "./Info";

function EventDetail() {
  return (
    <DetailContainer>
      <Thumbnail />
      <Menu />
      <HorizontalDivider />
      <Info />
      <HorizontalDivider />
      <FileContainer>상세 내용</FileContainer>
      <PlaceContainer>
        <Subtitle>행사위치</Subtitle>
      </PlaceContainer>
    </DetailContainer>
  );
}

export default EventDetail;
