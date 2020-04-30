package pl.javahello.dietcalculator.report;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Report {
  private int calories;
  private float proteins;
  private float fat;
  private float carbohydrate;
  private float dietaryFiber;
  private float salt;
  private float carbon;
}
