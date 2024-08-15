package ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos;

import ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.dto.DatosTaxonomicosProjection;
import ibt.biotechshrimp.ibtsystem.models.datostaxonomicos.DatosTaxonomicos;
import ibt.biotechshrimp.ibtsystem.services.datostaxonomicos.DatosTaxonomicosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/datos-taxonomicos")
public class DatosTaxonomicosController {

    @Autowired
    private DatosTaxonomicosService datosTaxonomicosService;

    @GetMapping("/search")
    public ResponseEntity<Page<DatosTaxonomicos>> findDatosTaxonomicosBySearch(
            @RequestParam String searchTerm,
            @RequestParam String nivel,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "155") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(datosTaxonomicosService.searchDatosTaxonomicos(searchTerm, nivel, pageable));
    }

    @GetMapping("/all")
    public ResponseEntity<Page<DatosTaxonomicos>> findAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "198865") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(datosTaxonomicosService.findAll(pageable));
    }

    @GetMapping("/filter")
    public ResponseEntity<Page<DatosTaxonomicos>> findDatosTaxonomicosByFilter(
            @RequestParam String filter,
            @RequestParam String nivel,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "155") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(datosTaxonomicosService.findDatosTaxonomicosByFilter(filter, nivel, pageable));
    }

    @GetMapping("/nivel/{nivel}")
    public ResponseEntity<Page<DatosTaxonomicosProjection>> getDatosByNivel(
            @PathVariable String nivel,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4650") int size) {
        Page<DatosTaxonomicosProjection> datosPage = datosTaxonomicosService.getDatosByNivel(nivel, PageRequest.of(page, size));
        return ResponseEntity.ok(datosPage);
    }

    @GetMapping("/nivel/{nivel}/bacteria/{bacteria}")
    public ResponseEntity<Page<DatosTaxonomicosProjection>> getDatosByNivelAndBacteria(
            @PathVariable String nivel,
            @PathVariable String bacteria,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "155") int size) {
        Page<DatosTaxonomicosProjection> datosPage = datosTaxonomicosService.getDatosByNivelAndBacteria(nivel, bacteria, PageRequest.of(page, size));
        return ResponseEntity.ok(datosPage);
    }

    @GetMapping("/nivel/{nivel}/grafica")
    public ResponseEntity<List<DatosTaxonomicosProjection>> getDatosTaxonomicosByNivelGrafica(@PathVariable String nivel) {
        return ResponseEntity.ok(datosTaxonomicosService.getDatosTaxonomicosByNivelGrafica(nivel));
    }

    @GetMapping("/nivel/{nivel}/bacteria/{nombre}/grafica")
    public ResponseEntity<List<DatosTaxonomicosProjection>> getDatosTaxonomicosByNivelAndNombreGrafica(
            @PathVariable String nivel,
            @PathVariable String nombre) {
        return ResponseEntity.ok(datosTaxonomicosService.getDatosTaxonomicosByNivelAndNombreGrafica(nivel, nombre));
    }

    @GetMapping("/promedio/anio/{nombre}")
    public ResponseEntity<List<Object[]>> findPromedioPorAnioByBacteria(@PathVariable String nombre) {
        String decodedName = URLDecoder.decode(nombre, StandardCharsets.UTF_8);
        return ResponseEntity.ok(datosTaxonomicosService.findPromedioPorAnioByBacteria(decodedName));
    }

    @GetMapping("/promedio/organo/{nombre}")
    public ResponseEntity<List<Object[]>> findPromedioPorOrganoByBacteria(@PathVariable String nombre) {
        String decodedName = URLDecoder.decode(nombre, StandardCharsets.UTF_8);
        return ResponseEntity.ok(datosTaxonomicosService.findPromedioPorOrganoByBacteria(decodedName));
    }

    @GetMapping("/promedio/organo-anio/{nombre}")
    public ResponseEntity<List<Object[]>> findPromedioPorOrganoYAnioByBacteria(@PathVariable String nombre) {
        String decodedName = URLDecoder.decode(nombre, StandardCharsets.UTF_8);
        return ResponseEntity.ok(datosTaxonomicosService.findPromedioPorOrganoYAnioByBacteria(decodedName));
    }

    @GetMapping("/prevalencia/{bacteria}")
    public ResponseEntity<List<Object[]>> getPrevalenciaGeneral(
            @PathVariable String bacteria,
            @RequestParam String nivel) {
        return ResponseEntity.ok(datosTaxonomicosService.getPrevalenciaGeneral(nivel, bacteria));
    }

    @GetMapping("/prevalencia/organo-anio/{bacteria}")
    public ResponseEntity<List<Object[]>> getPrevalenciaPorOrganoYAnio(
            @PathVariable String bacteria,
            @RequestParam String nivel) {
        return ResponseEntity.ok(datosTaxonomicosService.getPrevalenciaPorOrganoYAnio(nivel, bacteria));
    }

    @GetMapping("/prevalencia/organo/{bacteria}")
    public ResponseEntity<List<Object[]>> getPrevalenciaPorOrgano(
            @PathVariable String bacteria,
            @RequestParam String nivel) {
        return ResponseEntity.ok(datosTaxonomicosService.getPrevalenciaPorOrgano(nivel, bacteria));
    }
}
