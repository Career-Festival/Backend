package careerfestival.career.login.dto;

import careerfestival.career.domain.Gender;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSignDetailRequestDto {
    private Gender gender;
    private int age;
    private String phoneNumber;
}