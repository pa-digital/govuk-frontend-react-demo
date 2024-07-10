export enum AddressLookupMode {
  Auto,
  Manual,
}

export interface IAddressLookupForm {
  lookupAddress: string;
}

export interface IAddressManualForm {
  addressLine1: string;
  addressLine2?: string;
  town: string;
  county?: string;
  postCode?: string;
}

export interface IAddressRequest {
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postCode: string;
}

export const mapLookupToRequest = (
  formData: IAddressLookupForm
): IAddressRequest => {
  var elements = formData.lookupAddress.split(",");
  if (elements.length === 5) {
    const mappedLookup: IAddressRequest = {
      addressLine1: elements[0],
      addressLine2: elements[1],
      town: elements[2],
      county: elements[3],
      postCode: elements[4],
    };
    return mappedLookup;
  }
  const mappedLookup: IAddressRequest = {
    addressLine1: elements[0],
    addressLine2: "",
    town: elements[1],
    county: elements[2],
    postCode: elements[3],
  };
  return mappedLookup;
};

export const mapFormToRequest = (
  formData: IAddressManualForm
): IAddressRequest => {
  const manualMap: IAddressRequest = {
    addressLine1: formData.addressLine1 || "",
    addressLine2: formData.addressLine2 || "",
    town: formData.town || "",
    county: formData.county || "",
    postCode: formData.postCode || "",
  };

  return manualMap;
};
