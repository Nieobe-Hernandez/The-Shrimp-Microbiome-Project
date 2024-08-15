package ibt.biotechshrimp.ibtsystem.models.datostaxonomicos;


import ibt.biotechshrimp.ibtsystem.models.muestras.Muestras;

import ibt.biotechshrimp.ibtsystem.models.taxonomia.Taxonomia;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "DatosTaxonomicos")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "DatosTaxonomicos")
public class DatosTaxonomicos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_datotaxonomico;

    @Column(name = "valor")
    private Double valor;

    @ManyToOne
    @JoinColumn(name = "muestra_id")
    private Muestras muestra;

    @ManyToOne
    @JoinColumn(name = "taxonomia_id")
    private Taxonomia taxonomia;
}
