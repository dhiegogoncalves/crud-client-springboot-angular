package com.project.backend.util;

import java.math.BigDecimal;

import org.springframework.stereotype.Component;

public class BigDecimalUtil {

    public static BigDecimal convert(String value) {
        if (value == null) {
            return null;
        }

        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }

}