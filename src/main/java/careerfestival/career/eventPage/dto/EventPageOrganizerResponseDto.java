package careerfestival.career.eventPage.dto;

import careerfestival.career.domain.mapping.Organizer;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventPageOrganizerResponseDto {
    private String organizerName;
    private String organizerProfileFileUrl;
    public EventPageOrganizerResponseDto (Organizer organizer) {
        this.organizerName = organizer.getOrganizerName();
        this.organizerProfileFileUrl = organizer.getOrganizerProfileFileUrl();
    }
}
