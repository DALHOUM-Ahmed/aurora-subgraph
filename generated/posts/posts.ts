// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatePost extends ethereum.Event {
  get params(): CreatePost__Params {
    return new CreatePost__Params(this);
  }
}

export class CreatePost__Params {
  _event: CreatePost;

  constructor(event: CreatePost) {
    this._event = event;
  }

  get _authorID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get title(): string {
    return this._event.parameters[1].value.toString();
  }

  get body(): string {
    return this._event.parameters[2].value.toString();
  }

  get createdAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get groupID(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get postID(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DeletePost extends ethereum.Event {
  get params(): DeletePost__Params {
    return new DeletePost__Params(this);
  }
}

export class DeletePost__Params {
  _event: DeletePost;

  constructor(event: DeletePost) {
    this._event = event;
  }

  get _executorID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdateBody extends ethereum.Event {
  get params(): UpdateBody__Params {
    return new UpdateBody__Params(this);
  }
}

export class UpdateBody__Params {
  _event: UpdateBody;

  constructor(event: UpdateBody) {
    this._event = event;
  }

  get _executorID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get body(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class UpdatePost extends ethereum.Event {
  get params(): UpdatePost__Params {
    return new UpdatePost__Params(this);
  }
}

export class UpdatePost__Params {
  _event: UpdatePost;

  constructor(event: UpdatePost) {
    this._event = event;
  }

  get _executorID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class posts__postByIDResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }

  getAuthorID(): BigInt {
    return this.value0;
  }

  getTitle(): string {
    return this.value1;
  }

  getBody(): string {
    return this.value2;
  }

  getTags(): string {
    return this.value3;
  }

  getGroupID(): BigInt {
    return this.value4;
  }

  getCreatedTimestamp(): BigInt {
    return this.value5;
  }

  getUpdatedTimestamp(): BigInt {
    return this.value6;
  }
}

export class posts__readPostResultValue0Struct extends ethereum.Tuple {
  get authorID(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get body(): string {
    return this[2].toString();
  }

  get tags(): string {
    return this[3].toString();
  }

  get groupID(): BigInt {
    return this[4].toBigInt();
  }

  get createdTimestamp(): BigInt {
    return this[5].toBigInt();
  }

  get updatedTimestamp(): BigInt {
    return this[6].toBigInt();
  }
}

export class posts extends ethereum.SmartContract {
  static bind(address: Address): posts {
    return new posts("posts", address);
  }

  administration(): Address {
    let result = super.call("administration", "administration():(address)", []);

    return result[0].toAddress();
  }

  try_administration(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "administration",
      "administration():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPostExist(postID: BigInt): boolean {
    let result = super.call("isPostExist", "isPostExist(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(postID)
    ]);

    return result[0].toBoolean();
  }

  try_isPostExist(postID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPostExist", "isPostExist(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(postID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  postByID(param0: BigInt): posts__postByIDResult {
    let result = super.call(
      "postByID",
      "postByID(uint256):(uint256,string,string,string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new posts__postByIDResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_postByID(param0: BigInt): ethereum.CallResult<posts__postByIDResult> {
    let result = super.tryCall(
      "postByID",
      "postByID(uint256):(uint256,string,string,string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new posts__postByIDResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  readPost(postID: BigInt): posts__readPostResultValue0Struct {
    let result = super.call(
      "readPost",
      "readPost(uint256):((uint256,string,string,string,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(postID)]
    );

    return changetype<posts__readPostResultValue0Struct>(result[0].toTuple());
  }

  try_readPost(
    postID: BigInt
  ): ethereum.CallResult<posts__readPostResultValue0Struct> {
    let result = super.tryCall(
      "readPost",
      "readPost(uint256):((uint256,string,string,string,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(postID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<posts__readPostResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _administration(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeletePostCall extends ethereum.Call {
  get inputs(): DeletePostCall__Inputs {
    return new DeletePostCall__Inputs(this);
  }

  get outputs(): DeletePostCall__Outputs {
    return new DeletePostCall__Outputs(this);
  }
}

export class DeletePostCall__Inputs {
  _call: DeletePostCall;

  constructor(call: DeletePostCall) {
    this._call = call;
  }

  get _executorID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DeletePostCall__Outputs {
  _call: DeletePostCall;

  constructor(call: DeletePostCall) {
    this._call = call;
  }
}

export class MakePostCall extends ethereum.Call {
  get inputs(): MakePostCall__Inputs {
    return new MakePostCall__Inputs(this);
  }

  get outputs(): MakePostCall__Outputs {
    return new MakePostCall__Outputs(this);
  }
}

export class MakePostCall__Inputs {
  _call: MakePostCall;

  constructor(call: MakePostCall) {
    this._call = call;
  }

  get _authorID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get title(): string {
    return this._call.inputValues[1].value.toString();
  }

  get body(): string {
    return this._call.inputValues[2].value.toString();
  }

  get groupID(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MakePostCall__Outputs {
  _call: MakePostCall;

  constructor(call: MakePostCall) {
    this._call = call;
  }
}

export class SetGroupContractAddressCall extends ethereum.Call {
  get inputs(): SetGroupContractAddressCall__Inputs {
    return new SetGroupContractAddressCall__Inputs(this);
  }

  get outputs(): SetGroupContractAddressCall__Outputs {
    return new SetGroupContractAddressCall__Outputs(this);
  }
}

export class SetGroupContractAddressCall__Inputs {
  _call: SetGroupContractAddressCall;

  constructor(call: SetGroupContractAddressCall) {
    this._call = call;
  }

  get groupContractAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGroupContractAddressCall__Outputs {
  _call: SetGroupContractAddressCall;

  constructor(call: SetGroupContractAddressCall) {
    this._call = call;
  }
}

export class UpdateBodyCall extends ethereum.Call {
  get inputs(): UpdateBodyCall__Inputs {
    return new UpdateBodyCall__Inputs(this);
  }

  get outputs(): UpdateBodyCall__Outputs {
    return new UpdateBodyCall__Outputs(this);
  }
}

export class UpdateBodyCall__Inputs {
  _call: UpdateBodyCall;

  constructor(call: UpdateBodyCall) {
    this._call = call;
  }

  get _executorID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get body(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UpdateBodyCall__Outputs {
  _call: UpdateBodyCall;

  constructor(call: UpdateBodyCall) {
    this._call = call;
  }
}

export class UpdateTitleCall extends ethereum.Call {
  get inputs(): UpdateTitleCall__Inputs {
    return new UpdateTitleCall__Inputs(this);
  }

  get outputs(): UpdateTitleCall__Outputs {
    return new UpdateTitleCall__Outputs(this);
  }
}

export class UpdateTitleCall__Inputs {
  _call: UpdateTitleCall;

  constructor(call: UpdateTitleCall) {
    this._call = call;
  }

  get _executorID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get postID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UpdateTitleCall__Outputs {
  _call: UpdateTitleCall;

  constructor(call: UpdateTitleCall) {
    this._call = call;
  }
}
