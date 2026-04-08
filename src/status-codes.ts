/**
 * HTTP Response status codes.
 *
 * @see {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml IANA Registry}
 * Last Updated Date in IANA Registry: 2025-09-15
 * If registry has been updated since the date above, this file may be out of date.
 */

/** The server has received the request headers and the client should proceed to send the request body. Used to check if the server is willing to accept the request before the body is transmitted.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.2.1 RFC 9110, Section 15.2.1}
 */
export const HttpResponseCode_Continue = 100;

/** The server is switching to the protocol specified in the Upgrade request header. Used for protocol upgrades such as WebSocket.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.2.2 RFC 9110, Section 15.2.2}
 */
export const HttpResponseCode_SwitchingProtocols = 101;

/** The server has received and is processing the request, but no response is available yet. Prevents the client from timing out during long-running WebDAV operations.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2518#section-10.1 RFC 2518, Section 10.1}
 */
export const HttpResponseCode_Processing = 102;

/** Allows the server to send preliminary headers before the final response. Primarily used to preload resources while the server is still preparing the full response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8297#section-2 RFC 8297, Section 2}
 */
export const HttpResponseCode_EarlyHints = 103;

/** The request was successful. The response body contains the requested resource or the result of the action.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.1 RFC 9110, Section 15.3.1}
 */
export const HttpResponseCode_Ok = 200;

/** The request was successful and a new resource was created as a result. The Location header typically points to the newly created resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.2 RFC 9110, Section 15.3.2}
 */
export const HttpResponseCode_Created = 201;

/** The request has been accepted for processing but processing has not been completed. Used for asynchronous operations where the outcome is not yet known.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.3 RFC 9110, Section 15.3.3}
 */
export const HttpResponseCode_Accepted = 202;

/** The request was successful but the returned metadata may come from a third-party copy rather than the origin server. Used by transforming proxies.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.4 RFC 9110, Section 15.3.4}
 */
export const HttpResponseCode_NonAuthoritativeInformation = 203;

/** The server successfully processed the request and is not returning any content. Commonly used for DELETE or PUT operations that produce no response body.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.5 RFC 9110, Section 15.3.5}
 */
export const HttpResponseCode_NoContent = 204;

/** The server has processed the request and asks the client to reset the document view. Used to clear form inputs after submission.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.6 RFC 9110, Section 15.3.6}
 */
export const HttpResponseCode_ResetContent = 205;

/** The server is delivering only part of the resource due to a range request. Used in resumable downloads and HTTP-based video streaming.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.3.7 RFC 9110, Section 15.3.7}
 */
export const HttpResponseCode_PartialContent = 206;

/** Provides status for multiple independent operations in a single response. Used in WebDAV to convey results about multiple resources simultaneously.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-11.1 RFC 4918, Section 11.1}
 */
export const HttpResponseCode_MultiStatus = 207;

/** Used inside a DAV:propstat response to avoid redundantly enumerating members of multiple bindings to the same collection. Prevents duplicate data in WebDAV responses.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5842#section-7.1 RFC 5842, Section 7.1}
 */
export const HttpResponseCode_AlreadyReported = 208;

/** The server has fulfilled a GET request and the response is the result of one or more instance-manipulations applied to the current instance. Used in HTTP delta encoding.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1 RFC 3229, Section 10.4.1}
 */
export const HttpResponseCode_ImUsed = 226;

/** The request has more than one possible response and the user or user agent should choose one. The server may indicate a preferred choice in the response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.1 RFC 9110, Section 15.4.1}
 */
export const HttpResponseCode_MultipleChoices = 300;

/** The requested resource has been permanently moved to a new URL given in the Location header. Future requests should use the new URL.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.2 RFC 9110, Section 15.4.2}
 */
export const HttpResponseCode_MovedPermanently = 301;

/** The requested resource temporarily resides under a different URL. The client should continue to use the original URL for future requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.3 RFC 9110, Section 15.4.3}
 */
export const HttpResponseCode_Found = 302;

/** The server is redirecting to a different resource, typically after a POST. The client should use GET to retrieve the resource at the Location header URI.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.4 RFC 9110, Section 15.4.4}
 */
export const HttpResponseCode_SeeOther = 303;

/** The resource has not been modified since the version specified in the request's conditional headers. The client can use its cached copy without re-downloading.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.5 RFC 9110, Section 15.4.5}
 */
export const HttpResponseCode_NotModified = 304;

/** The requested resource must be accessed through the proxy given in the Location header. Deprecated due to security concerns and poor implementation support.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.6 RFC 9110, Section 15.4.6}
 */
export const HttpResponseCode_UseProxy = 305;

/** No longer used; this code is reserved. Originally proposed as "Switch Proxy" but was never standardised and is now permanently unused.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.7 RFC 9110, Section 15.4.7}
 */
export const HttpResponseCode_SwitchProxy = 306;

/** The request should be repeated at a different URL, preserving the original HTTP method. The client should continue to use the original URL for future requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.8 RFC 9110, Section 15.4.8}
 */
export const HttpResponseCode_TemporaryRedirect = 307;

/** The requested resource has been permanently moved to a new URL and the original HTTP method must be preserved on the redirect. Future requests should use the new URL.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.4.9 RFC 9110, Section 15.4.9}
 */
export const HttpResponseCode_PermanentRedirect = 308;

/** The server cannot process the request due to a client error such as malformed syntax or invalid parameters. The client should not retry without modifications.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.1 RFC 9110, Section 15.5.1}
 */
export const HttpResponseCode_BadRequest = 400;

/** Authentication is required and has not been provided or is invalid. The client should retry with appropriate credentials in the Authorization header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.2 RFC 9110, Section 15.5.2}
 */
export const HttpResponseCode_Unauthorized = 401;

/** Reserved for future use; originally intended for digital payment schemes. Not widely used in practice and has no standard semantics.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.3 RFC 9110, Section 15.5.3}
 */
export const HttpResponseCode_PaymentRequired = 402;

/** The server understood the request but refuses to authorize it. Unlike 401, re-authenticating will make no difference.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.4 RFC 9110, Section 15.5.4}
 */
export const HttpResponseCode_Forbidden = 403;

/** The server cannot find the requested resource. The URL may be incorrect or the resource may have been removed.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.5 RFC 9110, Section 15.5.5}
 */
export const HttpResponseCode_NotFound = 404;

/** The HTTP method is not supported for the requested resource. The Allow response header lists the methods that are supported.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.6 RFC 9110, Section 15.5.6}
 */
export const HttpResponseCode_MethodNotAllowed = 405;

/** The server cannot produce a response matching the content characteristics requested by the client's Accept headers. The client may retry with different Accept headers.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.7 RFC 9110, Section 15.5.7}
 */
export const HttpResponseCode_NotAcceptable = 406;

/** The client must authenticate with the proxy before the request can be forwarded. Similar to 401, but authentication is required by an intermediary proxy.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.8 RFC 9110, Section 15.5.8}
 */
export const HttpResponseCode_ProxyAuthenticationRequired = 407;

/** The server timed out waiting for the client to complete the request. The client may repeat the request without modifications.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.9 RFC 9110, Section 15.5.9}
 */
export const HttpResponseCode_RequestTimeout = 408;

/** The request conflicts with the current state of the target resource. Common in version-control scenarios or when concurrent modifications are detected.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.10 RFC 9110, Section 15.5.10}
 */
export const HttpResponseCode_Conflict = 409;

/** The requested resource is permanently no longer available and no forwarding address is known. Differs from 404 in that the removal is intentional and permanent.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.11 RFC 9110, Section 15.5.11}
 */
export const HttpResponseCode_Gone = 410;

/** The server refuses to accept the request without a defined Content-Length header. The client must send the size of the request body before the server will process it.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.12 RFC 9110, Section 15.5.12}
 */
export const HttpResponseCode_LengthRequired = 411;

/** One or more preconditions in the request headers evaluated to false on the server. Used in conditional requests to prevent unintended modifications to a resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.13 RFC 9110, Section 15.5.13}
 */
export const HttpResponseCode_PreconditionFailed = 412;

/** The request body is larger than the limits defined by the server. The server may close the connection or return a Retry-After header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.14 RFC 9110, Section 15.5.14}
 */
export const HttpResponseCode_PayloadTooLarge = 413;

/** The request URI is longer than the server is willing to interpret. Often caused by excessive query parameters that should instead be sent in the request body.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.15 RFC 9110, Section 15.5.15}
 */
export const HttpResponseCode_UriTooLong = 414;

/** The server refuses the request because the payload format is not supported by the target resource. The client should use a content type listed in Accept or Accept-Encoding.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.16 RFC 9110, Section 15.5.16}
 */
export const HttpResponseCode_UnsupportedMediaType = 415;

/** The byte range specified in the Range header cannot be satisfied by the server. The range falls outside the bounds of the resource's current size.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.17 RFC 9110, Section 15.5.17}
 */
export const HttpResponseCode_RangeNotSatisfiable = 416;

/** The server cannot meet the requirements of the Expect request header. Used when the server is unable to fulfill an Expect: 100-continue expectation.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.18 RFC 9110, Section 15.5.18}
 */
export const HttpResponseCode_ExpectationFailed = 417;

/** Originally an April Fools' joke: any attempt to brew coffee with a teapot should result in this error. Now permanently reserved as unused in RFC 9110.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.19 RFC 9110, Section 15.5.19}
 */
export const HttpResponseCode_IAmATeapot = 418;

/** The request was directed at a server that is not able to produce a response for the requested URI. Can occur when a connection is reused to a host that does not serve the requested authority.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.20 RFC 9110, Section 15.5.20}
 */
export const HttpResponseCode_MisdirectedRequest = 421;

/** The server understands the content type but cannot process the contained instructions. Often returned when request body validation fails (e.g., invalid JSON structure).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.21 RFC 9110, Section 15.5.21}
 */
export const HttpResponseCode_UnprocessableEntity = 422;

/** The source or destination resource is locked and cannot be modified. Used in WebDAV to indicate that a resource is exclusively locked by another client.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-11.3 RFC 4918, Section 11.3}
 */
export const HttpResponseCode_Locked = 423;

/** The request failed because it depended on another request that also failed. Used in WebDAV batch operations where one failure causes a cascade.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-11.4 RFC 4918, Section 11.4}
 */
export const HttpResponseCode_FailedDependency = 424;

/** The server is unwilling to risk processing a request that might be replayed. Used to reject early data sent in TLS 1.3 0-RTT connections.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8470#section-5.2 RFC 8470, Section 5.2}
 */
export const HttpResponseCode_TooEarly = 425;

/** The server refuses to process the request using the current protocol but will accept it after a protocol upgrade. The Upgrade header specifies the required protocol.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.5.22 RFC 9110, Section 15.5.22}
 */
export const HttpResponseCode_UpgradeRequired = 426;

/** The server requires the request to be conditional to prevent lost-update problems. The client should re-fetch the resource and include the appropriate If-Match or If-Unmodified-Since header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6585#section-3 RFC 6585, Section 3}
 */
export const HttpResponseCode_PreconditionRequired = 428;

/** The client has sent too many requests in a given amount of time (rate limiting). The Retry-After header may indicate how long to wait before making a new request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6585#section-4 RFC 6585, Section 4}
 */
export const HttpResponseCode_TooManyRequests = 429;

/** The server is unwilling to process the request because its header fields are too large. Either a single field or the total set of headers exceeds the server's configured limit.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6585#section-5 RFC 6585, Section 5}
 */
export const HttpResponseCode_RequestHeaderFieldsTooLarge = 431;

/** The server is denying access to the resource as a consequence of a legal demand. The response body should describe the legal obstacle, if possible.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7725#section-3 RFC 7725, Section 3}
 */
export const HttpResponseCode_UnavailableForLegalReasons = 451;

/** The server encountered an unexpected condition that prevented it from fulfilling the request. A generic catch-all for unhandled server-side errors.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.1 RFC 9110, Section 15.6.1}
 */
export const HttpResponseCode_InternalServerError = 500;

/** The server does not support the functionality required to fulfill the request. Often used when the server does not recognise the HTTP method.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.2 RFC 9110, Section 15.6.2}
 */
export const HttpResponseCode_NotImplemented = 501;

/** The server, acting as a gateway or proxy, received an invalid response from an upstream server. The upstream server is likely misconfigured or temporarily unavailable.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.3 RFC 9110, Section 15.6.3}
 */
export const HttpResponseCode_BadGateway = 502;

/** The server is temporarily unable to handle the request, often due to overload or scheduled maintenance. The Retry-After header may indicate when the service will be restored.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.4 RFC 9110, Section 15.6.4}
 */
export const HttpResponseCode_ServiceUnavailable = 503;

/** The server, acting as a gateway or proxy, did not receive a timely response from an upstream server. The upstream server is taking too long to respond.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.5 RFC 9110, Section 15.6.5}
 */
export const HttpResponseCode_GatewayTimeout = 504;

/** The server does not support the HTTP protocol version used in the request. The server should include a description of why the version is not supported.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15.6.6 RFC 9110, Section 15.6.6}
 */
export const HttpResponseCode_HttpVersionNotSupported = 505;

/** The server has an internal configuration error where the chosen variant resource is itself configured to engage in transparent content negotiation, resulting in a circular reference.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295#section-8.1 RFC 2295, Section 8.1}
 */
export const HttpResponseCode_VariantAlsoNegotiates = 506;

/** The server is unable to store the representation needed to complete the request. Used in WebDAV when the server runs out of storage space.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-11.5 RFC 4918, Section 11.5}
 */
export const HttpResponseCode_InsufficientStorage = 507;

/** The server terminated an operation because it encountered an infinite loop while processing the request. Used in WebDAV with Depth: infinity requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5842#section-7.2 RFC 5842, Section 7.2}
 */
export const HttpResponseCode_LoopDetected = 508;

/** @deprecated Obsoleted. The policy for accessing the resource requires further extensions that the server does not support. The server should send back the information necessary for the client to issue an extended request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2774#section-7 RFC 2774, Section 7}
 */
export const HttpResponseCode_NotExtended = 510;

/** The client needs to authenticate to gain network access. Used by captive portals to signal that network-level authentication is required before internet access is granted.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6585#section-6 RFC 6585, Section 6}
 */
export const HttpResponseCode_NetworkAuthenticationRequired = 511;
