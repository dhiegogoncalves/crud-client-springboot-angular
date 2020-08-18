package com.project.backend.exceptions;

public class DefaultException extends RuntimeException {

    private static final long serialVersionUID = 9147866114511909882L;

    public DefaultException(String message) {
        super(message);
    }
}