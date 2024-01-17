package careerfestival.career.record.dto;

import careerfestival.career.domain.Record;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecordEtcDto {
    private String eventName;
    private LocalDate eventDate;
    private String networkingName;
    private String networkingContact;

    @Builder
    public Record toEntity() {
        return Record.builder()
                .eventName(eventName)
                .eventDate(eventDate)
                .networkingName(networkingName)
                .networkingContact(networkingContact)
                .build();
    }
}