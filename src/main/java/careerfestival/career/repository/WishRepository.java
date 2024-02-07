package careerfestival.career.repository;

import careerfestival.career.domain.User;
import careerfestival.career.domain.mapping.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WishRepository extends JpaRepository<Wish, Long> {


    Optional<Wish> findByUserIdAndEventId(Long userId, Long eventId);
    List<Wish> findByUser_IdAndEvent_Id(Long user_id, Long event_id);

    List<Wish> findTop6ByUserOrderByCreatedAtDesc(User user);

}
