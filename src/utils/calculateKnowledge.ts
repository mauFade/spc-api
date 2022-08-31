export const calculateKnowledge = (IQP: number, IPP: number, CPK: number) => {
  const result = IQP / (CPK * IPP);

  return result;
};
