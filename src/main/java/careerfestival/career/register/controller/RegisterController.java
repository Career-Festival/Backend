package careerfestival.career.register.controller;

import careerfestival.career.register.dto.RegisterEventDto;
import careerfestival.career.register.dto.RegisterMainResponseDto;
import careerfestival.career.register.dto.RegisterOrganizerDto;
import careerfestival.career.register.service.RegisterService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/event")
@RestController
public class RegisterController {

    private final RegisterService registerService;
    // 주최자가 행사 등록
    // 주최자 이름으로 회원가입
    @PostMapping("/organizer/{userId}")
    public ResponseEntity registerOrganizerName(@PathVariable("userId") Long userId, @RequestBody RegisterOrganizerDto registerOrganizerDto) {
        registerService.registerOrganizer(userId, registerOrganizerDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    // 주최자 프로필 이미지 업로드
    @PostMapping(value = "/organizer/{userId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity registerOrganizerImage(@PathVariable("userId") Long userId,
                                                 HttpServletRequest request,
                                                 @RequestParam(value = "image") MultipartFile image){
        try{
            registerService.registerOrganizerImage(userId, image);
        } catch (IOException e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    // 행사 등록하기 1, 행사 등록하기 2 통합
    @PostMapping("/register/{organizerId}")
    public ResponseEntity registerEvent(@PathVariable("organizerId") Long organizerId,
                                        @RequestBody RegisterEventDto registerEventDto) {
        registerService.registerEvent(organizerId,registerEventDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    // 행사 대표 이미지 업로드 등록
    @PostMapping(value = "register/{eventId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity regiserEventMainImage(@PathVariable("eventId") Long eventId,
                                            HttpServletRequest request,
                                            @RequestParam(value = "eventmainimage") MultipartFile eventmainimage){
        registerService.registerEventMainImage(eventId, eventmainimage);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(value = "register/{userId}/{eventId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity regiserEventInformImage(@PathVariable("userId") Long userId,
                                                  HttpServletRequest request,
                                                  @RequestParam(value = "eventinformimage") MultipartFile eventinformimage){
        try{
            registerService.registerEventInformImage(userId, eventinformimage);
        }catch (IOException e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    // 5단계 화면 수정해야함
    @GetMapping("/{userId}")
    public ResponseEntity getRegisterByUserId(@PathVariable("userId") Long userId) {
        try{
            List<RegisterMainResponseDto> registerMainResponseDto = registerService.getRegisterByUserId(userId);
            return ResponseEntity.ok(registerMainResponseDto);
        } catch (IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}