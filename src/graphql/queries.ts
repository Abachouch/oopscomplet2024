/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $id: ID
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProfiles(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getSearchQuery = /* GraphQL */ `query GetSearchQuery($id: ID!) {
  getSearchQuery(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSearchQueryQueryVariables,
  APITypes.GetSearchQueryQuery
>;
export const listSearchQueries = /* GraphQL */ `query ListSearchQueries(
  $id: ID
  $filter: ModelSearchQueryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSearchQueries(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      age
      location
      gender
      images
      payedSites
      dateSearch
      clientSessionID
      createdAt
      updatedAt
      searchQueryResultTenderId
      searchQueryResultBumbleId
      searchQueryResultHingeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSearchQueriesQueryVariables,
  APITypes.ListSearchQueriesQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $id: ID
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      clientID
      query
      createdAt
      updatedAt
      clientOrdersId
      orderTransactionId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getClient = /* GraphQL */ `query GetClient($id: ID!) {
  getClient(id: $id) {
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
` as GeneratedQuery<APITypes.GetClientQueryVariables, APITypes.GetClientQuery>;
export const listClients = /* GraphQL */ `query ListClients(
  $id: ID
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClients(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      email
      location
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsQueryVariables,
  APITypes.ListClientsQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $id: ID
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTransactions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      clientID
      orderID
      status
      createdAt
      updatedAt
      clientTransactionsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const getScraper = /* GraphQL */ `query GetScraper($id: ID!) {
  getScraper(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetScraperQueryVariables,
  APITypes.GetScraperQuery
>;
export const listScrapers = /* GraphQL */ `query ListScrapers(
  $id: ID
  $filter: ModelScraperFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listScrapers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScrapersQueryVariables,
  APITypes.ListScrapersQuery
>;
