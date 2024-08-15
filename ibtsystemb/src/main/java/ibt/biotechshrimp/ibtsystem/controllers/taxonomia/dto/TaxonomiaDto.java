package ibt.biotechshrimp.ibtsystem.controllers.taxonomia.dto;

import lombok.*;

@Value
@NoArgsConstructor(force = true)
@Getter
@Setter
@AllArgsConstructor
public class TaxonomiaDto {
    Integer id_taxonomia;
    String nivel;
    String nombre;
}
