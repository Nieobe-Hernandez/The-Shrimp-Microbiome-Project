package ibt.biotechshrimp.ibtsystem.models.muestras;

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

@Entity
@Table(name = "muestras", uniqueConstraints = @UniqueConstraint(columnNames = {"anio", "muestra"}))
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Muestras {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String anio;

    @Column(nullable = false)
    private String organo;

    @Column(nullable = false)
    private String muestra;

    @OneToMany(mappedBy = "muestra", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DatosTaxonomicos> datosTaxonomicos = new ArrayList<>();
}
