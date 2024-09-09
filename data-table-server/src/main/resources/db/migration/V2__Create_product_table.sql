CREATE TRIGGER before_insert_update_on_table
    BEFORE INSERT ON price_list
    FOR EACH ROW
    SET NEW.totalPrice = NEW.price * NEW.count;

CREATE TRIGGER before_update_on_table
    BEFORE UPDATE ON price_list
    FOR EACH ROW
    SET NEW.totalPrice = NEW.price * NEW.count;