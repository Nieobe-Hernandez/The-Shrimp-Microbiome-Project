package ibt.biotechshrimp.ibtsystem.models.taxonomia;

import ibt.biotechshrimp.ibtsystem.models.datostaxonomicos.DatosTaxonomicos;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "Taxonomia")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Taxonomia")
public class Taxonomia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nivel")
    private String nivel;

    @Column(name = "nombre")
    private String nombre;

    @OneToMany(mappedBy = "taxonomia", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DatosTaxonomicos> datosTaxonomicos = new ArrayList<>();
}

