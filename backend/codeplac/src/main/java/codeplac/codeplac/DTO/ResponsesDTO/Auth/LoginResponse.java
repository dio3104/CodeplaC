package codeplac.codeplac.DTO.ResponsesDTO.Auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {
    private String matricula;
    private String token;
}