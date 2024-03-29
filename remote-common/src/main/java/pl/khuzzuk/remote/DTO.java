package pl.khuzzuk.remote;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.SOURCE)
public @interface DTO {

  @Target(ElementType.FIELD)
  @Retention(RetentionPolicy.SOURCE)
  @interface Exclude {}
}
