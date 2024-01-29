//package careerfestival.career.oauth2.service;
//
//import careerfestival.career.domain.User;
//import careerfestival.career.domain.enums.Role;
//import careerfestival.career.domain.enums.SocialType;
//import careerfestival.career.oauth2.dto.CustomOAuth2User;
//import careerfestival.career.oauth2.dto.NaverResponse;
//import careerfestival.career.oauth2.dto.OAuth2Response;
//import careerfestival.career.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
//import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
//import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class CustomOAuth2UserService extends DefaultOAuth2UserService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//
//        OAuth2User oAuth2User = super.loadUser(userRequest);
//        System.out.println("oAuth2User = " + oAuth2User.getAuthorities());
//
//        //네이버인지 카카오인지 등 확인 어떤 인증인지
//        String registrationId = userRequest.getClientRegistration().getRegistrationId();
//
//        OAuth2Response oAuth2Response = null;
//
//        if (registrationId.equals("naver")) {
//            oAuth2Response = new NaverResponse(oAuth2User.getAttributes());
//        }
//        else return null;
//
//        String name = oAuth2Response.getName();
//        String email = oAuth2Response.getEmail();
//
//        User findUser = userRepository.findUserByEmail(email);
//
//        Role role = null;
//        if (findUser == null) {
//            User user = User.builder()
//                    .email(email)
//                    .name(name)
//                    .role(Role.valueOf("ROLE_USER"))
//                    .socialType(SocialType.NAVER)
//                    .build();
//
//            userRepository.save(user);
//
//        }
//        else {
//            role = findUser.getRole();
////            findUser.updateSocialType(SocialType.NAVER);
//            findUser.updateName(name);
//        }
//
//        return new CustomOAuth2User(oAuth2Response, role);
//    }
//}
