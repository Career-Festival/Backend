package careerfestival.career.login.api;


import careerfestival.career.login.dto.UpdateUserDetailRequestDto;
import careerfestival.career.login.dto.UserSignUpRequestDto;
import careerfestival.career.login.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 회원가입 1, 2 (이름, 이메일, 비밀번호, 비밀번호 확인, role)
    @PostMapping("/join")
    public ResponseEntity<Void> signUp(@RequestBody UserSignUpRequestDto userSignUpRequestDto) {
        Long userId = userService.signUp(userSignUpRequestDto);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "/join/detail?userId=" + userId);

        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }


    //화면 테스트용
    @GetMapping("/join/detail")
    @ResponseBody
    public String detail() {
        return "join detail";
    }

    //회원가입3
    //@RequestParam : 클라이언트가 요청한 URL의 쿼리 파라미터에 대한 값을 받아옴(url 상에서 데이터를 찾음)
    @PostMapping("/join/detail")
    public ResponseEntity<Void> updateDetail(@RequestParam("userId") Long userId, @RequestBody UpdateUserDetailRequestDto userSignDetailRequestDto) {
        try {
            userService.updateDetail(userId, userSignDetailRequestDto);
            return new ResponseEntity<>(HttpStatus.OK); //200

        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); //400
        }
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity login() throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "/");
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    @GetMapping("/")
    @ResponseBody
    public String home(){
        return "home";
    }

    @GetMapping("/mypage")
    @ResponseBody
    public String mypage(){
        return "mypage";
    }
}