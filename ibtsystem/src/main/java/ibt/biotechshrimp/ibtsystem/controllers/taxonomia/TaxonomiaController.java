package ibt.biotechshrimp.ibtsystem.controllers.taxonomia;

import ibt.biotechshrimp.ibtsystem.models.taxonomia.Taxonomia;
import ibt.biotechshrimp.ibtsystem.services.taxonomia.TaxonomiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/taxonomias")
public class TaxonomiaController {

    @Autowired
    private TaxonomiaService taxonomiaService;

    @GetMapping
    public List<Taxonomia> getAllTaxonomias() {
        return taxonomiaService.findAll();
    }

    @PostMapping
    public Taxonomia createTaxonomia(@RequestBody Taxonomia taxonomia) {
        return taxonomiaService.save(taxonomia);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Taxonomia> getTaxonomiaById(@PathVariable Integer id) {
        Taxonomia taxonomia = taxonomiaService.findById(id);
        if (taxonomia == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(taxonomia);
    }
}

