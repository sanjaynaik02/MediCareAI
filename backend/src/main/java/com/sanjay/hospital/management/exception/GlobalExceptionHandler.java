package com.sanjay.hospital.management.exception;

import com.sanjay.hospital.management.dto.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
// Represents one invalid field.
import org.springframework.web.bind.MethodArgumentNotValidException;
// This exception is thrown when validation on an argument annotated with @Valid + @Requestbody fails. It contains details about the validation errors.
import org.springframework.web.bind.annotation.ControllerAdvice;
// Spring registers it as a global exception handler during application startup.
import org.springframework.web.bind.annotation.ExceptionHandler; 
// This annotation marks methods that should handle specific exception types.

import java.util.Map;
import java.util.HashMap;
// We'll store all validation errors here.

@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        
        for (FieldError error : exception.getBindingResult().getFieldErrors()) {
            errors.put(
                // put populates the map with the field name as the key and the error message as the value.
                error.getField(), error.getDefaultMessage());
        }

        ErrorResponse errorResponse = new ErrorResponse();

        errorResponse.setMessage("Validation failed");
        errorResponse.setStatus("BAD_REQUEST");
        errorResponse.setErrors(errors);

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(errorResponse);
    }
}
