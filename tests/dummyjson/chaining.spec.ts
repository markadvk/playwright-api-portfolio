import { request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { test, expect} from '../../fixtures';
import { DummyJsonUsersApi } from '../../apis/dummyjson/usersApi';
import { BASE_URLS, ENDPOINTS } from '../../common/endpoints';
import { AUTH_DATA, USER_IDS } from '../../common/testData';
import { authHeader } from '../../common/headers';
import { STATUS_CODES } from '../../common/statusCodes';

test.describe('DummyJSON API Chaining Test - Auth + CRUD + Search', () => {
  let authToken: string;
  let usersApi: DummyJsonUsersApi;
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    // Create isolated API request context (not the { request } fixture)
    apiContext = await playwrightRequest.newContext();

    // Login
    const response = await apiContext.post(`${BASE_URLS.dummyjson}${ENDPOINTS.dummyjson.login}`, {
      data: AUTH_DATA.dummyjsonUser,
    });

    expect(response.status()).toBe(STATUS_CODES.ok);
    const body = await response.json();
    authToken = body.accessToken;

    // Initialize API client with this context and auth Token acquired
    usersApi = new DummyJsonUsersApi(apiContext, BASE_URLS.dummyjson);
  });

  test.afterAll(async () => {
    await apiContext.dispose(); // cleanup and close the context
  });

  test('@smoke API Chaining Flow', async () => {
    // 1. GET existing user
    const getResponse = await usersApi.getUser(USER_IDS.existing, authHeader(authToken));
    expect(getResponse.status()).toBe(STATUS_CODES.ok);
    const user = await getResponse.json();
    console.log(`1. Fetched User: ${user.firstName} ${user.lastName}`);

    // 2. UPDATE user
    const updateResponse = await usersApi.updateUser(
      USER_IDS.existing,
      {
        firstName: 'Chained',
        lastName: 'User',
        age: user.age + 1,
      },
      authHeader(authToken)
    );
    expect(updateResponse.status()).toBe(STATUS_CODES.ok);
    const updatedUser = await updateResponse.json();
    console.log(`2. Updated User: ${updatedUser.firstName} ${updatedUser.lastName}, Age: ${updatedUser.age}`);

    // 3. DELETE user
    const deleteResponse = await usersApi.deleteUser(USER_IDS.existing, authHeader(authToken));
    expect(deleteResponse.status()).toBe(STATUS_CODES.ok);
    const deletedBody = await deleteResponse.json();
    expect(deletedBody.isDeleted).toBe(true);
    expect(deletedBody.deletedOn).toBeTruthy();
    console.log(`3. Deleted User ID: ${USER_IDS.existing}`);

    // 4. SEARCH users
    const searchResponse = await usersApi.searchUsers('Emily', authHeader(authToken));
    expect(searchResponse.status()).toBe(200);
    const searchResults = await searchResponse.json();
    expect(Array.isArray(searchResults.users)).toBeTruthy();
    if (searchResults.users.length > 0) {
      console.log(`4. First search result: ${searchResults.users[0].firstName} ${searchResults.users[0].lastName}`);
    }
  });
});
