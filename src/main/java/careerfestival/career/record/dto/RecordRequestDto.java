package careerfestival.career.record.dto;

import careerfestival.career.domain.mapping.NetworkDetail;
import careerfestival.career.domain.mapping.RecordDetail;
import careerfestival.career.domain.enums.Category;
import careerfestival.career.domain.enums.KeywordName;
import careerfestival.career.domain.Record;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecordRequestDto {
    private Category category;
    private String eventName;
    private LocalDate eventDate;
    private List<KeywordName> keywordName;
    private List<Map<RecordDetail, RecordDetail>> recordDetails;
    private List<Map<NetworkDetail, NetworkDetail>> contactDetails;

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RecordDetailDto {
        private String detailRecordName;
        private String recordDescription;
    }
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ContactDetailDto {
        private String networkingName;
        private String networkingContact;
    }
    @Builder
    public Record toEntity() {
        Record.RecordBuilder recordBuilder = Record.builder()
                .category(category)
                .eventName(eventName)
                .eventDate(eventDate);
//                .keywordName(keywordName)
//                .recordDetails((Map<RecordDetail, RecordDetail>) mapToRecordDetails(recordDetails))
//                .contactDetails((Map<ContactDetail, ContactDetail>) mapToContactDetails(contactDetails));

        return recordBuilder.build();
        // Checkpoint 글의 제목도 추가해저야함
    }
    private  List<RecordDetail> mapToRecordDetails(List<Map<RecordDetail, RecordDetail>> recordDetails) {

                return recordDetails.stream()
                .map(detailDto -> {
                     RecordDetail recordDetail = RecordDetail.builder()
                    .detailRecordName(detailDto.keySet().iterator().next().getDetailRecordName())
                    .recordDescription(detailDto.values().iterator().next().getRecordDescription())
                    .build();
        return recordDetail;
    })
            .collect(Collectors.toList());
    }

    private  List<NetworkDetail> mapToContactDetails(List<Map<NetworkDetail, NetworkDetail>> contactDetails) {

        return contactDetails.stream()
                .map(detailDto -> {
                    NetworkDetail networkDetail = NetworkDetail.builder()
                            .networkingName(detailDto.keySet().iterator().next().getNetworkingName())
                            .networkingContact(detailDto.values().iterator().next().getNetworkingContact())
                            .build();
                    return networkDetail;
                })
                .collect(Collectors.toList());
    }
}
