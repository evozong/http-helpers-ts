/**
 * HTTP request methods.
 *
 * @see {@link https://www.iana.org/assignments/http-methods/http-methods.xhtml IANA HTTP Method Registry}
 * Last Updated Date in IANA Registry: 2025-11-21
 * If registry has been updated since the date above, this file may be out of date.
 */

/** Requests a representation of the specified resource. Should only retrieve data.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.1 RFC 9110, Section 9.3.1}
 */
export const HttpMethod_GET = "GET";

/** Submits data to the specified resource, often causing a change in state or side effects.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.3 RFC 9110, Section 9.3.3}
 */
export const HttpMethod_POST = "POST";

/** Replaces all current representations of the target resource with the request payload.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.4 RFC 9110, Section 9.3.4}
 */
export const HttpMethod_PUT = "PUT";

/** Applies partial modifications to a resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5789#section-2 RFC 5789, Section 2}
 */
export const HttpMethod_PATCH = "PATCH";

/** Deletes the specified resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.5 RFC 9110, Section 9.3.5}
 */
export const HttpMethod_DELETE = "DELETE";

/** Requests the same response as GET, but without the response body. Used to retrieve metadata.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.2 RFC 9110, Section 9.3.2}
 */
export const HttpMethod_HEAD = "HEAD";

/** Describes the communication options for the target resource. Used for CORS preflight requests.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.7 RFC 9110, Section 9.3.7}
 */
export const HttpMethod_OPTIONS = "OPTIONS";

// Less commonly used HTTP methods from the IANA registry.

/** Sets access control list entries on a resource to define permissions for principals.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3744#section-8.1 RFC 3744, Section 8.1}
 */
export const HttpMethod_ACL = "ACL";

/** Places a resource under baseline control, associating it with a baseline in a version-controlled system.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-12.6 RFC 3253, Section 12.6}
 */
export const HttpMethod_BASELINE_CONTROL = "BASELINE-CONTROL";

/** Creates a new binding for a resource by adding it to a collection at the specified URI.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5842#section-4 RFC 5842, Section 4}
 */
export const HttpMethod_BIND = "BIND";

/** Creates a new version from a checked-out resource and returns it to a checked-in state.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-9.4 RFC 3253, Section 9.4}
 */
export const HttpMethod_CHECKIN = "CHECKIN";

/** Creates a working copy of a checked-in version-controlled resource, allowing it to be modified.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-8.8 RFC 3253, Section 8.8}
 */
export const HttpMethod_CHECKOUT = "CHECKOUT";

/** Establishes a TCP tunnel to the server identified by the target resource, typically used by proxies for HTTPS connections.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.6 RFC 9110, Section 9.3.6}
 */
export const HttpMethod_CONNECT = "CONNECT";

/** Copies the resource identified by the request URI to the destination URI specified in the Destination header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.8 RFC 4918, Section 9.8}
 */
export const HttpMethod_COPY = "COPY";

/** Assigns a label to a specific version of a resource in a version-controlled collection.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-8.2 RFC 3253, Section 8.2}
 */
export const HttpMethod_LABEL = "LABEL";

/** Creates a relationship between the request resource and other resources specified in the Link header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2068#section-19.6.1.2 RFC 2068, Section 19.6.1.2}
 */
export const HttpMethod_LINK = "LINK";

/** Applies an exclusive or shared lock to a resource to prevent concurrent modifications by other clients.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.10 RFC 4918, Section 9.10}
 */
export const HttpMethod_LOCK = "LOCK";

/** Merges a specified version of a resource into a target version-controlled resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-11.2 RFC 3253, Section 11.2}
 */
export const HttpMethod_MERGE = "MERGE";

/** Creates a new activity resource that groups a set of related changes in a version-controlled system.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-13.5 RFC 3253, Section 13.5}
 */
export const HttpMethod_MKACTIVITY = "MKACTIVITY";

/** Creates a new calendar collection resource at the specified URI, used in CalDAV.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4791#section-5.3.1 RFC 4791, Section 5.3.1}
 */
export const HttpMethod_MKCALENDAR = "MKCALENDAR";

/** Creates a new collection resource (analogous to a directory) at the location specified by the request URI.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.3 RFC 4918, Section 9.3}
 */
export const HttpMethod_MKCOL = "MKCOL";

/** Creates a redirect reference resource that maps a URI to a target resource without copying it.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4437#section-6 RFC 4437, Section 6}
 */
export const HttpMethod_MKREDIRECTREF = "MKREDIRECTREF";

/** Creates a new workspace resource used to isolate a set of working resources in a version-controlled system.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-6.3 RFC 3253, Section 6.3}
 */
export const HttpMethod_MKWORKSPACE = "MKWORKSPACE";

/** Moves the resource identified by the request URI to the destination URI specified in the Destination header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.9 RFC 4918, Section 9.9}
 */
export const HttpMethod_MOVE = "MOVE";

/** Changes the ordering of collection members according to the ordering semantics specified in the request.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3648#section-7 RFC 3648, Section 7}
 */
export const HttpMethod_ORDERPATCH = "ORDERPATCH";

/** Sends the HTTP/2 client connection preface to initiate HTTP/2 communication with a server.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9113#section-3.4 RFC 9113, Section 3.4}
 */
export const HttpMethod_PRI = "PRI";

/** Retrieves properties defined on a resource, optionally including properties of child members at a given depth.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.1 RFC 4918, Section 9.1}
 */
export const HttpMethod_PROPFIND = "PROPFIND";

/** Sets or removes multiple properties on a resource in a single atomic transaction.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.2 RFC 4918, Section 9.2}
 */
export const HttpMethod_PROPPATCH = "PROPPATCH";

/** Performs a safe, idempotent query against a resource using a request body to express the query parameters.
 * @see {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-safe-method-w-body-14#section-2 draft-ietf-httpbis-safe-method-w-body, Section 2}
 */
export const HttpMethod_QUERY = "QUERY";

/** Moves a binding from one collection to another, effectively changing the resource's location without deleting it.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5842#section-6 RFC 5842, Section 6}
 */
export const HttpMethod_REBIND = "REBIND";

/** Retrieves a typed report about a resource, commonly used in CalDAV and versioning protocols.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-3.6 RFC 3253, Section 3.6}
 */
export const HttpMethod_REPORT = "REPORT";

/** Initiates a server-side search against a resource and returns matching results, using a request body to express the search query.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5323#section-2 RFC 5323, Section 2}
 */
export const HttpMethod_SEARCH = "SEARCH";

/** Performs a message loop-back test along the path to the target resource, returning the received request for diagnostic purposes.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.8 RFC 9110, Section 9.3.8}
 */
export const HttpMethod_TRACE = "TRACE";

/** Removes a binding to a resource from a collection without deleting the underlying resource itself.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc5842#section-5 RFC 5842, Section 5}
 */
export const HttpMethod_UNBIND = "UNBIND";

/** Cancels a previous CHECKOUT operation and discards any local changes made to the working resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-4.5 RFC 3253, Section 4.5}
 */
export const HttpMethod_UNCHECKOUT = "UNCHECKOUT";

/** Removes one or more relationships between the request resource and other resources identified in the Link header.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc2068#section-19.6.1.3 RFC 2068, Section 19.6.1.3}
 */
export const HttpMethod_UNLINK = "UNLINK";

/** Removes a lock from a resource identified by the lock token, allowing other clients to modify it.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4918#section-9.11 RFC 4918, Section 9.11}
 */
export const HttpMethod_UNLOCK = "UNLOCK";

/** Modifies the content of a checked-in version-controlled resource to match the content of a specified version.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-7.1 RFC 3253, Section 7.1}
 */
export const HttpMethod_UPDATE = "UPDATE";

/** Changes the target URI of an existing redirect reference resource to point to a new resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4437#section-7 RFC 4437, Section 7}
 */
export const HttpMethod_UPDATEREDIRECTREF = "UPDATEREDIRECTREF";

/** Places an unversioned resource under version control by creating an associated version history resource.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3253#section-3.5 RFC 3253, Section 3.5}
 */
export const HttpMethod_VERSION_CONTROL = "VERSION-CONTROL";
