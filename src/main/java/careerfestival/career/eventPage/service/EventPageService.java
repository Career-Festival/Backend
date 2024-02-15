package careerfestival.career.eventPage.service;

import careerfestival.career.domain.Event;
import careerfestival.career.domain.mapping.Organizer;
import careerfestival.career.eventPage.dto.EventPageOrganizerResponseDto;
import careerfestival.career.eventPage.dto.EventPageResponseDto;
import careerfestival.career.repository.CommentRepository;
import careerfestival.career.repository.EventRepository;
import careerfestival.career.repository.OrganizerRepository;
import careerfestival.career.wish.Exception.UserOrEventNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventPageService {
    private final EventRepository eventRepository;
    private final OrganizerRepository organizerRepository;

    public List<EventPageResponseDto> getEvents(Long eventId) {
        // 조회수에 의한 정렬 처리 필요
        Optional<Event> eventOptional = eventRepository.findById(eventId);

        return eventOptional.stream()
                .map(EventPageResponseDto::fromEntity)
                .collect(Collectors.toList());
    }

    public EventPageOrganizerResponseDto getOrganizer(Long eventId){
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        if(eventOptional.isPresent()){
          Event event = eventOptional.get();
          Organizer organizer = event.getOrganizer();
          return new EventPageOrganizerResponseDto(organizer);
        }
        else{
            throw new UserOrEventNotFoundException("Event or Organizer not found");
        }
    }

    public Event findEvent(Long eventId){

        Optional<Event> findEvent = eventRepository.findById(eventId);
        return findEvent.get();
    }

}
