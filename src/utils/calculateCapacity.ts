export const calculateCapacity = (IQP: number, IPP: number, C: number) => {
  const result = IQP / (C * IPP);

  return result;
};
