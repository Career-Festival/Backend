//package careerfestival.career.oauth2.handler;
//
//import careerfestival.career.jwt.JWTUtil;
//import careerfestival.career.oauth2.dto.CustomOAuth2User;
//import careerfestival.career.repository.UserRepository;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//import static careerfestival.career.domain.enums.Role.ROLE_USER;
//
//@Component
//@RequiredArgsConstructor
//public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
//
//    private final JWTUtil jwtUtil;
//    private final UserRepository userRepository;
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        try {
//            CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
//            // User의 Role이 GUEST일 경우 처음 요청한 회원이므로 회원가입 페이지로 리다이렉트
//            if (oAuth2User.getAuthorities().equals(ROLE_USER)) {
//                String accessToken = jwtUtil.createToken(oAuth2User.getEmail(), String.valueOf(ROLE_USER));
//
//                response.addHeader("Authority", "Bearer " + accessToken);
//                response.sendRedirect("join/detail"); // 프론트의 회원가입 추가 정보 입력 폼으로 리다이렉트
//
//                jwtUtil.sendAccessToken(response, accessToken);
//
//            } else {
//                loginSuccess(response, oAuth2User); // 로그인에 성공한 경우 access, refresh 토큰 생성
//            }
//        } catch (Exception e) {
//            throw e;
//        }
//
//    }
//
//
//    // TODO : 소셜 로그인 시에도 무조건 토큰 생성하지 말고 JWT 인증 필터처럼 RefreshToken 유/무에 따라 다르게 처리해보기
//    private void loginSuccess(HttpServletResponse response, CustomOAuth2User oAuth2User) throws IOException {
//        String accessToken = jwtUtil.createToken(oAuth2User.getEmail(), String.valueOf(ROLE_USER));
//        jwtUtil.sendAccessToken(response,  "Bearer " + accessToken);
//
////        jwtUtil.sendAccessAndRefreshToken(response, accessToken, refreshToken);
////        jwtUtil.updateRefreshToken(oAuth2User.getEmail(), refreshToken);
//    }
//
//}
