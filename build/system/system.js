/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * monoco core system
 * @property {MonocoSystem} system
 */
var system = {
    "name": "monoco",
    "version": "0.6.0",
    "description": "A Model and a NoSQL Database for Components",
    "_id": "e89c617b6b15d24",
    "types": {
        "html": {
            "name": "html",
            "type": "string",
            "core": true
        },
        "css": {
            "name": "css",
            "type": "string",
            "core": true
        },
        "collection": {
            "name": "collection",
            "type": "object",
            "schema": {
                "type": {
                    "type": [
                        "string"
                    ],
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "errorParam": {
            "name": "errorParam",
            "type": "object",
            "schema": {
                "message": {
                    "type": "string",
                    "mandatory": true
                },
                "error": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "event": {
            "name": "event",
            "type": "object",
            "schema": {
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "javascript": {
            "name": "javascript",
            "type": "string",
            "core": true
        },
        "message": {
            "name": "message",
            "type": "object",
            "schema": {
                "event": {
                    "type": "string",
                    "mandatory": true
                },
                "from": {
                    "type": "string",
                    "mandatory": false
                },
                "data": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "method": {
            "name": "method",
            "type": "object",
            "schema": {
                "result": {
                    "type": "string",
                    "mandatory": false
                },
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "parameter": {
            "name": "parameter",
            "type": "object",
            "schema": {
                "name": {
                    "type": "string",
                    "mandatory": true
                },
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": false
                },
                "default": {
                    "type": "@type",
                    "mandatory": false
                }
            },
            "core": true
        },
        "property": {
            "name": "property",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                }
            },
            "core": true
        }
    },
    "behaviors": {
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "monoco",
            "state": "load",
            "action": "function load(url, async) {    var xhr = null, callbackLoad = null;    xhr = new XMLHttpRequest();    callbackLoad = function callbackLoad(system) {        var sysId = $db.system(system);        var sys = $component.get(sysId);        var systems = document.querySelectorAll('link[rel=system]');        if (sys) {            sys.main();        }        if (systems.length + 1 === $db.MonocoSystem.count() ) {            $component.get('monoco').ready();  }    };    if (async) {        xhr.open('GET', url, true);        xhr.onreadystatechange = function () {            if (xhr.readyState === 4) {                if (xhr.status === 200) {                    callbackLoad(JSON.parse(xhr.response));                }            }        };        xhr.send(null);    } else {        xhr.open('GET', url, false);        xhr.send(null);        if (xhr.status === 200) {            callbackLoad(JSON.parse(xhr.response));        }    }}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {    var systems = [],        system = null,        i = 0,        length = 0;    if (typeof document !== 'undefined') {        systems = document.querySelectorAll('link[rel=system]');        length = systems.length;        for (i = 0; i < length; i++) {            system = systems[i];            if (system.getAttribute('async') === 'true') {                this.require('monoco').load(system.href, true);            } else {                this.require('monoco').load(system.href, false);            }        }        if (length === 0) {    this.require('monoco').ready();        }    }}",
            "core": true
        },
        "15e971f11b1f29a": {
            "_id": "15e971f11b1f29a",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) { console.error('monoco: ' + data.message, data.error); }",
            "core": true
        },
        "1e59310557166fa": {
            "_id": "1e59310557166fa",
            "component": "Monoco",
            "state": "find",
            "action": "function find(Class, query) { return $component.find(Class, query);}",
            "core": true,
            "useCoreAPI": true
        },
        "15c3714e8d1f823": {
            "_id": "15c3714e8d1f823",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) { var System = null, system = {}, result = [], conf = {}; if (name) { conf.master = true; conf.name = name; System = this.require('MonocoSystem'); system = new System(conf); } else { result = this.find('MonocoSystem', {'master': true}); if (result.length) { system = result[0]; } } return system; }",
            "core": true
        },
        "1d029183b812ac2": {
            "_id": "1d029183b812ac2",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) { console.warn('monoco: ' + message); }",
            "core": true
        },
        "1263c12ca818e51": {
            "_id": "1263c12ca818e51",
            "component": "MonocoChannel",
            "state": "listen",
            "action": "function listen(event, action) { $channel.listen(event, action); }",
            "core": true,
            "useCoreAPI": true
        },
        "170241a1521fd56": {
            "_id": "170241a1521fd56",
            "component": "MonocoChannel",
            "state": "send",
            "action": "function send(message) { return $channel.send(message); }",
            "core": true,
            "useCoreAPI": true
        },
        "104901f13318a98": {
            "_id": "104901f13318a98",
            "component": "MonocoClassInfo",
            "state": "collection",
            "action": "function collection(name) { var result = {}; if (this.metamodel()[name] === 'collection') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1eed818e7c1a394": {
            "_id": "1eed818e7c1a394",
            "component": "MonocoClassInfo",
            "state": "collections",
            "action": "function collections() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'collection') { result.push(item); } } return result; }",
            "core": true
        },
        "12ece10baa19e77": {
            "_id": "12ece10baa19e77",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) { var result = {}; if (this.metamodel()[name] === 'event') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "10f5711d26199ad": {
            "_id": "10f5711d26199ad",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'event') { result.push(item); } } return result; }",
            "core": true
        },
        "13dad18466185d8": {
            "_id": "13dad18466185d8",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) { var result = {}; if (this.metamodel()[name] === 'method') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1c3c211fd31ca88": {
            "_id": "1c3c211fd31ca88",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'method') { result.push(item); } } return result; }",
            "core": true
        },
        "17e671ae7f17a5d": {
            "_id": "17e671ae7f17a5d",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'property') { result.push(item); } } return result; }",
            "core": true
        },
        "158e410c821e40b": {
            "_id": "158e410c821e40b",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) { var result = {}; if (this.metamodel()[name] === 'property') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "178a7147dc16000": {
            "_id": "178a7147dc16000",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() { $component.destroy(this.id()); }",
            "core": true,
            "useCoreAPI": true
        },
        "174091912d19d67": {
            "_id": "174091912d19d67",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) { var args = [], i = 0, length = 0; length = arguments.length; for (i = 0; i < length - 7; i++) { args.push(arguments[i]); } if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) { if ($metamodel.isValidState(state, this.constructor.name)) {$behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state}); } else { $helper.getMonoco().warning({ \"message\":\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"}); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "15d81160c412056": {
            "_id": "15d81160c412056",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) { return $component.get(id); }",
            "core": true,
            "useCoreAPI": true
        },
        "1359118bf5109c4": {
            "_id": "1359118bf5109c4",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) { return $db.subsystem(params); }",
            "core": true,
            "useCoreAPI": true
        },
        "1364a11ac314806": {
            "_id": "1364a11ac314806",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) { return $db.system(system); }",
            "core": true,
            "useCoreAPI": true
        },
        "1fbbc19a501ee80": {
            "_id": "1fbbc19a501ee80",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() { $metamodel.create(); }",
            "core": true,
            "useCoreAPI": true
        },
        "109861084618f2e": {
            "_id": "109861084618f2e",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) { $metamodel.schema(schema); }",
            "core": true,
            "useCoreAPI": true
        },
        "104bc117281df7a": {
            "_id": "104bc117281df7a",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) { $metamodel.type(type); }",
            "core": true,
            "useCoreAPI": true
        },
        "189ae1ab3d1f380": {
            "_id": "189ae1ab3d1f380",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() { var dump = $db.dump(); this.schemas(dump.schemas); this.types(dump.types); this.behaviors(dump.behaviors); this.components(dump.components); }",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Monoco": {
            "monoco": {
                "_id": "monoco",
                "version": "0.6.0"
            }
        },
        "MonocoChannel": {
            "channel": {
                "_id": "channel"
            }
        },
        "MonocoDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "MonocoMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        }
    },
    "schemas": {
        "Monoco": {
            "_id": "Monoco",
            "_name": "Monoco",
            "_schema": "MonocoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "find": {
                "params": [{
                    "name": "Class",
                    "type": "string"
                }, {
                    "name": "query",
                    "type": "object",
                    "mandatory": false,
                    "default": {}
                }],
                "result": "array"
            },
            "load": {
                "params": [{
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }]
            },
            "warning": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "system": {
                "params": [{
                    "name": "name",
                    "type": "string",
                    "mandatory": false
                }],
                "result": "object"
            },
            "ready": {}
        },
        "MonocoBehavior": {
            "_id": "MonocoBehavior",
            "_name": "MonocoBehavior",
            "_schema": "MonocoBehaviorSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "core": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "useCoreAPI": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "component": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "action": {
                "type": "javascript",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "MonocoBehaviorSchema": {
            "_id": "MonocoBehaviorSchema",
            "_name": "MonocoBehaviorSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "MonocoChannel": {
            "_id": "MonocoChannel",
            "_name": "MonocoChannel",
            "_schema": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "listen": {
                "params": [{
                    "name": "event",
                    "type": "string"
                }, {
                    "name": "callback",
                    "type": "function"
                }]
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "message"
                }],
                "result": "boolean"
            }
        },
        "MonocoChannelSchema": {
            "_id": "MonocoChannelSchema",
            "_name": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "listen": "method",
            "send": "method"
        },
        "MonocoClassInfo": {
            "_id": "MonocoClassInfo",
            "_name": "MonocoClassInfo",
            "_schema": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "metamodel": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "model": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "property": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "properties": {
                "result": "array"
            },
            "method": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "methods": {
                "result": "array"
            },
            "collection": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "collections": {
                "result": "array"
            },
            "event": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "events": {
                "result": "array"
            }
        },
        "MonocoClassInfoSchema": {
            "_id": "MonocoClassInfoSchema",
            "_name": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "collections": "method",
            "collection": "method",
            "event": "method",
            "events": "method"
        },
        "MonocoComponent": {
            "_id": "MonocoComponent",
            "_name": "MonocoComponent",
            "_schema": "MonocoComponentSchema",
            "_core": true,
            "on": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "handler",
                    "type": "function"
                }, {
                    "name": "useCoreAPI",
                    "type": "boolean",
                    "mandatory": false
                }]
            },
            "off": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "behaviorId",
                    "type": "string",
                    "mandatory": false
                }]
            },
            "require": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "destroy": {
                "params": []
            },
            "classInfo": {
                "type": "@MonocoClassInfo",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "init": {
                "params": [{
                    "name": "conf",
                    "type": "object"
                }]
            },
            "error": {
                "params": [{
                    "name": "data",
                    "type": "errorParam"
                }]
            }
        },
        "MonocoComponentSchema": {
            "_id": "MonocoComponentSchema",
            "_name": "MonocoComponentSchema",
            "_core": true,
            "on": "method",
            "classInfo": "property",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "MonocoDatabase": {
            "_id": "MonocoDatabase",
            "_name": "MonocoDatabase",
            "_schema": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "system": {
                "params": [{
                    "name": "system",
                    "type": "object",
                    "mandatory": false
                }],
                "result": "string"
            },
            "subsystem": {
                "params": [{
                    "name": "params",
                    "type": "object"
                }],
                "result": "string"
            },
            "insert": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "object"
                }]
            },
            "update": {
                "params": [{
                    "name": "schema",
                    "type": "string"
                }, {
                    "name": "componentId",
                    "type": "string"
                }, {
                    "name": "attributeName",
                    "type": "string"
                }, {
                    "name": "attributeValue",
                    "type": "object"
                }]
            },
            "remove": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "string"
                }]
            }
        },
        "MonocoDatabaseSchema": {
            "_id": "MonocoDatabaseSchema",
            "_name": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "MonocoMessage": {
            "_id": "MonocoMessage",
            "_name": "MonocoMessage",
            "_schema": "MonocoMessageSchema",
            "_core": true,
            "event": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "from": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "data": {
                "type": "object",
                "readOnly": false,
                "mandatory": true,
                "default": {}
            }
        },
        "MonocoMessageSchema": {
            "_id": "MonocoMessageSchema",
            "_name": "MonocoMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "MonocoMetamodel": {
            "_id": "MonocoMetamodel",
            "_name": "MonocoMetamodel",
            "_schema": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }]
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }]
            },
            "create": {
                "params": []
            }
        },
        "MonocoMetamodelSchema": {
            "_id": "MonocoMetamodelSchema",
            "_name": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "MonocoSchema": {
            "_id": "MonocoSchema",
            "_name": "MonocoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "find": "method",
            "load": "method",
            "system": "method",
            "warning": "event",
            "ready": "event"
        },
        "MonocoState": {
            "_id": "MonocoState",
            "_name": "MonocoState",
            "_schema": "MonocoStateSchema",
            "_class": false,
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "parameters": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            }
        },
        "MonocoStateSchema": {
            "_id": "MonocoStateSchema",
            "_name": "MonocoStateSchema",
            "_core": true,
            "name": "property",
            "parameters": "property"
        },
        "MonocoSystem": {
            "_id": "MonocoSystem",
            "_name": "MonocoSystem",
            "_schema": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "master": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "subsystem": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "version": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "0.0.1"
            },
            "description": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "schemas": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "behaviors": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "types": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "components": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "ready": {},
            "sync": {},
            "main": {}
        },
        "MonocoSystemSchema": {
            "_id": "MonocoSystemSchema",
            "_name": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "ready": "event",
            "sync": "method",
            "main": "method"
        }
    }
};

/* exports  */


/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static 
 */


/**
 * monoco core system
 * @property {MonocoSystem} system
 */
exports.system = system;
