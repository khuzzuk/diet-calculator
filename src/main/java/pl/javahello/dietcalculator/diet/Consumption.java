package pl.javahello.dietcalculator.diet;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import pl.khuzzuk.remote.RemoteEntity;

@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Entity
@Table(schema = "diet")
@RemoteEntity
public class Consumption {

  @Id
  @SequenceGenerator(name = "consumption_seq_gen",
                     schema = "diet",
                     sequenceName = "consumption_id_seq",
                     allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "consumption_seq_gen")
  private Long id;
  private Date date = new Date(System.currentTimeMillis());
  @ManyToOne
  private @NotNull Product product;
  @ManyToOne
  private @NotNull Portion portion;
  @ManyToOne
  private Meal meal;
  private @Min(0) float amount;
}
