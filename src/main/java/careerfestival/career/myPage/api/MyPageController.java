package careerfestival.career.myPage.api;

import careerfestival.career.domain.User;
import careerfestival.career.login.dto.CustomUserDetails;
import careerfestival.career.myPage.dto.MyPageResponseDto;
import careerfestival.career.myPage.dto.UpdateMypageResponseDto;
import careerfestival.career.login.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class MyPageController {

    private final UserService userService;

    @GetMapping("/mypage")
    @ResponseBody
    public MyPageResponseDto myPage (@AuthenticationPrincipal CustomUserDetails customUserDetails){
        User findUser = userService.findUserByCustomUserDetails(customUserDetails);
        return userService.fillMyPage(findUser);
    }


    @PatchMapping("/mypage/update")
    public ResponseEntity<Void> updateMember(@AuthenticationPrincipal CustomUserDetails customUserDetails, @RequestBody UpdateMypageResponseDto updateMypageResponseDto) {
        userService.findUserByEmailAndUpdate(customUserDetails.getUsername(), updateMypageResponseDto);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "/mypage");
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }


}
