export type FieldMapperValue = string | string[];

export type FieldMapper<T extends string> = {
  [P in T]: FieldMapperValue;
}
