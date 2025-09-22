export function findEnumValueHelper<T extends Record<string, string | number>>(
  value: string,
  enumObj: T
): T[keyof T] | undefined {
  const normalized = value.toLowerCase();

  for (const key of Object.keys(enumObj)) {
    const enumValue = enumObj[key];

    if (
      key.toLowerCase() === normalized ||
      String(enumValue).toLowerCase() === normalized
    ) {
      return enumValue as T[keyof T];
    }
  }

  return undefined;
}
