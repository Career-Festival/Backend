package careerfestival.career.mainPage.controller;

import careerfestival.career.domain.enums.Category;
import careerfestival.career.domain.enums.KeywordName;
import careerfestival.career.mainPage.dto.MainPageFestivalListResponseDto;
import careerfestival.career.mainPage.dto.MainPageResponseDto;
import careerfestival.career.mainPage.service.MainPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/")
@RestController
public class MainPageController {
    private final MainPageService mainPageService;

    // 로그인 이전 화면 Authorization 이전
    @GetMapping("")
    public ResponseEntity<Map<String, Object>> getEvents(){
        try{
            // 1. 조회수에 의한 이벤트명
            List<MainPageResponseDto> mainPageResponseDtoNames = mainPageService.getEventNames();
            // 2. 조회수에 의한 정렬 리스트
            List<MainPageResponseDto> mainPageResponseDtoViews = mainPageService.getEventsHitsDesc();
            // 3. 랜덤에 의한 정렬 리스트
            List<MainPageResponseDto> mainPageResponseDtoRandom = mainPageService.getEventsHitsRandom();

            Map<String, Object> mainPageResponseDtoObjectMap = new HashMap<>();
            mainPageResponseDtoObjectMap.put("eventRandom", mainPageResponseDtoRandom);
            mainPageResponseDtoObjectMap.put("eventViews", mainPageResponseDtoViews);
            mainPageResponseDtoObjectMap.put("eventNames", mainPageResponseDtoNames);

            return ResponseEntity.ok().body(mainPageResponseDtoObjectMap);
        } catch (IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    // 메인페이지에서 행사 목록 클릭 시 보여지는 화면
    // Category와 keywordName에 의해서 필터링되고 페이징 적용
    @GetMapping("/festival-list")
    public ResponseEntity<Map<String, Object>> getEventsFilter(
            @RequestParam(value = "category") Category category,
            @RequestParam(value = "keywordName") KeywordName keywordName,
            @PageableDefault(size = 9, sort = "hits", direction = Sort.Direction.DESC) Pageable pageable){
        try{
            // 필터링이 적용될 9개의 행사 리스트 조회
            Page<MainPageFestivalListResponseDto> mainPageFestivalListResponseDtos
                    = mainPageService.getEventsFiltered(category, keywordName, pageable);
            // 조회수에 의한 이벤트명
            List<MainPageResponseDto> mainPageResponseDtoNames = mainPageService.getEventNames();

            Map<String, Object> mainPageFestivalListResponseDtoObjectMap = new HashMap<>();
            mainPageFestivalListResponseDtoObjectMap.put("eventFilter", mainPageFestivalListResponseDtos);
            mainPageFestivalListResponseDtoObjectMap.put("eventNames", mainPageResponseDtoNames);

            return ResponseEntity.ok().body(mainPageFestivalListResponseDtoObjectMap);
        } catch (IllegalArgumentException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
