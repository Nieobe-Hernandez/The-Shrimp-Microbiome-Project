package ibt.biotechshrimp.ibtsystem.controllers.muestras;

import ibt.biotechshrimp.ibtsystem.models.muestras.Muestras;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuestrasRepository extends JpaRepository<Muestras, Long> {

}
