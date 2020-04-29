package pl.javahello.dietcalculator.report;

import java.sql.Date;
import java.util.List;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.javahello.dietcalculator.diet.Consumption;
import pl.javahello.dietcalculator.diet.ConsumptionDTO;
import pl.khuzzuk.remote.Adapter;

@AllArgsConstructor
@RestController
@RequestMapping("report")
public class ReportService {

  private ReportRepo reportRepo;
  private Adapter<Consumption, ConsumptionDTO> consumptionDTOAdapter;

  @Transactional
  @GetMapping("today")
  public List<ConsumptionDTO> getTodayConsumption() {
    Date today = new Date(System.currentTimeMillis());
    final List<Consumption> found = reportRepo.findAllByDate(today);
    return consumptionDTOAdapter.list(found);
  }
}
