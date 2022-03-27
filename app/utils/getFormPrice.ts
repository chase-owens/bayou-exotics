export default function getFormPrice(value: FormDataEntryValue | null) {
  return !!value && !isNaN(+value) && +value > 0 ? +value : undefined;
}
