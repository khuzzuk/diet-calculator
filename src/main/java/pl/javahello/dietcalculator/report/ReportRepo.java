package pl.javahello.dietcalculator.report;

import java.sql.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.javahello.dietcalculator.diet.Consumption;

@Repository
public interface ReportRepo extends JpaRepository<Consumption, Long> {
  List<Consumption> findAllByDate(Date date);
}
