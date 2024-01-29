package careerfestival.career.register.service;

import careerfestival.career.domain.Event;
import careerfestival.career.domain.User;
import careerfestival.career.domain.enums.Role;
import careerfestival.career.domain.mapping.Organizer;
import careerfestival.career.domain.mapping.Region;
import careerfestival.career.global.ImageUtils;
import careerfestival.career.global.S3Uploader;
import careerfestival.career.register.dto.RegisterEventDto;
import careerfestival.career.register.dto.RegisterMainResponseDto;
import careerfestival.career.register.dto.RegisterOrganizerDto;
import careerfestival.career.repository.EventRepository;
import careerfestival.career.repository.OrganizerRepository;
import careerfestival.career.repository.RegionRepository;
import careerfestival.career.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RegisterService {
    private final UserRepository userRepository;
    private final EventRepository eventRepository;
    private final OrganizerRepository organizerRepository;
    private final RegionRepository regionRepository;

    @Autowired
    private S3Uploader s3Uploader;

    // 행사 등록하기 1, 2단계 기능 구현
    public void registerEvent(Long organizerId, RegisterEventDto registerEventDto) {

        Organizer organizer = organizerRepository.findById(organizerId)
                .orElseThrow(()-> new RuntimeException("Organizer not found with id" + organizerId));
        User user = userRepository.findById(organizer.getUser().getId())
                .orElseThrow(()-> new RuntimeException("User not found with id" + organizer.getUser().getId()));

        Event event = registerEventDto.toEventEntity();
        Region region = registerEventDto.toRegionEntity();
        event.setRegion(regionRepository.findRegionByCityAndAddressLine(region.getCity(), region.getAddressLine()));
        event.setOrganizer(organizer);
        event.setUser(user);

        eventRepository.save(event);
    }

    // 행사 대표이미지 업로드 (저장 픽셀 값 필요)
    @Transactional
    public void registerEventMainImage(Long userId, MultipartFile eventMainImage) {
        Event event = eventRepository.findByUserId(userId);
        try {
            if (!eventMainImage.isEmpty()) {
                // 이미지 리사이징
                BufferedImage resizedImage = ImageUtils.resizeImage(eventMainImage, 600, 400);

                // BufferedImage를 byte[]로 변환
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ImageIO.write(resizedImage, getFileExtension(eventMainImage.getOriginalFilename()), baos);
                byte[] resizedImageBytes = baos.toByteArray();

                // byte[]를 MultipartFile로 변환
                MultipartFile multipartFile = new MockMultipartFile(
                        "resized_" + eventMainImage.getOriginalFilename(),
                        eventMainImage.getOriginalFilename(),
                        eventMainImage.getContentType(),
                        resizedImageBytes
                );

                // S3에 업로드하고 URL 받기
                String storedFileName = s3Uploader.upload(multipartFile, "event_main");

                // 이벤트에 이미지 URL 설정하고 저장
                event.setEventMainFileUrl(storedFileName);
                eventRepository.save(event);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    // 행사 정보 이미지 업로드 (저장 픽셀 값 필요)
    @Transactional
    public void registerEventInformImage(Long userId, MultipartFile eventInformImage) throws IOException{
        Event event = eventRepository.findByUserId(userId);
        try{
            if(!eventInformImage.isEmpty()){
                // 이미지 리사이징
                BufferedImage resizedImage = ImageUtils.resizeImage(eventInformImage, 600, 400);

                // BufferedImage를 byte[]로 변환
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ImageIO.write(resizedImage, getFileExtension(eventInformImage.getOriginalFilename()), baos);
                byte[] resizedImageBytes = baos.toByteArray();

                MultipartFile multipartFile = new MockMultipartFile(
                        "resized_" + eventInformImage.getOriginalFilename(),
                        eventInformImage.getOriginalFilename(),
                        eventInformImage.getContentType(),
                        resizedImageBytes
                );

                String storedFileName = s3Uploader.upload(multipartFile, "event_main");
                event.setEventInformFileUrl(storedFileName);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        eventRepository.save(event);
    }

    // 주최자 이름 등록
    public void registerOrganizer(Long userId, RegisterOrganizerDto registerOrganizerDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id" + userId));
        try {
            if (user.getRole() == Role.ROLE_ORGANIZER);
            Organizer organizer = registerOrganizerDto.toEntity();
            organizer.setUser(user);

            organizerRepository.save(organizer);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    // 주최자 프로필 등록
    @Transactional
    public void registerOrganizerImage(Long userId, MultipartFile organizerProfileImage) throws IOException {
        Organizer organizer = organizerRepository.findByUserId(userId);

        try{
            if(!organizerProfileImage.isEmpty()){
                BufferedImage resizedImage = ImageUtils.resizeImage(organizerProfileImage, 600, 400);

                // BufferedImage를 byte[]로 변환
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ImageIO.write(resizedImage, getFileExtension(organizerProfileImage.getOriginalFilename()), baos);
                byte[] resizedImageBytes = baos.toByteArray();

                MultipartFile multipartFile = new MockMultipartFile(
                        "resized_" + organizerProfileImage.getOriginalFilename(),
                        organizerProfileImage.getOriginalFilename(),
                        organizerProfileImage.getContentType(),
                        resizedImageBytes
                );

                String storedFileName = s3Uploader.upload(multipartFile, "event_main");
                organizer.setOrganizerProfileFileUrl(storedFileName);
            }
        } catch (Exception e){
            e.printStackTrace();
        }

        organizerRepository.save(organizer);
    }

    // 주최자가 등록한 행사 목록 반환
    public Page<RegisterMainResponseDto> getEventList(Long organizerId, Pageable pageable) {
        Page<Event> events = eventRepository.findByOrganizerId(organizerId, pageable);
        return events.map(RegisterMainResponseDto::fromEntity);
    }

    // 주최자의 등록행사 개수 counting
    public int countRegisterEvent(Long organizerId) {
        int countRegisterEvent = eventRepository.countEventsByOrganizerId(organizerId);
        return countRegisterEvent;
    }

    // 주최자 이름 반환
    public String getOrganizerName(Long organizerId) {
        String organizerName = organizerRepository.findOrganizerNameByOrganizerId(organizerId);
        return organizerName;
    }

    /*

    구독자 명수 반환 구현 필요

    */

    private static String getFileExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex >= 0 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1);
        }
        return "";
    }
}
