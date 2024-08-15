package ibt.biotechshrimp.ibtsystem.services.taxonomia;

import ibt.biotechshrimp.ibtsystem.controllers.taxonomia.TaxonomiaRepository;
import ibt.biotechshrimp.ibtsystem.models.taxonomia.Taxonomia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaxonomiaService {

    @Autowired
    private TaxonomiaRepository taxonomiaRepository;

    public List<Taxonomia> findAll() {
        return taxonomiaRepository.findAll();
    }

    public Taxonomia save(Taxonomia taxonomia) {
        return taxonomiaRepository.save(taxonomia);
    }

    public Taxonomia findById(Integer id) {
        return taxonomiaRepository.findById(id).orElse(null);
    }
}

