import {AppAuthError, AUTHORIZATION_RESPONSE_HANDLE_KEY, AuthorizationServiceConfiguration,
  BasicQueryStringUtils, JQueryRequestor, LocalStorageBackend, QueryStringUtils, 
  Requestor, StorageBackend, TokenResponse} from '@openid/appauth';
import {UserInfoRequest} from './user_info_request';
import {UserInfoError, UserInfoErrorJson, UserInfoResponse, UserInfoResponseJson} from './user_info_response';

/**
 * Defines the interface which is capable of handling an user info request
 * using various methods (iframe / popup / different process etc.).
 */
export interface UserInfoRequestHandler {
  /**
   * Makes an UserInfo request.
   */
  performUserInfoRequest(
      configuration: AuthorizationServiceConfiguration,
      request?: UserInfoRequest): Promise<UserInfoResponse>;
}

/**
 * The default user info request handler.
 */
export class BaseUserInfoRequestHandler implements UserInfoRequestHandler {
  public readonly requestor: Requestor;
  public readonly utils: QueryStringUtils

  constructor(public readonly storageBackend: StorageBackend = new LocalStorageBackend()) {
    this.requestor = new JQueryRequestor();
    this.utils = new BasicQueryStringUtils();
    this.storageBackend = storageBackend;
  }

  private isUserInfoResponse(response: UserInfoResponseJson|
                             UserInfoErrorJson): response is UserInfoResponseJson {
    return (response as UserInfoErrorJson).error === undefined;
  }

  performUserInfoRequest(
      configuration: AuthorizationServiceConfiguration,
      request?: UserInfoRequest): Promise<UserInfoResponse> {
    return this.storageBackend.getItem(AUTHORIZATION_RESPONSE_HANDLE_KEY).then(result => {
      var tokenResponseJson = JSON.parse(result!);
      var tokenResponse = TokenResponse.fromJson(tokenResponseJson);

      let userInfoResponse = this.requestor.xhr<UserInfoResponseJson|UserInfoErrorJson>({
        url: configuration.userInfoEndpoint,
        method: 'POST',
        dataType: 'json',
        crossDomain: true,
        headers: {'Authorization': 'Bearer ' + tokenResponse.accessToken}
      });

      return userInfoResponse.then(response => {
        if (this.isUserInfoResponse(response)) {
          return UserInfoResponse.fromJson(response);
        } else {
          return Promise.reject<UserInfoResponse>(
              new AppAuthError(response.error, UserInfoError.fromJson(response)));
        }
      });
    });
  }
}
