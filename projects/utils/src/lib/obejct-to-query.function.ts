export function ObjectToQuery(objectModel: any) {
  let queryModel = {};

  for (const property in objectModel) {
    if (objectModel[property]) {
      queryModel[property] = objectModel[property];
    }
  }

  return queryModel;
}
