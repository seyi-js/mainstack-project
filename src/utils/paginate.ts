import APIQueryFeatures from './APIQueryFeatures';

export const paginate = async (
  query: any,
  queryString: Record<string, unknown>
) => {
  const queryFeature = new APIQueryFeatures(query, queryString);

  const count = await queryFeature.count();

  const result = await queryFeature
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .query.clone();

  return {
    count,
    result,
  };
};
