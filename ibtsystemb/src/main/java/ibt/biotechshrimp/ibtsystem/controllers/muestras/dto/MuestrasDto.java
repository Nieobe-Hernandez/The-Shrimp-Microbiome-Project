package ibt.biotechshrimp.ibtsystem.controllers.muestras.dto;

import lombok.*;

@Value
@NoArgsConstructor(force = true)
@Getter
@Setter
@AllArgsConstructor
public class MuestrasDto {
    Integer id_muestras;
    String anio;
    String organo;
    String muestra;
}
