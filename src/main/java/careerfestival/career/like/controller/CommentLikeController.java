package careerfestival.career.like.controller;

import careerfestival.career.like.dto.CommentLikeRequestDto;
import careerfestival.career.like.dto.CommentLikeResponseDto;
import careerfestival.career.like.service.CommentLikeService;
import careerfestival.career.login.dto.CustomUserDetails;
import careerfestival.career.repository.CommentLikeRepository;
import careerfestival.career.wish.dto.WishRequestDto;
import careerfestival.career.wish.dto.WishResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CommentLikeController {
    private final CommentLikeService commentLikeService;

    @PostMapping("/event/{eventId}/{userId}/{commentId}/like")
    public ResponseEntity<Long> addLike(
            @PathVariable("userId") Long userId,
            @PathVariable("commentId") Long commentId,
            @PathVariable("eventId") Long eventId,
            @RequestBody CommentLikeRequestDto commentLikeRequestDto) {


        try {
            boolean Id = commentLikeService.LikeSaveAndRemove(userId, eventId, commentId, commentLikeRequestDto);
            // 리다이렉트를 위한 URL 생성
            String redirectUrl = "/event/" + eventId;

            // ResponseEntity로 리다이렉트 응답 생성
            return ResponseEntity.ok()
                    .header("Location", redirectUrl)
                    .build();
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Log the exception or return a more specific error response
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/event/{eventId}/{userId}/{commentId}/like")
    public ResponseEntity<List<CommentLikeResponseDto>> getAllCommentLike(
            @PathVariable("eventId") Long userId,
            @PathVariable("userId") Long eventId,
            @PathVariable("commentId") Long commentId) {



        try {
            List<CommentLikeResponseDto> like = commentLikeService.getAllCommentLikeByComment(userId, eventId,commentId);
            return new ResponseEntity<>(like, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Log the exception or return a more specific error response
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
