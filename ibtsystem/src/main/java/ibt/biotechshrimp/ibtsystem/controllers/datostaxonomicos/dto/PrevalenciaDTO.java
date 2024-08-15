package ibt.biotechshrimp.ibtsystem.controllers.datostaxonomicos.dto;

import lombok.*;

@Value
@NoArgsConstructor(force = true)
@Getter
@Setter
@AllArgsConstructor
public class PrevalenciaDTO {
    private String organo;
    private double prevalencia;

    public String setOrgano(String organo) {
        return organo;
    }

    public Double setPrevalencia(double prevalencia) {
        return prevalencia;
    }
}

