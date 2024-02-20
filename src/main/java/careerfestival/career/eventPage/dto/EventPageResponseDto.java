package careerfestival.career.eventPage.dto;

import careerfestival.career.domain.Event;
import careerfestival.career.domain.enums.Category;
import careerfestival.career.domain.enums.KeywordName;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventPageResponseDto {

    private Long eventId;

    private String eventName;
    private LocalDateTime recruitmentStart;
    private LocalDateTime recruitmentEnd;
    private String eventCost;
    private LocalDateTime eventStart;
    private LocalDateTime eventEnd;
    private String specAddress;
    private KeywordName keywordName;
    private Category category;
    private String eventMainImageUrl;
    private String eventInformImageUrl;

    private String managerName;
    private String managerEmail;

    public static EventPageResponseDto fromEntity(Event event){
        return EventPageResponseDto.builder()
                .eventId(event.getId())
                .eventName(event.getEventName())
                .recruitmentStart(event.getRecruitmentStart())
                .recruitmentEnd(event.getRecruitmentEnd())
                .eventCost(event.getEventCost())
                .specAddress(event.getSpecAddress())
                .keywordName(event.getKeywordName())
                .category(event.getCategory())
                .eventStart(event.getEventStart())
                .eventEnd(event.getEventEnd())
                .eventMainImageUrl(event.getEventMainFileUrl())
                .eventInformImageUrl(event.getEventInformFileUrl())
                .managerName(event.getManagerName())
                .managerEmail(event.getManagerEmail())
                .build();
    }
}
