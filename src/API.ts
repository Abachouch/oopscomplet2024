/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  name?: string | null,
  location?: string | null,
  age?: number | null,
  gender?: string | null,
  avatarUrl?: string | null,
  screenShots?: Array< string | null > | null,
  lastActive?: string | null,
  sourceApp: string,
  isBusted?: boolean | null,
  dateBusted?: string | null,
  data?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  screenShots?: ModelStringInput | null,
  lastActive?: ModelStringInput | null,
  sourceApp?: ModelStringInput | null,
  isBusted?: ModelBooleanInput | null,
  dateBusted?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name?: string | null,
  location?: string | null,
  age?: number | null,
  gender?: string | null,
  avatarUrl?: string | null,
  screenShots?: Array< string | null > | null,
  lastActive?: string | null,
  sourceApp: string,
  isBusted?: boolean | null,
  dateBusted?: string | null,
  data?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  age?: number | null,
  gender?: string | null,
  avatarUrl?: string | null,
  screenShots?: Array< string | null > | null,
  lastActive?: string | null,
  sourceApp?: string | null,
  isBusted?: boolean | null,
  dateBusted?: string | null,
  data?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateSearchQueryInput = {
  id?: string | null,
  name: string,
  age: number,
  location: string,
  gender: string,
  images?: Array< string | null > | null,
  payedSites?: Array< string | null > | null,
  dateSearch: string,
  clientSessionID: string,
  searchQueryResultTenderId?: string | null,
  searchQueryResultBumbleId?: string | null,
  searchQueryResultHingeId?: string | null,
};

export type ModelSearchQueryConditionInput = {
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  location?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  images?: ModelStringInput | null,
  payedSites?: ModelStringInput | null,
  dateSearch?: ModelStringInput | null,
  clientSessionID?: ModelStringInput | null,
  and?: Array< ModelSearchQueryConditionInput | null > | null,
  or?: Array< ModelSearchQueryConditionInput | null > | null,
  not?: ModelSearchQueryConditionInput | null,
  searchQueryResultTenderId?: ModelIDInput | null,
  searchQueryResultBumbleId?: ModelIDInput | null,
  searchQueryResultHingeId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SearchQuery = {
  __typename: "SearchQuery",
  id: string,
  name: string,
  age: number,
  location: string,
  gender: string,
  images?: Array< string | null > | null,
  payedSites?: Array< string | null > | null,
  resultTender?: Profile | null,
  resultBumble?: Profile | null,
  resultHinge?: Profile | null,
  dateSearch: string,
  clientSessionID: string,
  createdAt: string,
  updatedAt: string,
  searchQueryResultTenderId?: string | null,
  searchQueryResultBumbleId?: string | null,
  searchQueryResultHingeId?: string | null,
};

export type UpdateSearchQueryInput = {
  id: string,
  name?: string | null,
  age?: number | null,
  location?: string | null,
  gender?: string | null,
  images?: Array< string | null > | null,
  payedSites?: Array< string | null > | null,
  dateSearch?: string | null,
  clientSessionID?: string | null,
  searchQueryResultTenderId?: string | null,
  searchQueryResultBumbleId?: string | null,
  searchQueryResultHingeId?: string | null,
};

export type DeleteSearchQueryInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  clientID: string,
  query: string,
  clientOrdersId?: string | null,
  orderTransactionId?: string | null,
};

export type ModelOrderConditionInput = {
  clientID?: ModelIDInput | null,
  query?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  clientOrdersId?: ModelIDInput | null,
  orderTransactionId?: ModelIDInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  clientID: string,
  client?: Client | null,
  transaction?: Transaction | null,
  query: string,
  createdAt: string,
  updatedAt: string,
  clientOrdersId?: string | null,
  orderTransactionId?: string | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  email: string,
  location: string,
  orders?: ModelOrderConnection | null,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  clientID: string,
  orderID: string,
  client?: Client | null,
  order?: Order | null,
  status: string,
  createdAt: string,
  updatedAt: string,
  clientTransactionsId?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  clientID?: string | null,
  query?: string | null,
  clientOrdersId?: string | null,
  orderTransactionId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  email: string,
  location: string,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  location?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  clientID: string,
  orderID: string,
  status: string,
  clientTransactionsId?: string | null,
};

export type ModelTransactionConditionInput = {
  clientID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  clientTransactionsId?: ModelIDInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  clientID?: string | null,
  orderID?: string | null,
  status?: string | null,
  clientTransactionsId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateScraperInput = {
  id?: string | null,
  name: string,
  email: string,
  gender: string,
  age: number,
  height?: number | null,
  phone?: string | null,
  location: string,
};

export type ModelScraperConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelIntInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelScraperConditionInput | null > | null,
  or?: Array< ModelScraperConditionInput | null > | null,
  not?: ModelScraperConditionInput | null,
};

export type Scraper = {
  __typename: "Scraper",
  id: string,
  name: string,
  email: string,
  gender: string,
  age: number,
  height?: number | null,
  phone?: string | null,
  location: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScraperInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  gender?: string | null,
  age?: number | null,
  height?: number | null,
  phone?: string | null,
  location?: string | null,
};

export type DeleteScraperInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  screenShots?: ModelStringInput | null,
  lastActive?: ModelStringInput | null,
  sourceApp?: ModelStringInput | null,
  isBusted?: ModelBooleanInput | null,
  dateBusted?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelSearchQueryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  location?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  images?: ModelStringInput | null,
  payedSites?: ModelStringInput | null,
  dateSearch?: ModelStringInput | null,
  clientSessionID?: ModelStringInput | null,
  and?: Array< ModelSearchQueryFilterInput | null > | null,
  or?: Array< ModelSearchQueryFilterInput | null > | null,
  not?: ModelSearchQueryFilterInput | null,
  searchQueryResultTenderId?: ModelIDInput | null,
  searchQueryResultBumbleId?: ModelIDInput | null,
  searchQueryResultHingeId?: ModelIDInput | null,
};

export type ModelSearchQueryConnection = {
  __typename: "ModelSearchQueryConnection",
  items:  Array<SearchQuery | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  query?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  clientOrdersId?: ModelIDInput | null,
  orderTransactionId?: ModelIDInput | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
  clientTransactionsId?: ModelIDInput | null,
};

export type ModelScraperFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  age?: ModelIntInput | null,
  height?: ModelIntInput | null,
  phone?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelScraperFilterInput | null > | null,
  or?: Array< ModelScraperFilterInput | null > | null,
  not?: ModelScraperFilterInput | null,
};

export type ModelScraperConnection = {
  __typename: "ModelScraperConnection",
  items:  Array<Scraper | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  screenShots?: ModelSubscriptionStringInput | null,
  lastActive?: ModelSubscriptionStringInput | null,
  sourceApp?: ModelSubscriptionStringInput | null,
  isBusted?: ModelSubscriptionBooleanInput | null,
  dateBusted?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSearchQueryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  location?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  payedSites?: ModelSubscriptionStringInput | null,
  dateSearch?: ModelSubscriptionStringInput | null,
  clientSessionID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSearchQueryFilterInput | null > | null,
  or?: Array< ModelSubscriptionSearchQueryFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientID?: ModelSubscriptionIDInput | null,
  query?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientFilterInput | null > | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientID?: ModelSubscriptionIDInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type ModelSubscriptionScraperFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  phone?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScraperFilterInput | null > | null,
  or?: Array< ModelSubscriptionScraperFilterInput | null > | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSearchQueryMutationVariables = {
  input: CreateSearchQueryInput,
  condition?: ModelSearchQueryConditionInput | null,
};

export type CreateSearchQueryMutation = {
  createSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type UpdateSearchQueryMutationVariables = {
  input: UpdateSearchQueryInput,
  condition?: ModelSearchQueryConditionInput | null,
};

export type UpdateSearchQueryMutation = {
  updateSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type DeleteSearchQueryMutationVariables = {
  input: DeleteSearchQueryInput,
  condition?: ModelSearchQueryConditionInput | null,
};

export type DeleteSearchQueryMutation = {
  deleteSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type CreateScraperMutationVariables = {
  input: CreateScraperInput,
  condition?: ModelScraperConditionInput | null,
};

export type CreateScraperMutation = {
  createScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScraperMutationVariables = {
  input: UpdateScraperInput,
  condition?: ModelScraperConditionInput | null,
};

export type UpdateScraperMutation = {
  updateScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScraperMutationVariables = {
  input: DeleteScraperInput,
  condition?: ModelScraperConditionInput | null,
};

export type DeleteScraperMutation = {
  deleteScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  id?: string | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSearchQueryQueryVariables = {
  id: string,
};

export type GetSearchQueryQuery = {
  getSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type ListSearchQueriesQueryVariables = {
  id?: string | null,
  filter?: ModelSearchQueryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSearchQueriesQuery = {
  listSearchQueries?:  {
    __typename: "ModelSearchQueryConnection",
    items:  Array< {
      __typename: "SearchQuery",
      id: string,
      name: string,
      age: number,
      location: string,
      gender: string,
      images?: Array< string | null > | null,
      payedSites?: Array< string | null > | null,
      dateSearch: string,
      clientSessionID: string,
      createdAt: string,
      updatedAt: string,
      searchQueryResultTenderId?: string | null,
      searchQueryResultBumbleId?: string | null,
      searchQueryResultHingeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  id?: string | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  id?: string | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  id?: string | null,
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScraperQueryVariables = {
  id: string,
};

export type GetScraperQuery = {
  getScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScrapersQueryVariables = {
  id?: string | null,
  filter?: ModelScraperFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListScrapersQuery = {
  listScrapers?:  {
    __typename: "ModelScraperConnection",
    items:  Array< {
      __typename: "Scraper",
      id: string,
      name: string,
      email: string,
      gender: string,
      age: number,
      height?: number | null,
      phone?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    location?: string | null,
    age?: number | null,
    gender?: string | null,
    avatarUrl?: string | null,
    screenShots?: Array< string | null > | null,
    lastActive?: string | null,
    sourceApp: string,
    isBusted?: boolean | null,
    dateBusted?: string | null,
    data?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSearchQuerySubscriptionVariables = {
  filter?: ModelSubscriptionSearchQueryFilterInput | null,
};

export type OnCreateSearchQuerySubscription = {
  onCreateSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type OnUpdateSearchQuerySubscriptionVariables = {
  filter?: ModelSubscriptionSearchQueryFilterInput | null,
};

export type OnUpdateSearchQuerySubscription = {
  onUpdateSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type OnDeleteSearchQuerySubscriptionVariables = {
  filter?: ModelSubscriptionSearchQueryFilterInput | null,
};

export type OnDeleteSearchQuerySubscription = {
  onDeleteSearchQuery?:  {
    __typename: "SearchQuery",
    id: string,
    name: string,
    age: number,
    location: string,
    gender: string,
    images?: Array< string | null > | null,
    payedSites?: Array< string | null > | null,
    resultTender?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultBumble?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    resultHinge?:  {
      __typename: "Profile",
      id: string,
      name?: string | null,
      location?: string | null,
      age?: number | null,
      gender?: string | null,
      avatarUrl?: string | null,
      screenShots?: Array< string | null > | null,
      lastActive?: string | null,
      sourceApp: string,
      isBusted?: boolean | null,
      dateBusted?: string | null,
      data?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateSearch: string,
    clientSessionID: string,
    createdAt: string,
    updatedAt: string,
    searchQueryResultTenderId?: string | null,
    searchQueryResultBumbleId?: string | null,
    searchQueryResultHingeId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    transaction?:  {
      __typename: "Transaction",
      id: string,
      clientID: string,
      orderID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      clientTransactionsId?: string | null,
    } | null,
    query: string,
    createdAt: string,
    updatedAt: string,
    clientOrdersId?: string | null,
    orderTransactionId?: string | null,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    email: string,
    location: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    clientID: string,
    orderID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      email: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      clientID: string,
      query: string,
      createdAt: string,
      updatedAt: string,
      clientOrdersId?: string | null,
      orderTransactionId?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    clientTransactionsId?: string | null,
  } | null,
};

export type OnCreateScraperSubscriptionVariables = {
  filter?: ModelSubscriptionScraperFilterInput | null,
};

export type OnCreateScraperSubscription = {
  onCreateScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScraperSubscriptionVariables = {
  filter?: ModelSubscriptionScraperFilterInput | null,
};

export type OnUpdateScraperSubscription = {
  onUpdateScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScraperSubscriptionVariables = {
  filter?: ModelSubscriptionScraperFilterInput | null,
};

export type OnDeleteScraperSubscription = {
  onDeleteScraper?:  {
    __typename: "Scraper",
    id: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    height?: number | null,
    phone?: string | null,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
