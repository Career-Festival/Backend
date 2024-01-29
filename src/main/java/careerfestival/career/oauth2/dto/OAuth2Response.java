package careerfestival.career.oauth2.dto;

public interface OAuth2Response {

    //제공자 naver, 카카오 등
    String getProvider();

    //제공자에서 발급해주는 id
    String getProviderId();

    String getEmail();

    //사용자 이름
    String getName();
}
