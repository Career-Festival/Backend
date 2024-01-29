//package careerfestival.career.oauth2.dto;
//
//import careerfestival.career.domain.enums.Role;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Map;
//
//@RequiredArgsConstructor
//public class CustomOAuth2User implements OAuth2User {
//
//    private final OAuth2Response oAuth2Response;
//    private final Role role;
//
//    //resourse 서버로부터 넘어오는 데이터
//    @Override
//    public Map<String, Object> getAttributes() {
//
//        return null;
//    }
//
//    //role에 해당
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Collection<GrantedAuthority> collection = new ArrayList<>();
//        collection.add(new GrantedAuthority() {
//            @Override
//            public String getAuthority() {
//                return role.name();
//            }
//        });
//
//        return collection;
//    }
//
//    @Override
//    public String getName() {
//        return oAuth2Response.getName();
//    }
//
//    public String getEmail(){
//        return oAuth2Response.getEmail();
//    }
//}
