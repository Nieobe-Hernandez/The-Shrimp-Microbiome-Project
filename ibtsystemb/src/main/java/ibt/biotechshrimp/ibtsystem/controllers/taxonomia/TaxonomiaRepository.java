package ibt.biotechshrimp.ibtsystem.controllers.taxonomia;

import ibt.biotechshrimp.ibtsystem.models.taxonomia.Taxonomia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxonomiaRepository extends JpaRepository<Taxonomia, Integer> {
    Taxonomia findByNombreAndNivel(String nombre, String nivel);
}
