    package careerfestival.career.join.dto;

    import careerfestival.career.domain.User;
    import careerfestival.career.domain.enums.Role;
    import careerfestival.career.domain.enums.SocialType;
    import lombok.*;

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Setter
    public class UserSignUpRequestDto {

        private String email;
        private String password;
        private String checkPassword;
        private String name;
        private Role role;
        private SocialType socialType;

        @Builder
        public User toEntity() {
            return User.builder()
                    .email(email)
                    .password(password)
                    .name(name)
                    .role(role)
                    .socialType(socialType)
                    .build();
        }
    }
