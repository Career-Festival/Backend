package careerfestival.career.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:9000", "http://localhost:3000", "https://www.career-festival.com:3000", "https://www.career-festival.com:8443", "https://careerfestival.netlify.app") // 허용할 출처
                .allowedMethods("GET", "POST", "DELETE", "PUT", "PATCH") // 허용할 HTTP method
                .allowedHeaders("*")
                .exposedHeaders("*")
                .allowCredentials(true) // 쿠키 인증 요청 허용
                .maxAge(3000);
    }
}
