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
  public Report getTodayConsumption() {
    Date today = new Date(System.currentTimeMillis());
    final List<Consumption> found = reportRepo.findAllByDate(today);

    int calories = 0;
    float proteins = 0F;
    float fat = 0F;
    float carbohydrate = 0F;
    float dietaryFiber = 0F;
    float salt = 0F;
    float carbon = 0F;

    for (Consumption consumption : found) {
      calories += consumption.getProduct().getCalories() *
                  consumption.getAmount() *
                  consumption.getPortion().getWeight() / 100;
      proteins += consumption.getProduct().getProteins() *
                  consumption.getAmount() *
                  consumption.getPortion().getWeight() / 100;
      fat += consumption.getProduct().getFat() *
             consumption.getAmount() *
             consumption.getPortion().getWeight() / 100;
      carbohydrate += consumption.getProduct().getCarbohydrate() *
                      consumption.getAmount() *
                      consumption.getPortion().getWeight() / 100;
      dietaryFiber += consumption.getProduct().getDietaryFiber() *
                      consumption.getAmount() *
                      consumption.getPortion().getWeight() / 100;
      salt += consumption.getProduct().getSalt() *
              consumption.getAmount() *
              consumption.getPortion().getWeight() / 100;
      carbon += consumption.getProduct().getCarbon() *
                consumption.getAmount() *
                consumption.getPortion().getWeight() / 100;
    }

    return Report.builder()
                 .calories(calories)
                 .proteins(proteins)
                 .fat(fat)
                 .carbohydrate(carbohydrate)
                 .dietaryFiber(dietaryFiber)
                 .salt(salt)
                 .carbon(carbon)
                 .build();
  }
}
