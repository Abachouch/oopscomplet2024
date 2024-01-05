/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onUpdateProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
  onDeleteProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateSearchQuery = /* GraphQL */ `subscription OnCreateSearchQuery(
  $filter: ModelSubscriptionSearchQueryFilterInput
) {
  onCreateSearchQuery(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSearchQuerySubscriptionVariables,
  APITypes.OnCreateSearchQuerySubscription
>;
export const onUpdateSearchQuery = /* GraphQL */ `subscription OnUpdateSearchQuery(
  $filter: ModelSubscriptionSearchQueryFilterInput
) {
  onUpdateSearchQuery(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSearchQuerySubscriptionVariables,
  APITypes.OnUpdateSearchQuerySubscription
>;
export const onDeleteSearchQuery = /* GraphQL */ `subscription OnDeleteSearchQuery(
  $filter: ModelSubscriptionSearchQueryFilterInput
) {
  onDeleteSearchQuery(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSearchQuerySubscriptionVariables,
  APITypes.OnDeleteSearchQuerySubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateClient = /* GraphQL */ `subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
  onCreateClient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClientSubscriptionVariables,
  APITypes.OnCreateClientSubscription
>;
export const onUpdateClient = /* GraphQL */ `subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
  onUpdateClient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientSubscriptionVariables,
  APITypes.OnUpdateClientSubscription
>;
export const onDeleteClient = /* GraphQL */ `subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
  onDeleteClient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientSubscriptionVariables,
  APITypes.OnDeleteClientSubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onCreateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onUpdateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onDeleteTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onCreateScraper = /* GraphQL */ `subscription OnCreateScraper($filter: ModelSubscriptionScraperFilterInput) {
  onCreateScraper(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScraperSubscriptionVariables,
  APITypes.OnCreateScraperSubscription
>;
export const onUpdateScraper = /* GraphQL */ `subscription OnUpdateScraper($filter: ModelSubscriptionScraperFilterInput) {
  onUpdateScraper(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScraperSubscriptionVariables,
  APITypes.OnUpdateScraperSubscription
>;
export const onDeleteScraper = /* GraphQL */ `subscription OnDeleteScraper($filter: ModelSubscriptionScraperFilterInput) {
  onDeleteScraper(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScraperSubscriptionVariables,
  APITypes.OnDeleteScraperSubscription
>;
