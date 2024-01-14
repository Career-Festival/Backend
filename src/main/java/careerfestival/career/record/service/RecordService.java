package careerfestival.career.record.service;

import careerfestival.career.domain.Record;
import careerfestival.career.domain.User;
import careerfestival.career.record.dto.RecordLectureSeminarDto;
import careerfestival.career.repository.RecordRepository;
import careerfestival.career.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordService {
    private final RecordRepository recordRepository;
    private final UserRepository userRepository;

    public void recordLectureSeminar(Long userId, RecordLectureSeminarDto recordLectureSeminarDto) {
        // 전달받은 userId로 연관관계 매핑된 User 테이블에 맞춰서 DB에 저장하기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        Record record = recordLectureSeminarDto.toEntity();
        record.setUser(user);

        recordRepository.save(record);
    }

}
