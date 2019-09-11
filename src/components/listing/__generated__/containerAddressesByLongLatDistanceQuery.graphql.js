/**
 * @flow
 * @relayHash 4c79ec4054227d446f69a9aa69e5fad8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type containerAddressesByLongLatDistanceQueryVariables = {|
  lat?: ?number,
  long?: ?number,
  distance?: ?number,
|};
export type containerAddressesByLongLatDistanceQueryResponse = {|
  +addressesByLongLatDistance: ?$ReadOnlyArray<?{|
    +address_1: ?string,
    +address_2: ?string,
    +city: ?string,
    +region: ?string,
    +zip_code: ?string,
    +latitude: ?number,
    +longitude: ?number,
  |}>
|};
export type containerAddressesByLongLatDistanceQuery = {|
  variables: containerAddressesByLongLatDistanceQueryVariables,
  response: containerAddressesByLongLatDistanceQueryResponse,
|};
*/


/*
query containerAddressesByLongLatDistanceQuery(
  $lat: Float
  $long: Float
  $distance: Float
) {
  addressesByLongLatDistance(lat: $lat, long: $long, distance: $distance) {
    address_1
    address_2
    city
    region
    zip_code
    latitude
    longitude
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "lat",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "long",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "distance",
    "type": "Float",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "distance",
    "variableName": "distance"
  },
  {
    "kind": "Variable",
    "name": "lat",
    "variableName": "lat"
  },
  {
    "kind": "Variable",
    "name": "long",
    "variableName": "long"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address_1",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address_2",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "region",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "zip_code",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "latitude",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "longitude",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "containerAddressesByLongLatDistanceQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addressesByLongLatDistance",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Address",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "containerAddressesByLongLatDistanceQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addressesByLongLatDistance",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Address",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "containerAddressesByLongLatDistanceQuery",
    "id": null,
    "text": "query containerAddressesByLongLatDistanceQuery(\n  $lat: Float\n  $long: Float\n  $distance: Float\n) {\n  addressesByLongLatDistance(lat: $lat, long: $long, distance: $distance) {\n    address_1\n    address_2\n    city\n    region\n    zip_code\n    latitude\n    longitude\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '714a701b2237fb435cfa4c9b9e5ca6b8';
module.exports = node;
