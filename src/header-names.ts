/**
 * HTTP header field names.
 *
 * @see {@link https://www.iana.org/assignments/http-fields/http-fields.xhtml IANA HTTP Field Name Registry}
 * Last Updated Date in IANA Registry: 2026-03-06
 * If registry has been updated since the date above, this file may be out of date.
 * 
 * Note: Provisional Headers are included in this list for completeness, but may be subject to change or removal as they are not yet standardized. These are clearly marked with "PROVISIONAL HEADER" in the comments and should be used with caution in production environments.
 */

/** Indicates which instance-manipulation operations were applied to the content, used with delta encoding.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3229 RFC 3229}
 */
export const HttpHeader_AIM = "A-IM";

/** Informs the server about the media types the client can process in the response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.1 RFC 9110, Section 12.5.1}
 */
export const HttpHeader_Accept = "Accept";

/** Used in the HTCPCP protocol to indicate acceptable coffee additions (e.g., milk, sugar).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2324 RFC 2324}
 */
export const HttpHeader_AcceptAdditions = "Accept-Additions";

/** Server advertisement of which client hints (user-agent details) it wants to receive in subsequent requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8942#section-3.1 RFC 8942, Section 3.1}
 */
export const HttpHeader_AcceptCH = "Accept-CH";

/** Requested datetime for a Memento (archived/historical) version of a resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7089 RFC 7089}
 */
export const HttpHeader_AcceptDatetime = "Accept-Datetime";

/** Acceptable content-codings (e.g., gzip, br, deflate) the client can decode in the response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.3 RFC 9110, Section 12.5.3}
 */
export const HttpHeader_AcceptEncoding = "Accept-Encoding";

/** Used in transparent content negotiation to specify feature preferences for the response variant.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295 RFC 2295}
 */
export const HttpHeader_AcceptFeatures = "Accept-Features";

/** Preferred natural language(s) for the response content.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.4 RFC 9110, Section 12.5.4}
 */
export const HttpHeader_AcceptLanguage = "Accept-Language";

/** Advertises the patch document formats supported by the server for the target resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5789 RFC 5789}
 */
export const HttpHeader_AcceptPatch = "Accept-Patch";

/** Advertises the media types the server accepts for POST requests to the target resource.
 * @see {@link https://www.w3.org/TR/ldp/#header-accept-post Linked Data Platform 1.0}
 */
export const HttpHeader_AcceptPost = "Accept-Post";

/** Acceptable query formats the server supports for the target resource.
 * @see {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-safe-method-w-body-14 draft-ietf-httpbis-safe-method-w-body}
 */
export const HttpHeader_AcceptQuery = "Accept-Query";

/** Indicates whether the server supports range requests and which units are accepted (e.g., bytes).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-14.3 RFC 9110, Section 14.3}
 */
export const HttpHeader_AcceptRanges = "Accept-Ranges";

/** Indicates acceptable HTTP message signature parameters the server will accept on signed requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9421#section-5.1 RFC 9421, Section 5.1}
 */
export const HttpHeader_AcceptSignature = "Accept-Signature";

/** Indicates whether the response to a CORS request can be exposed when credentials (cookies, auth) are included.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-allow-credentials Fetch Standard}
 */
export const HttpHeader_AccessControlAllowCredentials = "Access-Control-Allow-Credentials";

/** Specifies which request headers are allowed in a CORS request.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-allow-headers Fetch Standard}
 */
export const HttpHeader_AccessControlAllowHeaders = "Access-Control-Allow-Headers";

/** Specifies which HTTP methods are allowed when accessing a resource via CORS.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-allow-methods Fetch Standard}
 */
export const HttpHeader_AccessControlAllowMethods = "Access-Control-Allow-Methods";

/** Specifies the origin(s) that are allowed to access the resource via CORS.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-allow-origin Fetch Standard}
 */
export const HttpHeader_AccessControlAllowOrigin = "Access-Control-Allow-Origin";

/** Lists response headers that browsers are allowed to access in a CORS response from JavaScript.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-expose-headers Fetch Standard}
 */
export const HttpHeader_AccessControlExposeHeaders = "Access-Control-Expose-Headers";

/** Specifies how long (in seconds) a CORS preflight response can be cached.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-max-age Fetch Standard}
 */
export const HttpHeader_AccessControlMaxAge = "Access-Control-Max-Age";

/** Used in a CORS preflight request to indicate which headers will be sent in the actual request.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-request-headers Fetch Standard}
 */
export const HttpHeader_AccessControlRequestHeaders = "Access-Control-Request-Headers";

/** Used in a CORS preflight request to indicate which method will be used in the actual request.
 * @see {@link https://fetch.spec.whatwg.org/#http-access-control-request-method Fetch Standard}
 */
export const HttpHeader_AccessControlRequestMethod = "Access-Control-Request-Method";

/** Number of seconds the object has been in a proxy cache, indicating how stale the cached response is.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9111#section-5.1 RFC 9111, Section 5.1}
 */
export const HttpHeader_Age = "Age";

/** Lists the HTTP methods supported by the target resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.2.1 RFC 9110, Section 10.2.1}
 */
export const HttpHeader_Allow = "Allow";

/** Specifies the application-layer protocol to use when establishing a CONNECT tunnel.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7639#section-2 RFC 7639, Section 2}
 */
export const HttpHeader_ALPN = "ALPN";

/** Advertises alternative services for the origin, allowing clients to connect via different protocols or hosts.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7838 RFC 7838}
 */
export const HttpHeader_AltSvc = "Alt-Svc";

/** Identifies the alternative service currently in use by the client.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7838 RFC 7838}
 */
export const HttpHeader_AltUsed = "Alt-Used";

/** Lists available response variants for transparent content negotiation.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295 RFC 2295}
 */
export const HttpHeader_Alternates = "Alternates";

/** Requests that the operation be applied to the redirect source resource rather than the redirect reference.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4437 RFC 4437}
 */
export const HttpHeader_ApplyToRedirectRef = "Apply-To-Redirect-Ref";

/** Defines authentication policy for non-interactive HTTP clients, indicating required or optional auth schemes.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8053#section-4 RFC 8053, Section 4}
 */
export const HttpHeader_AuthenticationControl = "Authentication-Control";

/** Carries additional authentication data after a successful authentication exchange.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.6.3 RFC 9110, Section 11.6.3}
 */
export const HttpHeader_AuthenticationInfo = "Authentication-Info";

/** Contains credentials to authenticate the client with the server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.6.2 RFC 9110, Section 11.6.2}
 */
export const HttpHeader_Authorization = "Authorization";

/** Indicates that the client has a compression dictionary available for use with this resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9842#section-2.2 RFC 9842, Section 2.2}
 */
export const HttpHeader_AvailableDictionary = "Available-Dictionary";

/** Directives for caching mechanisms in both requests and responses.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9111#section-5.2 RFC 9111, Section 5.2}
 */
export const HttpHeader_CacheControl = "Cache-Control";

/** Instructs caches to invalidate all responses belonging to the specified cache group.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9875 RFC 9875}
 */
export const HttpHeader_CacheGroupInvalidation = "Cache-Group-Invalidation";

/** Associates a response with named cache groups, enabling targeted group invalidation.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9875 RFC 9875}
 */
export const HttpHeader_CacheGroups = "Cache-Groups";

/** Conveys information about how a cache handled the request, including hits, misses, and errors.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9211 RFC 9211}
 */
export const HttpHeader_CacheStatus = "Cache-Status";

/** Identifies a managed calendar attachment by its server-assigned ID.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8607#section-5.1 RFC 8607, Section 5.1}
 */
export const HttpHeader_CalManagedID = "Cal-Managed-ID";

/** Specifies which IANA timezone data the CalDAV server supports.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7809#section-7.1 RFC 7809, Section 7.1}
 */
export const HttpHeader_CalDAVTimezones = "CalDAV-Timezones";

/** Indicates that the HTTP/2 or HTTP/3 connection is using the Capsule Protocol for HTTP datagrams.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9297 RFC 9297}
 */
export const HttpHeader_CapsuleProtocol = "Capsule-Protocol";

/** Cache directives targeted specifically at CDN caches, distinct from general Cache-Control directives.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9213 RFC 9213}
 */
export const HttpHeader_CDNCacheControl = "CDN-Cache-Control";

/** Detects and prevents routing loops introduced by CDNs when forwarding requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8586 RFC 8586}
 */
export const HttpHeader_CDNLoop = "CDN-Loop";

/** Indicates the expiration time of the TLS certificate for ACME certificate management.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8739#section-3.3 RFC 8739, Section 3.3}
 */
export const HttpHeader_CertNotAfter = "Cert-Not-After";

/** Indicates the activation time of the TLS certificate for ACME certificate management.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8739#section-3.3 RFC 8739, Section 3.3}
 */
export const HttpHeader_CertNotBefore = "Cert-Not-Before";

/** Instructs the browser to clear stored cookies, storage, and cache for the current origin.
 * @see {@link https://www.w3.org/TR/clear-site-data/ W3C Clear Site Data}
 */
export const HttpHeader_ClearSiteData = "Clear-Site-Data";

/** Contains the TLS client certificate forwarded by an intermediary proxy to the origin server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9440#section-2 RFC 9440, Section 2}
 */
export const HttpHeader_ClientCert = "Client-Cert";

/** Contains the TLS client certificate chain forwarded by an intermediary proxy to the origin server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9440#section-2 RFC 9440, Section 2}
 */
export const HttpHeader_ClientCertChain = "Client-Cert-Chain";

/** Signals that the sender will close the connection after the current request-response exchange.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9112#section-9.6 RFC 9112, Section 9.6}
 */
export const HttpHeader_Close = "Close";

/** Exports authentication binding material for use in concealed authentication.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9729 RFC 9729}
 */
export const HttpHeader_ConcealedAuthExport = "Concealed-Auth-Export";

/** Controls options for the current connection and lists hop-by-hop headers.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-7.6.1 RFC 9110, Section 7.6.1}
 */
export const HttpHeader_Connection = "Connection";

/** Contains a digest of the message content (the octets in the body of the message).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9530#section-2 RFC 9530, Section 2}
 */
export const HttpHeader_ContentDigest = "Content-Digest";

/** Indicates whether content should be displayed inline or as an attachment, and provides a suggested filename.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6266 RFC 6266}
 */
export const HttpHeader_ContentDisposition = "Content-Disposition";

/** Lists the encodings applied to the content (e.g., gzip, br), in the order they were applied.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.4 RFC 9110, Section 8.4}
 */
export const HttpHeader_ContentEncoding = "Content-Encoding";

/** Describes the natural language(s) of the content.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.5 RFC 9110, Section 8.5}
 */
export const HttpHeader_ContentLanguage = "Content-Language";

/** The size of the message body in bytes sent to the recipient.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.6 RFC 9110, Section 8.6}
 */
export const HttpHeader_ContentLength = "Content-Length";

/** An alternate URL for the enclosed content, indicating its canonical location.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.7 RFC 9110, Section 8.7}
 */
export const HttpHeader_ContentLocation = "Content-Location";

/** Indicates the byte range of the partial content in relation to the full representation.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-14.4 RFC 9110, Section 14.4}
 */
export const HttpHeader_ContentRange = "Content-Range";

/** Defines a content security policy restricting which resources the browser may load for the page.
 * @see {@link https://www.w3.org/TR/CSP3/ W3C Content Security Policy Level 3}
 */
export const HttpHeader_ContentSecurityPolicy = "Content-Security-Policy";

/** Same as Content-Security-Policy, but violations are only reported, not enforced.
 * @see {@link https://www.w3.org/TR/CSP3/ W3C Content Security Policy Level 3}
 */
export const HttpHeader_ContentSecurityPolicyReportOnly = "Content-Security-Policy-Report-Only";

/** Indicates the media type of the resource or message body.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.3 RFC 9110, Section 8.3}
 */
export const HttpHeader_ContentType = "Content-Type";

/** Contains stored HTTP cookies previously set by the server via Set-Cookie.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6265 RFC 6265}
 */
export const HttpHeader_Cookie = "Cookie";

/** Controls cross-origin isolation by requiring all cross-origin resources to opt in via CORS or CORP.
 * @see {@link https://html.spec.whatwg.org/multipage/browsers.html#the-headers:-cross-origin-embedder-policy WHATWG HTML Standard}
 */
export const HttpHeader_CrossOriginEmbedderPolicy = "Cross-Origin-Embedder-Policy";

/** Same as Cross-Origin-Embedder-Policy, but violations are only reported, not enforced.
 * @see {@link https://html.spec.whatwg.org/multipage/browsers.html#the-headers:-cross-origin-embedder-policy-report-only WHATWG HTML Standard}
 */
export const HttpHeader_CrossOriginEmbedderPolicyReportOnly = "Cross-Origin-Embedder-Policy-Report-Only";

/** Controls whether the browsing context can be shared with cross-origin documents.
 * @see {@link https://html.spec.whatwg.org/multipage/browsers.html#the-headers:-cross-origin-opener-policy WHATWG HTML Standard}
 */
export const HttpHeader_CrossOriginOpenerPolicy = "Cross-Origin-Opener-Policy";

/** Same as Cross-Origin-Opener-Policy, but violations are only reported, not enforced.
 * @see {@link https://html.spec.whatwg.org/multipage/browsers.html#the-headers:-cross-origin-opener-policy-report-only WHATWG HTML Standard}
 */
export const HttpHeader_CrossOriginOpenerPolicyReportOnly = "Cross-Origin-Opener-Policy-Report-Only";

/** Prevents other origins from reading the response via no-cors cross-origin fetches.
 * @see {@link https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header Fetch Standard}
 */
export const HttpHeader_CrossOriginResourcePolicy = "Cross-Origin-Resource-Policy";

/** Used in WebDAV searches to indicate the grammar(s) supported by the server for the SEARCH method.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5323 RFC 5323}
 */
export const HttpHeader_DASL = "DASL";

/** The date and time at which the message was originated.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-6.6.1 RFC 9110, Section 6.6.1}
 */
export const HttpHeader_Date = "Date";

/** Indicates the WebDAV compliance level supported by the server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_DAV = "DAV";

/** The ETag of the base resource against which a delta-encoded response was computed.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3229 RFC 3229}
 */
export const HttpHeader_DeltaBase = "Delta-Base";

/** Signals that the API operation is deprecated, along with an optional deprecation timestamp.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9745#section-2 RFC 9745, Section 2}
 */
export const HttpHeader_Deprecation = "Deprecation";

/** Specifies the depth of a WebDAV operation (0, 1, or Infinity).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_Depth = "Depth";

/** Specifies the destination URI for WebDAV COPY and MOVE operations.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_Destination = "Destination";

/** A detached JSON Web Signature (JWS) providing request integrity verification.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9635 RFC 9635}
 */
export const HttpHeader_DetachedJWS = "Detached-JWS";

/** Identifies a compression dictionary by its hash, for use in Zstandard or Brotli shared dictionary compression.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9842#section-2.3 RFC 9842, Section 2.3}
 */
export const HttpHeader_DictionaryID = "Dictionary-ID";

/** Carries the Demonstrating Proof-of-Possession (DPoP) proof JWT to bind an OAuth access token to a key.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9449 RFC 9449}
 */
export const HttpHeader_DPoP = "DPoP";

/** Server-provided nonce for constructing a DPoP proof, preventing replay attacks.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9449 RFC 9449}
 */
export const HttpHeader_DPoPNonce = "DPoP-Nonce";

/** Indicates that the request was sent in TLS 1.3 early data (0-RTT), subject to replay risk.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8470 RFC 8470}
 */
export const HttpHeader_EarlyData = "Early-Data";

/** An opaque validator representing a specific version of the resource, used for conditional requests and caching.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.8.3 RFC 9110, Section 8.8.3}
 */
export const HttpHeader_ETag = "ETag";

/** Indicates expectations the client requires the server to meet before sending the request body (e.g., 100-continue).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.1.1 RFC 9110, Section 10.1.1}
 */
export const HttpHeader_Expect = "Expect";

/** The date/time after which the response is considered stale by caches.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9111#section-5.3 RFC 9111, Section 5.3}
 */
export const HttpHeader_Expires = "Expires";

/** Discloses proxy information such as the client's originating IP address, protocol, and host.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7239 RFC 7239}
 */
export const HttpHeader_Forwarded = "Forwarded";

/** The email address of the human user controlling the requesting user agent.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.1.2 RFC 9110, Section 10.1.2}
 */
export const HttpHeader_From = "From";

/** Used in the HOBA (HTTP Origin-Bound Authentication) authentication scheme.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7486#section-6.1.1 RFC 7486, Section 6.1.1}
 */
export const HttpHeader_Hobareg = "Hobareg";

/** Specifies the target host (and optional port) for the request, required in HTTP/1.1.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-7.2 RFC 9110, Section 7.2}
 */
export const HttpHeader_Host = "Host";

/** A conditional expression using WebDAV state tokens and ETags to scope operations.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_If = "If";

/** Makes the request conditional: perform the action only if the resource's ETag matches.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-13.1.1 RFC 9110, Section 13.1.1}
 */
export const HttpHeader_IfMatch = "If-Match";

/** Makes the request conditional: return the resource only if it has been modified after the given date.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-13.1.3 RFC 9110, Section 13.1.3}
 */
export const HttpHeader_IfModifiedSince = "If-Modified-Since";

/** Makes the request conditional: perform the action only if none of the ETags match.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-13.1.2 RFC 9110, Section 13.1.2}
 */
export const HttpHeader_IfNoneMatch = "If-None-Match";

/** Combines a conditional with a range request: send the range only if the validator still matches.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-13.1.5 RFC 9110, Section 13.1.5}
 */
export const HttpHeader_IfRange = "If-Range";

/** Conditional for CalDAV scheduling: process only if the schedule tag matches.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6638 RFC 6638}
 */
export const HttpHeader_IfScheduleTagMatch = "If-Schedule-Tag-Match";

/** Makes the request conditional: perform the action only if the resource has not been modified since the given date.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-13.1.4 RFC 9110, Section 13.1.4}
 */
export const HttpHeader_IfUnmodifiedSince = "If-Unmodified-Since";

/** Lists instance-manipulation operations present in a delta-encoded response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3229 RFC 3229}
 */
export const HttpHeader_IM = "IM";

/** Token binding ID that the recipient should include in issued tokens, for referred bindings.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8473 RFC 8473}
 */
export const HttpHeader_IncludeReferredTokenBindingID = "Include-Referred-Token-Binding-ID";

/** Indicates that the response can be delivered incrementally before it is complete.
 * @see {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-incremental-04 draft-ietf-httpbis-incremental}
 */
export const HttpHeader_Incremental = "Incremental";

/** Carries parameters that control behavior of a persistent (keep-alive) HTTP/1.0 connection.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2068 RFC 2068}
 */
export const HttpHeader_KeepAlive = "Keep-Alive";

/** A DeltaV label associated with a version resource in a version-controlled system.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253 RFC 3253}
 */
export const HttpHeader_Label = "Label";

/** The last SSE (Server-Sent Events) event ID received by the client, used to resume an event stream.
 * @see {@link https://html.spec.whatwg.org/multipage/server-sent-events.html#last-event-id WHATWG HTML Standard}
 */
export const HttpHeader_LastEventID = "Last-Event-ID";

/** The date and time at which the server believes the resource was last modified.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-8.8.2 RFC 9110, Section 8.8.2}
 */
export const HttpHeader_LastModified = "Last-Modified";

/** Provides a typed relationship between the resource and another URI.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8288 RFC 8288}
 */
export const HttpHeader_Link = "Link";

/** Provides a typed link relationship using a URI template, allowing parameterized link targets.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9652 RFC 9652}
 */
export const HttpHeader_LinkTemplate = "Link-Template";

/** URL for a redirect or the location of a newly created resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.2.2 RFC 9110, Section 10.2.2}
 */
export const HttpHeader_Location = "Location";

/** Identifies the lock token for a WebDAV locked resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_LockToken = "Lock-Token";

/** Limits the number of times a request can be forwarded by proxies (used with TRACE and OPTIONS).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-7.6.2 RFC 9110, Section 7.6.2}
 */
export const HttpHeader_MaxForwards = "Max-Forwards";

/** The datetime of the Memento (archived snapshot) being served.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7089 RFC 7089}
 */
export const HttpHeader_MementoDatetime = "Memento-Datetime";

/** Used for HTTP metering and reporting in HTTP Extension Protocol.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2227 RFC 2227}
 */
export const HttpHeader_Meter = "Meter";

/** Indicates the MIME version; informational only, always "1.0" in HTTP.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9112#appendix-B.1 RFC 9112, Appendix B.1}
 */
export const HttpHeader_MIMEVersion = "MIME-Version";

/** Used in transparent content negotiation to send the list of negotiation directives.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295 RFC 2295}
 */
export const HttpHeader_Negotiate = "Negotiate";

/** Configures Network Error Logging to collect and report client-side network errors.
 * @see {@link https://www.w3.org/TR/network-error-logging/ W3C Network Error Logging}
 */
export const HttpHeader_NEL = "NEL";

/** Contains the entity ID of the entity created or modified by an OData upsert operation.
 * @see {@link https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html OData Version 4.01}
 */
export const HttpHeader_ODataEntityId = "OData-EntityId";

/** Requests snapshot isolation semantics for an OData request.
 * @see {@link https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html OData Version 4.01}
 */
export const HttpHeader_ODataIsolation = "OData-Isolation";

/** Specifies the maximum OData version the client can process in the response.
 * @see {@link https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html OData Version 4.01}
 */
export const HttpHeader_ODataMaxVersion = "OData-MaxVersion";

/** Indicates the OData protocol version used in the request or response.
 * @see {@link https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html OData Version 4.01}
 */
export const HttpHeader_ODataVersion = "OData-Version";

/** Provides an optional authentication challenge for non-interactive HTTP clients, used alongside mutual auth schemes.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8053#section-3 RFC 8053, Section 3}
 */
export const HttpHeader_OptionalWWWAuthenticate = "Optional-WWW-Authenticate";

/** Specifies the ordering semantics for a WebDAV ordered collection (e.g., DAV:custom, DAV:ascending).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3648 RFC 3648}
 */
export const HttpHeader_OrderingType = "Ordering-Type";

/** Contains the serialized origin that issued the cross-origin request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6454 RFC 6454}
 */
export const HttpHeader_Origin = "Origin";

/** Requests that the browser give the document an origin-keyed agent cluster for better isolation.
 * @see {@link https://html.spec.whatwg.org/multipage/origin.html#origin-agent-cluster WHATWG HTML Standard}
 */
export const HttpHeader_OriginAgentCluster = "Origin-Agent-Cluster";

/** Carries Object Security for Constrained RESTful Environments (OSCORE) data in CoAP-over-HTTP proxying.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8613#section-11.1 RFC 8613, Section 11.1}
 */
export const HttpHeader_OSCORE = "OSCORE";

/** Specifies the OSLC Core specification version used in the request.
 * @see {@link https://docs.oasis-open.org/oslc-core/oslc-core/v3.0/ps02/part1-overview/oslc-core-v3.0-ps02-part1-overview.html OASIS OSLC Core Version 3.0}
 */
export const HttpHeader_OSLCCoreVersion = "OSLC-Core-Version";

/** Controls whether a WebDAV COPY or MOVE operation should overwrite an existing destination resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_Overwrite = "Overwrite";

/** Source URL sent by the browser when an HTML ping attribute link is activated.
 * @see {@link https://html.spec.whatwg.org/multipage/links.html#ping WHATWG HTML Standard}
 */
export const HttpHeader_PingFrom = "Ping-From";

/** Destination URL sent by the browser when an HTML ping attribute link is activated.
 * @see {@link https://html.spec.whatwg.org/multipage/links.html#ping WHATWG HTML Standard}
 */
export const HttpHeader_PingTo = "Ping-To";

/** Sets the position of a new member within a WebDAV ordered collection.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3648 RFC 3648}
 */
export const HttpHeader_Position = "Position";

/** Requests that the server apply one or more specified preference behaviors to the request processing.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7240 RFC 7240}
 */
export const HttpHeader_Prefer = "Prefer";

/** Indicates which Prefer preferences the server has honored in its response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7240 RFC 7240}
 */
export const HttpHeader_PreferenceApplied = "Preference-Applied";

/** Conveys the request's priority to help the server and intermediaries schedule responses.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9218 RFC 9218}
 */
export const HttpHeader_Priority = "Priority";

/** Authentication challenge issued by a proxy requiring client credentials.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.7.1 RFC 9110, Section 11.7.1}
 */
export const HttpHeader_ProxyAuthenticate = "Proxy-Authenticate";

/** Carries additional authentication data after a successful proxy authentication.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.7.3 RFC 9110, Section 11.7.3}
 */
export const HttpHeader_ProxyAuthenticationInfo = "Proxy-Authentication-Info";

/** Contains credentials to authenticate the client with a proxy.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.7.2 RFC 9110, Section 11.7.2}
 */
export const HttpHeader_ProxyAuthorization = "Proxy-Authorization";

/** Conveys proxy processing status and any forwarding errors encountered.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9209 RFC 9209}
 */
export const HttpHeader_ProxyStatus = "Proxy-Status";

/** HTTP Public Key Pinning (HPKP): pins certificate public keys for the origin to prevent MITM attacks.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7469 RFC 7469}
 */
export const HttpHeader_PublicKeyPins = "Public-Key-Pins";

/** Same as Public-Key-Pins, but pin failures are only reported, not enforced.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7469 RFC 7469}
 */
export const HttpHeader_PublicKeyPinsReportOnly = "Public-Key-Pins-Report-Only";

/** Requests that the server return only the specified byte range(s) of the resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-14.2 RFC 9110, Section 14.2}
 */
export const HttpHeader_Range = "Range";

/** Provides the target URI of a WebDAV redirect reference resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4437 RFC 4437}
 */
export const HttpHeader_RedirectRef = "Redirect-Ref";

/** The URL of the page from which the request originated (note: intentional historical misspelling).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.1.3 RFC 9110, Section 10.1.3}
 */
export const HttpHeader_Referer = "Referer";

/** Controls how much referrer information is included with requests made from the page.
 * @see {@link https://www.w3.org/TR/referrer-policy/ W3C Referrer Policy}
 */
export const HttpHeader_ReferrerPolicy = "Referrer-Policy";

/** Instructs the browser to refresh or redirect to a URL after a specified delay.
 * @see {@link https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate-to-a-navigate-response WHATWG HTML Standard}
 */
export const HttpHeader_Refresh = "Refresh";

/** Server-provided nonce for ACME request anti-replay protection.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8555#section-6.5.1 RFC 8555, Section 6.5.1}
 */
export const HttpHeader_ReplayNonce = "Replay-Nonce";

/** Contains a digest of the selected representation (headers and body), for integrity verification.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9530#section-3 RFC 9530, Section 3}
 */
export const HttpHeader_ReprDigest = "Repr-Digest";

/** Indicates how long the client should wait before retrying after a 429 or 503 response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.2.3 RFC 9110, Section 10.2.3}
 */
export const HttpHeader_RetryAfter = "Retry-After";

/** Controls whether a CalDAV scheduling object resource should send iTIP replies to organizers.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6638 RFC 6638}
 */
export const HttpHeader_ScheduleReply = "Schedule-Reply";

/** An ETag-like validator for CalDAV scheduling object resources.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6638 RFC 6638}
 */
export const HttpHeader_ScheduleTag = "Schedule-Tag";

/** Indicates the destination type of a fetch request (e.g., document, script, image).
 * @see {@link https://www.w3.org/TR/fetch-metadata/#sec-fetch-dest-header W3C Fetch Metadata Request Headers}
 */
export const HttpHeader_SecFetchDest = "Sec-Fetch-Dest";

/** Indicates the mode of a fetch request (e.g., cors, navigate, no-cors).
 * @see {@link https://www.w3.org/TR/fetch-metadata/#sec-fetch-mode-header W3C Fetch Metadata Request Headers}
 */
export const HttpHeader_SecFetchMode = "Sec-Fetch-Mode";

/** Indicates the relationship between the origin of the request and the target resource's origin.
 * @see {@link https://www.w3.org/TR/fetch-metadata/#sec-fetch-site-header W3C Fetch Metadata Request Headers}
 */
export const HttpHeader_SecFetchSite = "Sec-Fetch-Site";

/** Indicates whether the fetch request was initiated by a user interaction.
 * @see {@link https://www.w3.org/TR/fetch-metadata/#sec-fetch-user-header W3C Fetch Metadata Request Headers}
 */
export const HttpHeader_SecFetchUser = "Sec-Fetch-User";

/** Indicates the purpose of a fetch, such as a prefetch or a beacon request.
 * @see {@link https://fetch.spec.whatwg.org/#sec-purpose-header Fetch Standard}
 */
export const HttpHeader_SecPurpose = "Sec-Purpose";

/** Carries the token binding message for establishing TLS channel-bound tokens.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8473 RFC 8473}
 */
export const HttpHeader_SecTokenBinding = "Sec-Token-Binding";

/** Server's handshake response value during the WebSocket upgrade, confirming the key.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6455 RFC 6455}
 */
export const HttpHeader_SecWebSocketAccept = "Sec-WebSocket-Accept";

/** Lists the WebSocket protocol extensions negotiated between client and server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6455 RFC 6455}
 */
export const HttpHeader_SecWebSocketExtensions = "Sec-WebSocket-Extensions";

/** Random key sent by the client to initiate the WebSocket handshake.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6455 RFC 6455}
 */
export const HttpHeader_SecWebSocketKey = "Sec-WebSocket-Key";

/** The subprotocol(s) the client wishes to use over the WebSocket connection.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6455 RFC 6455}
 */
export const HttpHeader_SecWebSocketProtocol = "Sec-WebSocket-Protocol";

/** WebSocket protocol version used (or supported) in the handshake.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6455 RFC 6455}
 */
export const HttpHeader_SecWebSocketVersion = "Sec-WebSocket-Version";

/** Contains information about the software handling the request on the server side.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.2.4 RFC 9110, Section 10.2.4}
 */
export const HttpHeader_Server = "Server";

/** Communicates server-side performance metrics to the client for monitoring purposes.
 * @see {@link https://www.w3.org/TR/server-timing/ W3C Server Timing}
 */
export const HttpHeader_ServerTiming = "Server-Timing";

/** Sends a cookie from the server to the client for storage and future requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6265 RFC 6265}
 */
export const HttpHeader_SetCookie = "Set-Cookie";

/** SCIM transaction ID header for correlating events across distributed SCIM event feeds.
 * @see {@link https://datatracker.ietf.org/doc/html/draft-ietf-scim-events-15 draft-ietf-scim-events}
 */
export const HttpHeader_SetTxn = "Set-Txn";

/** Contains the value of one or more HTTP message signatures.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9421#section-4.2 RFC 9421, Section 4.2}
 */
export const HttpHeader_Signature = "Signature";

/** Contains the parameters (covered components, metadata) that describe HTTP message signatures.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9421#section-4.1 RFC 9421, Section 4.1}
 */
export const HttpHeader_SignatureInput = "Signature-Input";

/** A suggested short name (slug) for the URI of a new Atom publication entry.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5023 RFC 5023}
 */
export const HttpHeader_SLUG = "SLUG";

/** Indicates the intent of a SOAP HTTP request (the SOAP action).
 * @see {@link https://www.w3.org/TR/2000/NOTE-SOAP-20000508/ W3C SOAP 1.1}
 */
export const HttpHeader_SoapAction = "SoapAction";

/** URI identifying the status monitor for a WebDAV asynchronous request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2518 RFC 2518}
 */
export const HttpHeader_StatusURI = "Status-URI";

/** Enforces that future connections to the origin must use HTTPS (HTTP Strict Transport Security).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6797 RFC 6797}
 */
export const HttpHeader_StrictTransportSecurity = "Strict-Transport-Security";

/** Indicates the date on which the resource (or API) will no longer be available.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8594 RFC 8594}
 */
export const HttpHeader_Sunset = "Sunset";

/** Used in transparent content negotiation responses to indicate the chosen content-type negotiation mechanism.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295 RFC 2295}
 */
export const HttpHeader_TCN = "TCN";

/** Transfer encodings the client is willing to accept in the response (e.g., trailers).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.1.4 RFC 9110, Section 10.1.4}
 */
export const HttpHeader_TE = "TE";

/** Requested timeout duration for a WebDAV lock.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918 RFC 4918}
 */
export const HttpHeader_Timeout = "Timeout";

/** Identifies a logical topic for a Web Push subscription, allowing new messages to replace older ones.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8030#section-5.4 RFC 8030, Section 5.4}
 */
export const HttpHeader_Topic = "Topic";

/** Propagates distributed trace context (trace-id and parent-id) across service boundaries.
 * @see {@link https://www.w3.org/TR/trace-context/ W3C Trace Context}
 */
export const HttpHeader_Traceparent = "Traceparent";

/** Carries vendor-specific distributed tracing state alongside Traceparent.
 * @see {@link https://www.w3.org/TR/trace-context/ W3C Trace Context}
 */
export const HttpHeader_Tracestate = "Tracestate";

/** Lists the trailer fields that will be present in the chunked message after the last chunk.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-6.6.2 RFC 9110, Section 6.6.2}
 */
export const HttpHeader_Trailer = "Trailer";

/** Specifies the transfer encoding(s) applied to the message body (e.g., chunked, gzip).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9112#section-6.1 RFC 9112, Section 6.1}
 */
export const HttpHeader_TransferEncoding = "Transfer-Encoding";

/** Time-to-live in seconds for a Web Push message before it is discarded if undelivered.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8030#section-5.2 RFC 8030, Section 5.2}
 */
export const HttpHeader_TTL = "TTL";

/** Requests that the server switch to a different protocol (e.g., HTTP/1.1 to WebSocket).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-7.8 RFC 9110, Section 7.8}
 */
export const HttpHeader_Upgrade = "Upgrade";

/** Indicates the delivery urgency of a Web Push message (very-low, low, normal, high).
 * @see {@link https://datatracker.ietf.org/doc/html/rfc8030#section-5.3 RFC 8030, Section 5.3}
 */
export const HttpHeader_Urgency = "Urgency";

/** Instructs the client to store the response body as a shared compression dictionary for future requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9842#section-2.1 RFC 9842, Section 2.1}
 */
export const HttpHeader_UseAsDictionary = "Use-As-Dictionary";

/** Contains information about the client application, operating system, and version making the request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-10.1.5 RFC 9110, Section 10.1.5}
 */
export const HttpHeader_UserAgent = "User-Agent";

/** Used in transparent content negotiation to indicate how variants map to Vary header values.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2295 RFC 2295}
 */
export const HttpHeader_VariantVary = "Variant-Vary";

/** Lists request headers that affect the response content, informing caches to key on those headers.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.5 RFC 9110, Section 12.5.5}
 */
export const HttpHeader_Vary = "Vary";

/** Added by proxies and gateways to indicate the protocol and host of intermediate nodes in the request chain.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-7.6.3 RFC 9110, Section 7.6.3}
 */
export const HttpHeader_Via = "Via";

/** Requests that the server include a specific type of digest for the message content in the response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9530#section-4 RFC 9530, Section 4}
 */
export const HttpHeader_WantContentDigest = "Want-Content-Digest";

/** Requests that the server include a specific type of digest for the selected representation in the response.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9530#section-4 RFC 9530, Section 4}
 */
export const HttpHeader_WantReprDigest = "Want-Repr-Digest";

/** Authentication challenge indicating the scheme(s) and parameters for authenticating with the server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-11.6.1 RFC 9110, Section 11.6.1}
 */
export const HttpHeader_WWWAuthenticate = "WWW-Authenticate";

/** Prevents browsers from MIME-type sniffing; instructs the browser to follow the declared Content-Type.
 * @see {@link https://fetch.spec.whatwg.org/#x-content-type-options-header Fetch Standard}
 */
export const HttpHeader_XContentTypeOptions = "X-Content-Type-Options";

/** Controls whether the page can be embedded in a frame or iframe (DENY, SAMEORIGIN).
 * @see {@link https://html.spec.whatwg.org/multipage/browsing-the-web.html#x-frame-options WHATWG HTML Standard}
 */
export const HttpHeader_XFrameOptions = "X-Frame-Options";

// Provisional headers — registered in the IANA registry but not yet standardized.

/** PROVISIONAL HEADER: Requests activation of cross-site storage access for embedded third-party content.
 * @see {@link https://privacycg.github.io/storage-access-headers/ Privacy CG Storage Access Headers}
 */
export const HttpHeader_ActivateStorageAccess = "Activate-Storage-Access";

/** PROVISIONAL HEADER: Specifies AMP cache transformation requirements for serving AMP pages from a cache.
 * @see {@link https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-cache-transform.md AMP Cache Transform}
 */
export const HttpHeader_AMPCacheTransform = "AMP-Cache-Transform";

/** PROVISIONAL HEADER: Common Media Client Data (CMCD) object-level metrics reported by the media client.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf CTA-5004}
 */
export const HttpHeader_CMCDObject = "CMCD-Object";

/** PROVISIONAL HEADER: Common Media Client Data (CMCD) request-level metrics reported by the media client.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf CTA-5004}
 */
export const HttpHeader_CMCDRequest = "CMCD-Request";

/** PROVISIONAL HEADER: Common Media Client Data (CMCD) session-level metrics reported by the media client.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf CTA-5004}
 */
export const HttpHeader_CMCDSession = "CMCD-Session";

/** PROVISIONAL HEADER: Common Media Client Data (CMCD) status metrics reported by the media client.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf CTA-5004}
 */
export const HttpHeader_CMCDStatus = "CMCD-Status";

/** PROVISIONAL HEADER: Common Media Server Data (CMSD) dynamic status information from the media server.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5006-final.pdf CTA-5006}
 */
export const HttpHeader_CMSDDynamic = "CMSD-Dynamic";

/** PROVISIONAL HEADER: Common Media Server Data (CMSD) static configuration information from the media server.
 * @see {@link https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5006-final.pdf CTA-5006}
 */
export const HttpHeader_CMSDStatic = "CMSD-Static";

/** PROVISIONAL HEADER: Identifies the OSLC configuration context for linked lifecycle tool integrations.
 * @see {@link https://open-services.net/specifications/config/v1.0/config-spec.html OSLC Configuration Management 1.0}
 */
export const HttpHeader_ConfigurationContext = "Configuration-Context";

/** PROVISIONAL HEADER: Common access token for authorization in media streaming environments.
 * @see {@link https://www.cta.tech/ CTA}
 */
export const HttpHeader_CTACommonAccessToken = "CTA-Common-Access-Token";

/** PROVISIONAL HEADER: Indicates supported features in EDI-INT (Electronic Data Interchange over the Internet) messaging.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6017 RFC 6017}
 */
export const HttpHeader_EDIINTFeatures = "EDIINT-Features";

/** PROVISIONAL HEADER: Requests snapshot isolation for OData requests (equivalent to OData-Isolation).
 * @see {@link https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html OData Version 4.01}
 */
export const HttpHeader_Isolation = "Isolation";

/** PROVISIONAL HEADER: Controls which browser features and APIs can be used in the page and in embedded iframes.
 * @see {@link https://www.w3.org/TR/permissions-policy/ W3C Permissions Policy}
 */
export const HttpHeader_PermissionsPolicy = "Permissions-Policy";

/** PROVISIONAL HEADER: Client identifier used to detect duplicate idempotent requests.
 * @see {@link https://docs.oasis-open.org/odata/repeatable-requests/v1.0/repeatable-requests-v1.0.html OASIS Repeatable Requests Version 1.0}
 */
export const HttpHeader_RepeatabilityClientID = "Repeatability-Client-ID";

/** PROVISIONAL HEADER: Timestamp of the first transmission of this idempotent request.
 * @see {@link https://docs.oasis-open.org/odata/repeatable-requests/v1.0/repeatable-requests-v1.0.html OASIS Repeatable Requests Version 1.0}
 */
export const HttpHeader_RepeatabilityFirstSent = "Repeatability-First-Sent";

/** PROVISIONAL HEADER: Unique request identifier for detecting and deduplicating repeated idempotent requests.
 * @see {@link https://docs.oasis-open.org/odata/repeatable-requests/v1.0/repeatable-requests-v1.0.html OASIS Repeatable Requests Version 1.0}
 */
export const HttpHeader_RepeatabilityRequestID = "Repeatability-Request-ID";

/** PROVISIONAL HEADER: Indicates whether an idempotent request was accepted as new or recognized as a duplicate.
 * @see {@link https://docs.oasis-open.org/odata/repeatable-requests/v1.0/repeatable-requests-v1.0.html OASIS Repeatable Requests Version 1.0}
 */
export const HttpHeader_RepeatabilityResult = "Repeatability-Result";

/** PROVISIONAL HEADER: Defines named endpoints where the browser should send reports (CSP, NEL, etc.).
 * @see {@link https://www.w3.org/TR/reporting/ W3C Reporting API}
 */
export const HttpHeader_ReportingEndpoints = "Reporting-Endpoints";

/** PROVISIONAL HEADER: Indicates the storage access state of the fetch request in relation to cross-site storage permissions.
 * @see {@link https://privacycg.github.io/storage-access-headers/ Privacy CG Storage Access Headers}
 */
export const HttpHeader_SecFetchStorageAccess = "Sec-Fetch-Storage-Access";

/** PROVISIONAL HEADER: Signals the user's Global Privacy Control (GPC) preference to opt out of data sharing or sales.
 * @see {@link https://privacycg.github.io/gpc-spec/ Privacy CG Global Privacy Control}
 */
export const HttpHeader_SecGPC = "Sec-GPC";

/** PROVISIONAL HEADER: Advertises the capabilities of a CDN surrogate cache to the origin server.
 * @see {@link https://www.w3.org/TR/edge-arch/ W3C Edge Architecture Specification}
 */
export const HttpHeader_SurrogateCapability = "Surrogate-Capability";

/** PROVISIONAL HEADER: Cache directives targeted at surrogate (CDN) caches only; not stored or forwarded by browsers.
 * @see {@link https://www.w3.org/TR/edge-arch/ W3C Edge Architecture Specification}
 */
export const HttpHeader_SurrogateControl = "Surrogate-Control";

/** PROVISIONAL HEADER: Specifies which origins are allowed to access resource timing data via the Resource Timing API.
 * @see {@link https://www.w3.org/TR/resource-timing/ W3C Resource Timing Level 1}
 */
export const HttpHeader_TimingAllowOrigin = "Timing-Allow-Origin";

// Deprecated headers — still registered but discouraged; use the recommended alternative instead.

/** @deprecated Superseded by the universal adoption of UTF-8; no longer needed to request specific charsets.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.2 RFC 9110, Section 12.5.2}
 */
export const HttpHeader_AcceptCharset = "Accept-Charset";

/** @deprecated Content ID header from the W3C HTTP Distribution and Replication Protocol; no longer in use.
 * @see {@link https://www.w3.org/TR/NOTE-drp W3C HTTP Distribution and Replication Protocol}
 */
export const HttpHeader_ContentID = "Content-ID";

/** @deprecated Differential content identifier from the W3C HTTP Distribution and Replication Protocol; no longer in use.
 * @see {@link https://www.w3.org/TR/NOTE-drp W3C HTTP Distribution and Replication Protocol}
 */
export const HttpHeader_DifferentialID = "Differential-ID";

/** @deprecated Enforcement of Certificate Transparency via HTTP headers is deprecated; CT is now enforced via browser policies.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9163 RFC 9163}
 */
export const HttpHeader_ExpectCT = "Expect-CT";

/** @deprecated Legacy cache directive superseded by Cache-Control; use Cache-Control: no-cache instead.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9111#section-5.4 RFC 9111, Section 5.4}
 */
export const HttpHeader_Pragma = "Pragma";
