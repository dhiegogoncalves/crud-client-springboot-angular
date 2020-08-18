package com.project.backend.utils;

import java.math.BigDecimal;

public class BigDecimalUtil {

    private BigDecimalUtil() {
        throw new IllegalStateException("Utility class");
    }

    public static BigDecimal convert(String value) {
        if (value == null) {
            return null;
        }

        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }

}