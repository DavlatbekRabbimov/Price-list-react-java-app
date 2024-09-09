package datatable.model.repo;

import datatable.model.entity.PriceList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PriceListRepo extends JpaRepository<PriceList, Long> {
    @Query("SELECT currency, SUM(totalPrice) AS total FROM PriceList GROUP BY currency")
    List<Object[]> getTotalByCurrency();
    @Query("SELECT p FROM PriceList p WHERE p.product = :product")
    List<PriceList> findByProduct(@Param("product") String product);
    @Query("SELECT p FROM PriceList p WHERE p.product = :product AND p.quality = :quality")
    List<PriceList> findByProductAndQuality(@Param("product") String product, @Param("quality") String quality);
    @Query("SELECT p FROM PriceList p WHERE p.product = :product AND p.quality = :quality AND p.currency = :currency")
    List<PriceList> findByAll(@Param("product") String product, @Param("quality") String quality, @Param("currency") String currency);
}
