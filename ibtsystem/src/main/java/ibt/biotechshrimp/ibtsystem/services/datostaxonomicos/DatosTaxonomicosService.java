package ibt.biotechshrimp.ibtsystem.services.datostaxonomicos;

import ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.dto.DatosTaxonomicosProjection;
import ibt.biotechshrimp.ibtsystem.models.datostaxonomicos.DatosTaxonomicos;
import ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.DatosTaxonomicosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DatosTaxonomicosService {

    private final DatosTaxonomicosRepository datosTaxonomicosRepository;

    public Page<DatosTaxonomicos> findAll(Pageable pageable) {
        return datosTaxonomicosRepository.findAll(pageable);
    }

    public Page<DatosTaxonomicos> searchDatosTaxonomicos(String searchTerm, String nivel, Pageable pageable) {
        return datosTaxonomicosRepository.findDatosTaxonomicosBySearch(searchTerm, nivel, pageable);
    }

    public Page<DatosTaxonomicos> findDatosTaxonomicosByFilter(String filter, String nivel, Pageable pageable) {
        return datosTaxonomicosRepository.findDatosTaxonomicosByFilter(filter, nivel, pageable);
    }

    public Page<DatosTaxonomicosProjection> getDatosByNivel(String nivel, Pageable pageable) {
        return datosTaxonomicosRepository.findDatosTaxonomicosByNivel(nivel, pageable);
    }

    public Page<DatosTaxonomicosProjection> getDatosByNivelAndBacteria(String nivel, String bacteria, Pageable pageable) {
        return datosTaxonomicosRepository.findByNivelAndNombre(nivel, bacteria, pageable);
    }

    public List<DatosTaxonomicosProjection> getDatosTaxonomicosByNivelGrafica(String nivel) {
        return datosTaxonomicosRepository.findDatosTaxonomicosByNivelGrafica(nivel);
    }

    public List<DatosTaxonomicosProjection> getDatosTaxonomicosByNivelAndNombreGrafica(String nivel, String nombre) {
        return datosTaxonomicosRepository.findByNivelAndNombreGrafica(nivel, nombre);
    }

    public List<Object[]> findPromedioPorAnioByBacteria(String nombre) {
        return datosTaxonomicosRepository.findPromedioPorAnioByBacteria(nombre);
    }

    public List<Object[]> findPromedioPorOrganoByBacteria(String nombre) {
        return datosTaxonomicosRepository.findPromedioPorOrganoByBacteria(nombre);
    }

    public List<Object[]> findPromedioPorOrganoYAnioByBacteria(String nombre) {
        return datosTaxonomicosRepository.findPromedioPorOrganoYAnioByBacteria(nombre);
    }

    public List<Object[]> getPrevalenciaPorOrgano(String nivel, String bacteria) {
        return datosTaxonomicosRepository.findPrevalenciaPorOrgano(nivel, bacteria);
    }

    public List<Object[]> getPrevalenciaGeneral(String nivel, String bacteria) {
        return datosTaxonomicosRepository.findPrevalenciaGeneral(nivel, bacteria);
    }

    public List<Object[]> getPrevalenciaPorOrganoYAnio(String nivel, String bacteria) {
        return datosTaxonomicosRepository.findPrevalenciaPorOrganoYAnio(nivel, bacteria);
    }

}
