package pl.javahello.dietcalculator.diet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;
import org.hibernate.validator.constraints.Length;
import pl.khuzzuk.remote.RemoteEntity;

@Getter
@Setter
@EqualsAndHashCode(of = "name")
@Entity
@Table(schema = "diet")
@RemoteEntity
public class Portion {

  @Id
  @SequenceGenerator(name = "portion_seq_gen",
                     schema = "diet",
                     sequenceName = "portion_id_seq",
                     allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "portion_seq_gen")
  private Long id;
  @NaturalId
  private @Length(min = 3, max = 100) String name;
  private float weight;
}
