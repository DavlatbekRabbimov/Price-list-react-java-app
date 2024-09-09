CREATE TABLE price_list (
                            id BIGINT AUTO_INCREMENT PRIMARY KEY,
                            product VARCHAR(255),
                            quality VARCHAR(255),
                            price DECIMAL(19, 4),
                            currency VARCHAR(255),
                            count DECIMAL(19, 4),
                            unit VARCHAR(255),
                            totalPrice DECIMAL(19, 4)
);