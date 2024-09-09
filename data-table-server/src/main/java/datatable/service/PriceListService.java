package datatable.service;

import datatable.exception.ResourceNotFoundException;
import datatable.model.entity.PriceList;
import datatable.model.repo.PriceListRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Slf4j
@Service
public class PriceListService {

    private PriceListRepo priceListRepo;

    //------------------------------------- POST --------------------------------------------------------------------------
    public PriceList create(PriceList priceList) {
        return priceListRepo.save(priceList);
    }

    //---------------------------------- PATH (Product) --------------------------------------------------------------------
    public PriceList findItems(long id){
        return priceListRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("PriceList", "id", id));
    }
    //---------------------------------- GET (All) --------------------------------------------------------------------------
    public List<PriceList> getAll() {
        return priceListRepo.findAll();
    }

    //---------------------------------- GET (currencies) -------------------------------------------------------------------
    public List<Object[]> getCurrency() {
        try {
            return priceListRepo.getTotalByCurrency();
        } catch (Exception e) {
            log.error("Error: Not found currencies by service - ", e);
            return null;
        }
    }
    //---------------------------------- DELETE (Item) ---------------------------------------------------------------------
    public PriceList delete(long id) {
        Optional<PriceList> opt = priceListRepo.findById(id);
        if (opt.isPresent()) {
            priceListRepo.deleteById(id);
            return opt.get();
        } else {
            log.error("Error: Not deleted product by service");
            return null;
        }
    }
    //---------------------------------- SEARCH (Product) ------------------------------------------------------------
    public List<PriceList> searchByProduct(String product) {
        try {
            return priceListRepo.findByProduct(product);
        } catch (Exception e) {
            log.error("Error: Not found product by service - ", e);
            return null;
        }
    }
    //--------------------------- SEARCH (Product and Quality) ---------------------------------------------------------
    public List<PriceList> searchByProductAndQuality(String product, String quality) {
        try {
            return priceListRepo.findByProductAndQuality(product, quality);
        } catch (Exception e) {
            log.error("Error: Not found product and quality by service - ", e);
            return null;
        }
    }
    //--------------------------- SEARCH (Product, Quality, Currency) ----------------------------------------------------
    public List<PriceList> searchByAll(String product, String quality, String currency) {
        try {
            return priceListRepo.findByAll(product, quality, currency);
        } catch (Exception e) {
            log.error("Error: Not found product or quality or currency by service - ", e);
            return null;
        }
    }

}
