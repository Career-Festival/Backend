package careerfestival.career.repository;

import careerfestival.career.domain.User;

import careerfestival.career.domain.enums.SocialType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);
    User findUserByEmail(String email);
}