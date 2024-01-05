/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
    id
    name
    location
    age
    gender
    avatarUrl
    screenShots
    lastActive
    sourceApp
    isBusted
    dateBusted
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
    id
    name
    location
    age
    gender
    avatarUrl
    screenShots
    lastActive
    sourceApp
    isBusted
    dateBusted
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
    id
    name
    location
    age
    gender
    avatarUrl
    screenShots
    lastActive
    sourceApp
    isBusted
    dateBusted
    data
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createSearchQuery = /* GraphQL */ `mutation CreateSearchQuery(
  $input: CreateSearchQueryInput!
  $condition: ModelSearchQueryConditionInput
) {
  createSearchQuery(input: $input, condition: $condition) {
    id
    name
    age
    location
    gender
    images
    payedSites
    resultTender {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultBumble {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultHinge {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    dateSearch
    clientSessionID
    createdAt
    updatedAt
    searchQueryResultTenderId
    searchQueryResultBumbleId
    searchQueryResultHingeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSearchQueryMutationVariables,
  APITypes.CreateSearchQueryMutation
>;
export const updateSearchQuery = /* GraphQL */ `mutation UpdateSearchQuery(
  $input: UpdateSearchQueryInput!
  $condition: ModelSearchQueryConditionInput
) {
  updateSearchQuery(input: $input, condition: $condition) {
    id
    name
    age
    location
    gender
    images
    payedSites
    resultTender {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultBumble {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultHinge {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    dateSearch
    clientSessionID
    createdAt
    updatedAt
    searchQueryResultTenderId
    searchQueryResultBumbleId
    searchQueryResultHingeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSearchQueryMutationVariables,
  APITypes.UpdateSearchQueryMutation
>;
export const deleteSearchQuery = /* GraphQL */ `mutation DeleteSearchQuery(
  $input: DeleteSearchQueryInput!
  $condition: ModelSearchQueryConditionInput
) {
  deleteSearchQuery(input: $input, condition: $condition) {
    id
    name
    age
    location
    gender
    images
    payedSites
    resultTender {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultBumble {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    resultHinge {
      id
      name
      location
      age
      gender
      avatarUrl
      screenShots
      lastActive
      sourceApp
      isBusted
      dateBusted
      data
      createdAt
      updatedAt
      __typename
    }
    dateSearch
    clientSessionID
    createdAt
    updatedAt
    searchQueryResultTenderId
    searchQueryResultBumbleId
    searchQueryResultHingeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSearchQueryMutationVariables,
  APITypes.DeleteSearchQueryMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    transaction {
      id
      clientID
      orderID
      status
      createdAt
      updatedAt
      clientTransactionsId
      __typename
    }
    query
    createdAt
    updatedAt
    clientOrdersId
    orderTransactionId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    transaction {
      id
      clientID
      orderID
      status
      createdAt
      updatedAt
      clientTransactionsId
      __typename
    }
    query
    createdAt
    updatedAt
    clientOrdersId
    orderTransactionId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    transaction {
      id
      clientID
      orderID
      status
      createdAt
      updatedAt
      clientTransactionsId
      __typename
    }
    query
    createdAt
    updatedAt
    clientOrdersId
    orderTransactionId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createClient = /* GraphQL */ `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
    id
    name
    email
    location
    orders {
      nextToken
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientMutationVariables,
  APITypes.CreateClientMutation
>;
export const updateClient = /* GraphQL */ `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
    id
    name
    email
    location
    orders {
      nextToken
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientMutationVariables,
  APITypes.UpdateClientMutation
>;
export const deleteClient = /* GraphQL */ `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
    id
    name
    email
    location
    orders {
      nextToken
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientMutationVariables,
  APITypes.DeleteClientMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
    id
    clientID
    orderID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    order {
      id
      clientID
      query
      createdAt
      updatedAt
      clientOrdersId
      orderTransactionId
      __typename
    }
    status
    createdAt
    updatedAt
    clientTransactionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
    id
    clientID
    orderID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    order {
      id
      clientID
      query
      createdAt
      updatedAt
      clientOrdersId
      orderTransactionId
      __typename
    }
    status
    createdAt
    updatedAt
    clientTransactionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
    id
    clientID
    orderID
    client {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    order {
      id
      clientID
      query
      createdAt
      updatedAt
      clientOrdersId
      orderTransactionId
      __typename
    }
    status
    createdAt
    updatedAt
    clientTransactionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const createScraper = /* GraphQL */ `mutation CreateScraper(
  $input: CreateScraperInput!
  $condition: ModelScraperConditionInput
) {
  createScraper(input: $input, condition: $condition) {
    id
    name
    email
    gender
    age
    height
    phone
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScraperMutationVariables,
  APITypes.CreateScraperMutation
>;
export const updateScraper = /* GraphQL */ `mutation UpdateScraper(
  $input: UpdateScraperInput!
  $condition: ModelScraperConditionInput
) {
  updateScraper(input: $input, condition: $condition) {
    id
    name
    email
    gender
    age
    height
    phone
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScraperMutationVariables,
  APITypes.UpdateScraperMutation
>;
export const deleteScraper = /* GraphQL */ `mutation DeleteScraper(
  $input: DeleteScraperInput!
  $condition: ModelScraperConditionInput
) {
  deleteScraper(input: $input, condition: $condition) {
    id
    name
    email
    gender
    age
    height
    phone
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScraperMutationVariables,
  APITypes.DeleteScraperMutation
>;
