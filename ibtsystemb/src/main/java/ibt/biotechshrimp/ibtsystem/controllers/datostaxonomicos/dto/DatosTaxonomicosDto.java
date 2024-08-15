package ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.dto;

import lombok.*;

@Value
@NoArgsConstructor(force = true)
@Getter
@Setter
@AllArgsConstructor
public class DatosTaxonomicosDto {
    private Long muestraId;
    private String taxonomiaNombre;
    private Double valor;
}

