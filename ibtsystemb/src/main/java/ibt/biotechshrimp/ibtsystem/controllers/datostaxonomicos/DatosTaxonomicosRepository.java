package ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos;

import ibt.biotechshrimp.ibtsystem.models.datostaxonomicos.DatosTaxonomicos;
import ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.dto.DatosTaxonomicosProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DatosTaxonomicosRepository extends PagingAndSortingRepository<DatosTaxonomicos, Long> {

    @Query("SELECT d FROM DatosTaxonomicos d JOIN d.taxonomia t WHERE t.nombre LIKE :searchTerm AND t.nivel = :nivel")
    Page<DatosTaxonomicos> findDatosTaxonomicosBySearch(@Param("searchTerm") String searchTerm, @Param("nivel") String nivel, Pageable pageable);

    @Query("SELECT dt FROM DatosTaxonomicos dt " +
            "JOIN dt.taxonomia t " +
            "JOIN dt.muestra m")
    Page<DatosTaxonomicos> findAll(Pageable pageable);

    @Query("SELECT dt FROM DatosTaxonomicos dt " +
            "JOIN dt.taxonomia t " +
            "JOIN dt.muestra m " +
            "WHERE t.nombre LIKE %:filter% AND t.nivel = :nivel")
    Page<DatosTaxonomicos> findDatosTaxonomicosByFilter(@Param("filter") String filter, @Param("nivel") String nivel, Pageable pageable);

    @Query("SELECT m.muestra AS muestra, t.nivel AS nivel, t.nombre As nombre, round(valor,3) AS valor " +
            "FROM DatosTaxonomicos d " +
            "JOIN d.taxonomia t " +
            "JOIN d.muestra m " +
            "WHERE t.nivel = :nivel")
    Page<DatosTaxonomicosProjection> findDatosTaxonomicosByNivel(@Param("nivel") String nivel, Pageable pageable);

    @Query("SELECT m.muestra AS muestra, t.nombre AS nombre, round(valor,3) AS valor " +
            "FROM DatosTaxonomicos d " +
            "JOIN d.taxonomia t " +
            "JOIN d.muestra m " +
            "WHERE t.nivel = :nivel AND t.nombre = :nombre")
    Page<DatosTaxonomicosProjection> findByNivelAndNombre(@Param("nivel") String nivel, @Param("nombre") String nombre, Pageable pageable);

    @Query("SELECT m.muestra AS muestra, t.nivel AS nivel, t.nombre As nombre, round(valor,2) AS valor " +
            "FROM DatosTaxonomicos d " +
            "JOIN d.taxonomia t " +
            "JOIN d.muestra m " +
            "WHERE t.nivel = :nivel and valor > 0.05")
    List<DatosTaxonomicosProjection> findDatosTaxonomicosByNivelGrafica(@Param("nivel") String nivel);

    @Query("SELECT m.muestra AS muestra, t.nombre AS nombre, d.valor AS valor " +
            "FROM DatosTaxonomicos d " +
            "JOIN d.taxonomia t " +
            "JOIN d.muestra m " +
            "WHERE t.nivel = :nivel AND t.nombre = :nombre")
    List<DatosTaxonomicosProjection> findByNivelAndNombreGrafica(@Param("nivel") String nivel, @Param("nombre") String nombre);

    @Query("SELECT d.muestra.anio, AVG(d.valor) FROM DatosTaxonomicos d JOIN d.taxonomia t WHERE t.nombre = :nombre GROUP BY d.muestra.anio")
    List<Object[]> findPromedioPorAnioByBacteria(@Param("nombre") String nombre);

    @Query("SELECT d.muestra.organo, AVG(d.valor) FROM DatosTaxonomicos d JOIN d.taxonomia t WHERE t.nombre = :nombre GROUP BY d.muestra.organo")
    List<Object[]> findPromedioPorOrganoByBacteria(@Param("nombre") String nombre);

    @Query("SELECT d.muestra.organo, d.muestra.anio, AVG(d.valor) FROM DatosTaxonomicos d JOIN d.taxonomia t WHERE t.nombre = :nombre " +
            "GROUP BY d.muestra.organo, d.muestra.anio")
    List<Object[]> findPromedioPorOrganoYAnioByBacteria(@Param("nombre") String nombre);

    // Prevalencia general (sin órgano específico)
    @Query("SELECT t.nivel AS nivel, t.nombre AS nombre, COUNT(m) AS prevalencia " +
            "FROM DatosTaxonomicos dt " +
            "JOIN dt.taxonomia t " +
            "JOIN dt.muestra m " +
            "WHERE t.nivel = :nivel AND dt.valor > 0 AND t.nombre = :bacteria " +
            "GROUP BY t.nombre, t.nivel " +
            "ORDER BY prevalencia DESC")
    List<Object[]> findPrevalenciaGeneral(@Param("nivel") String nivel, @Param("bacteria") String bacteria);

    @Query("SELECT m.organo AS organo, m.anio AS anio, COUNT(m) AS prevalencia " +
            "FROM DatosTaxonomicos dt " +
            "JOIN dt.taxonomia t " +
            "JOIN dt.muestra m " +
            "WHERE t.nivel = :nivel AND t.nombre = :bacteria AND dt.valor > 0 " +
            "GROUP BY m.organo, m.anio, t.nombre, t.nivel " +
            "ORDER BY m.organo, m.anio")
    List<Object[]> findPrevalenciaPorOrganoYAnio(@Param("nivel") String nivel, @Param("bacteria") String bacteria);

    @Query("SELECT m.organo AS organo, t.nivel AS nivel, t.nombre AS nombre, COUNT(m) AS prevalencia " +
            "FROM DatosTaxonomicos dt " +
            "JOIN dt.taxonomia t " +
            "JOIN dt.muestra m " +
            "WHERE t.nivel = :nivel AND dt.valor > 0 AND t.nombre = :bacteria " +
            "GROUP BY t.nombre, t.nivel, m.organo " +
            "ORDER BY prevalencia DESC")
    List<Object[]> findPrevalenciaPorOrgano(@Param("nivel") String nivel, @Param("bacteria") String bacteria);

}


