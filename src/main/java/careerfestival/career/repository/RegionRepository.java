package careerfestival.career.repository;

import careerfestival.career.domain.mapping.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {
    @Query(value = "SELECT * FROM region WHERE city = ?1 AND address_line = ?2", nativeQuery = true)
    Region findRegionByCityAndAddressLine(String city, String addressLine);

}