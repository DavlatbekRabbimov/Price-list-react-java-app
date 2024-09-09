package datatable.controller;

import datatable.model.entity.PriceList;
import datatable.service.PriceListService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Slf4j
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PriceListController {

    private final PriceListService service;

//-------------------------------------------- POST ------------------------------------------------------------------

    @PostMapping("/products")
    public ResponseEntity<PriceList> createdProduct(@RequestBody PriceList priceList) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.create(priceList));
        } catch (DataAccessException e) {
            log.error("Error: Items not saved by post-mapping!", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

//-----------------------------------------  PATH (Items) ------------------------------------------------------------
    @PatchMapping("/products/{id}")
    public PriceList updateItems(@PathVariable long id, @RequestBody Map<String, Object> fields) {
        PriceList priceList = service.findItems(id);
        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(PriceList.class, key);
            if (field != null){
                field.setAccessible(true);
                ReflectionUtils.setField(field, priceList, value);
            }
        });
        service.create(priceList);
        return priceList;
    }
//-------------------------------------------- GET (ALL) --------------------------------------------------------------

    @GetMapping("/products")
    public ResponseEntity<List<PriceList>> getAllProduct() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
        } catch (DataAccessException e) {
            log.error("Error: All items not found by get-mapping! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

//--------------------------------------------  GET (All currencies) -----------------------------------------------
    @GetMapping("/products/currency")
    public ResponseEntity<List<Object[]>> getTotalCurrency() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.getCurrency());
        } catch (DataAccessException e) {
            log.error("Error: Currencies not found by get-mapping! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

 //----------------------------------------------  Delete (Item) ---------------------------------------------------
    @DeleteMapping("/products/{id}")
    public ResponseEntity<PriceList> deleteProduct(@PathVariable long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.delete(id));
        } catch (DataAccessException e) {
            log.error("Error: Product not deleted by delete-mapping! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
//--------------------------------------------  SEARCH (Product) ----------------------------------------------------
    @GetMapping("/products/{product}")
    public ResponseEntity<List<PriceList>> getByProduct(@PathVariable("product") String product) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.searchByProduct(product));
        } catch (DataAccessException e) {
            log.error("Error: Product not found by searching! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
//--------------------------------------------  SEARCH (Product, Quality) ------------------------------------------

    @GetMapping("/products/{product}/{quality}")
    public ResponseEntity<List<PriceList>> getByProductAndQuality(
            @PathVariable("product") String product,
            @PathVariable("quality") String quality) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.searchByProductAndQuality(product, quality));
        } catch (DataAccessException e) {
            log.error("Error: Product or Quality not found by searching! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
//--------------------------------------------  SEARCH (Product, Quality, Currency) -------------------------------------
    @GetMapping("/products/{product}/{quality}/{currency}")
    public ResponseEntity<List<PriceList>> getByProductQualityAndCurrency(
            @PathVariable("product") String product,
            @PathVariable("quality") String quality,
            @PathVariable("currency") String currency) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.searchByAll(product, quality, currency));
        } catch (DataAccessException e) {
            log.error("Error: Product or Quality or Currency not found by searching! - ", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
